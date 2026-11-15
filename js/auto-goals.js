/* Auto goals derived from the existing body profile and real records. This module never writes. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.FitAutoGoals=factory()})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 const shift=(date,n)=>new Date(Date.parse(date+'T00:00:00Z')+n*86400000).toISOString().slice(0,10);
 const monday=date=>shift(date,-((new Date(date+'T00:00:00Z').getUTCDay()+6)%7));
 const median=values=>{const list=values.filter(v=>Number.isFinite(v)).sort((a,b)=>a-b);if(!list.length)return null;const mid=list.length>>1;return list.length%2?list[mid]:(list[mid-1]+list[mid])/2};
 const validSet=set=>set&&Number.isInteger(set.reps)&&set.reps>=1&&set.reps<=180&&Number.isFinite(set.weight)&&set.weight>=0&&set.weight<=500;
 function setCount(row,kind){
  if(!row||row.type!=='strength'||!Array.isArray(row.items))return 0;
  let n=0;
  for(const item of row.items){
   if(!item||!Array.isArray(item.actualSets))continue;
   if(kind==='work'&&item.kind==='warmup')continue;
   for(const set of item.actualSets)if(validSet(set))n++;
  }
  return n;
 }
 function rowsByDate(rows,today,kind){
  if(!Array.isArray(rows))throw Error('原记录无法读取，自动目标已暂停；原数据未改动。');
  const seen=new Set(),out=[];
  for(const row of rows){
   if(!row||typeof row.id!=='string'||!row.id||!day(row.date))throw Error('原记录的编号或日期无法核对，自动目标已暂停。');
   if(seen.has(row.id))throw Error('原记录编号重复，自动目标已暂停；原数据未改动。');
   seen.add(row.id);
   if(row.date>today)continue;
   out.push({...row,sets:setCount(row,kind)});
  }
  return out;
 }
 function mealRows(rows,today){
  if(!Array.isArray(rows))throw Error('原饮食记录无法读取，自动目标已暂停；原数据未改动。');
  return rows.filter(row=>row&&day(row.date)&&row.date<=today);
 }
 function derive(source){
  const today=source?.today;
  if(!day(today))throw Error('目标日期无法核对，请检查设备日期后重试。');
  const profile=source.profile||{},macros=source.macros||{};
  const baseTarget=Number.isFinite(Number(macros.target))&&Number(macros.target)>0?Number(macros.target):0;
  const manual=Number.isFinite(Number(profile.targetCalories))&&Number(profile.targetCalories)>=1000&&Number(profile.targetCalories)<=6000;
  const mealList=mealRows(source.meals||[],today);
  const meals=mealList.filter(r=>r.date===today);
  const mealTotals=meals.reduce((sum,r)=>{sum.kcal+=Number(r.kcal)||0;sum.protein+=Number(r.protein)||0;sum.fat+=Number(r.fat)||0;sum.carb+=Number(r.carb)||0;return sum},{kcal:0,protein:0,fat:0,carb:0});
  const notes=[];
  // Nutrition target: the body profile decides it; enough own records may calibrate the calorie number inside a narrow band.
  let kcalTarget=baseTarget,kcalSource=manual?'manual':'auto',calibration=null;
  if(!manual&&baseTarget){
   const byDay=new Map();
   for(let i=1;i<=14;i++){const date=shift(today,-i);byDay.set(date,0)}
   for(const row of mealList){if(!byDay.has(row.date))continue;byDay.set(row.date,byDay.get(row.date)+(Number(row.kcal)||0))}
   const days=[...byDay.entries()].filter(([,kcal])=>kcal>0);
   if(days.length>=7){
    const value=Math.round(median(days.map(([,kcal])=>kcal)));
    const low=Math.round(baseTarget*.85),high=Math.round(baseTarget*1.15);
    kcalTarget=Math.min(high,Math.max(low,value));
    kcalSource='auto-calibrated';
    calibration={days:days.length,median:value,low,high};
   }else notes.push('记录不足 7 天，热量目标先用身体档案估算。');
  }
  // Training goal: today's plan first, otherwise the user's own recent confirmed sets.
  const draft=Array.isArray(source.draft)?source.draft:[];
  const planSets=draft.filter(r=>r&&r.kind!=='warmup').reduce((n,r)=>n+(Number.isInteger(r.sets)&&r.sets>=1?r.sets:0),0);
  const history=rowsByDate(source.history||[],today,'work');
  const recentDays=new Map();
  for(const row of history){if(row.date<shift(today,-27))continue;recentDays.set(row.date,(recentDays.get(row.date)||0)+row.sets)}
  const recentSets=[...recentDays.values()].filter(n=>n>0);
  let training={sessions:{target:1,source:'plan'},sets:{target:planSets,source:'plan'},available:true};
  if(planSets>0)notes.push('今日训练目标来自你保存的计划。');
  else if(recentSets.length>=1){
   const value=Math.max(1,Math.round(median(recentSets)));
   training={sessions:{target:1,source:'history'},sets:{target:value,source:'history'},available:true};
   notes.push('今日训练目标来自你最近的训练记录。');
  }else{
   training={sessions:{target:null,source:'none'},sets:{target:null,source:'none'},available:false};
   notes.push('今天的训练目标还没生成：先加一个动作或保存一次训练。');
  }
  // Weekly sessions goal: the user's own rhythm, an explicit override, or a plain reference value.
  const weeks=new Map();
  for(let i=0;i<8;i++)weeks.set(monday(shift(today,-7*i)),0);
  for(const row of history){const start=monday(row.date);if(!weeks.has(start))continue;weeks.set(start,weeks.get(start)+1)}
  const activeWeeks=[...weeks.values()].filter(n=>n>0);
  const override=source.weeklyTarget;
  let weekly;
  if(Number.isInteger(override)&&override>=1&&override<=7)weekly={target:override,source:'manual',basis:'你手动设定的每周训练次数'};
  else if(activeWeeks.length>=2)weekly={target:Math.min(6,Math.max(1,Math.round(median(activeWeeks)))),source:'history',basis:'按你最近 8 周的实际训练频率'};
  else weekly={target:3,source:'default',basis:'参考值：每周 3 次'};
  const weekStart=monday(today),weekSessions=history.filter(r=>r.date>=weekStart&&r.date<=today).length;
  const todaySets=history.filter(r=>r.date===today).reduce((n,r)=>n+r.sets,0);
  const ratio=(value,target)=>target>0?Math.round(value/target*100):0;
  return {
   today,
   nutrition:{kcal:{target:kcalTarget,source:kcalSource},protein:{target:Number(macros.protein)||0,source:manual?'manual':'auto'},fat:{target:Number(macros.fat)||0,source:manual?'manual':'auto'},carb:{target:Number(macros.carb)||0,source:manual?'manual':'auto'}},
   training,weekly,calibration,
   progress:{
    kcal:{value:Math.round(mealTotals.kcal),target:kcalTarget,ratio:ratio(mealTotals.kcal,kcalTarget),met:meals.length>0&&mealTotals.kcal>=kcalTarget,recorded:meals.length},
    protein:{value:Math.round(mealTotals.protein),target:Number(macros.protein)||0,ratio:ratio(mealTotals.protein,Number(macros.protein)||0),met:meals.length>0&&mealTotals.protein>=(Number(macros.protein)||0),recorded:meals.length},
    trainingSets:{value:todaySets,target:training.sets.target,ratio:ratio(todaySets,training.sets.target||0),met:training.available&&todaySets>=(training.sets.target||0)},
    weeklySessions:{value:weekSessions,target:weekly.target,ratio:ratio(weekSessions,weekly.target),met:weekSessions>=weekly.target}
   },
   notes
  };
 }
 return {day,shift,monday,median,setCount,derive};
});
