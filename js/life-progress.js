/* Derived training history only. No health, album or reward writes. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.FitLifeProgress=factory()})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 const shift=(date,n)=>new Date(Date.parse(date+'T00:00:00Z')+n*86400000).toISOString().slice(0,10);
 function week(today,offset=0){
  if(!day(today)||!Number.isInteger(offset)||offset>0||offset< -5200)throw Error('回顾日期无法核对，请检查设备日期后重试。');
  const weekday=new Date(today+'T00:00:00Z').getUTCDay(),start=shift(today,-((weekday+6)%7)+7*offset),end=shift(start,6);
  return {start,end,through:end<today?end:today,days:Array.from({length:7},(_,i)=>shift(start,i)),offset};
 }
 function facts(rows,kind,today){
  if(!Array.isArray(rows))throw Error('原记录格式无法读取，回顾已暂停；原数据未改动。');
  const ids=new Set();return rows.filter(row=>{
   if(!row||typeof row.id!=='string'||!row.id||!day(row.date)||ids.has(row.id))throw Error('原记录编号或日期无法核对，请在原页面核对后重试。');
   ids.add(row.id);return row.date<=today;
  }).map(row=>({...row,kind})).sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));
 }
 function comparable(ex){
  if(!ex||['cardio','mobility'].includes(ex.category)||/辅助|助力|弹力带/.test(ex.name))return false;
  return Array.isArray(ex.equipment)&&ex.equipment.some(x=>/杠铃|哑铃|壶铃|六角杠|绳索|固定器械|史密斯|地雷管|腿举机|提踵机|髋内收器械|髋外展器械|腰带深蹲机|雪橇机/.test(x))&&!ex.equipment.some(x=>/弹力带/.test(x));
 }
 function project(source,today,offset=0){
  const period=week(today,offset),catalogue=new Map((source.exercises||[]).map(x=>[x.id,x]));
  const training=facts(source.training,'training',today).filter(x=>x.date<=period.through),meals=facts(source.meals,'meal',today).filter(x=>x.date<=period.through);
  const points=new Map(),records=[];let excludedSets=0;
  for(const row of training){
   let confirmedSets=0,unverified=false,invalidSets=0;
   if(row.type==='strength'){
    if(!Array.isArray(row.items)||!row.items.length)unverified=true;
    for(const item of Array.isArray(row.items)?row.items:[]){
     if(!Array.isArray(item?.actualSets)||!item.actualSets.length){unverified=true;continue}
     for(const set of item.actualSets){
      if(!set||!Number.isInteger(set.reps)||set.reps<1||set.reps>180||!Number.isFinite(set.weight)||set.weight<0||set.weight>500){invalidSets++;continue}
      confirmedSets++;
      const ex=catalogue.get(item.exId);if(!comparable(ex)||set.weight===0)continue;
      if(!points.has(ex.id))points.set(ex.id,new Map());const days=points.get(ex.id),old=days.get(row.date);
      if(!old||set.weight>old.weight||set.weight===old.weight&&set.reps>old.reps)days.set(row.date,{exId:ex.id,name:ex.name,date:row.date,weight:set.weight,reps:set.reps,recordId:row.id});
     }
    }
   }
   const duration=Number.isInteger(row.durationSeconds)&&row.durationSeconds>=0&&row.durationSeconds<=1e8?row.durationSeconds:null;
   records.push({id:row.id,date:row.date,name:String(row.name||'训练记录').slice(0,100),type:row.type,confirmedSets,unverified,invalidSets,duration,imported:row.origin==='native-import'});
   if(row.date>=period.start)excludedSets+=invalidSets;
  }
  const lifts=[],milestones=[];
  for(const [exId,days] of points){
   const history=[...days.values()].sort((a,b)=>a.date.localeCompare(b.date));let best=null;
   for(const point of history){
    if(best&&point.weight>best.weight&&point.date>=period.start)milestones.push({...point,previous:best.weight,delta:Math.round((point.weight-best.weight)*1000)/1000});
    if(!best||point.weight>best.weight)best=point;
   }
   lifts.push({exId,name:catalogue.get(exId).name,best,baseline:history[0],days:history});
  }
  lifts.sort((a,b)=>a.name.localeCompare(b.name,'zh-CN')||a.exId.localeCompare(b.exId));
  const selected=records.filter(x=>x.date>=period.start),selectedMeals=meals.filter(x=>x.date>=period.start);
  const days=period.days.map(date=>({date,future:date>today,training:selected.filter(x=>x.date===date).length,meals:selectedMeals.filter(x=>x.date===date).length}));
  const earliest=[...training,...meals].reduce((a,x)=>x.date<a?x.date:a,today);
  return {period,earliest,days,records:selected.slice().reverse(),lifts,milestones:milestones.sort((a,b)=>b.date.localeCompare(a.date)||a.name.localeCompare(b.name,'zh-CN')),summary:{training:selected.length,trainingDays:days.filter(x=>x.training).length,meals:selectedMeals.length,mealDays:days.filter(x=>x.meals).length,confirmedSets:selected.reduce((n,x)=>n+x.confirmedSets,0),unverifiedRecords:selected.filter(x=>x.unverified||x.invalidSets).length,excludedSets,timedSessions:selected.filter(x=>x.duration!==null).length,timedSeconds:selected.reduce((n,x)=>n+(x.duration||0),0),untimedSessions:selected.filter(x=>x.duration===null).length}};
 }
 return {day,shift,week,comparable,project};
});
