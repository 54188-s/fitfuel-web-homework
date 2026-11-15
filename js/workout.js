/* The existing training draft is authoritative; the room only projects its confirmed state. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createFitWorkout=factory})(typeof globalThis!=='undefined'?globalThis:this,function(adapter,store,data,calc,{now=Date.now}={}){
 const copy=x=>JSON.parse(JSON.stringify(x)),object=x=>x&&typeof x==='object'&&!Array.isArray(x),int=(n,a,b)=>Number.isInteger(n)&&n>=a&&n<=b,num=(n,a,b)=>Number.isFinite(n)&&n>=a&&n<=b;
 const active=s=>s&&['running','paused','finishing'].includes(s.phase);
 function raw(key,fallback){const r=adapter.getRaw('fitfuel_'+key);if(r===null||r===undefined||r==='')return copy(fallback);try{return typeof r==='string'?JSON.parse(r):copy(r)}catch{throw Error('原训练数据无法读取，已保留，请先核对记录。')}}
 function read(){
  const t=raw('training',store.training());
  if(!object(t)||!Array.isArray(t.draft)||!Array.isArray(t.plans))throw Error('原训练草稿无法核对，已保留。');
  const s=t.session;
  if(s){
   if(!object(s)||s.schema!==1||!['running','paused','finishing','finished','cancelled'].includes(s.phase)||typeof s.id!=='string'||!store.validDate(s.date)||!num(s.elapsedMs,0,1e12)||!num(s.updatedAt,0,1e15)||!(s.startedAt===null||num(s.startedAt,0,1e15))||!(s.lastResumeAt===null||num(s.lastResumeAt,0,1e15))||!int(s.restSeconds,0,600)||typeof s.autoRest!=='boolean')throw Error('训练会话版本或结构异常，原值已保留。');
   if(s.rest&&(!object(s.rest)||!int(s.rest.durationMs,1000,600000)||!num(s.rest.endsAt,0,1e15)||!(s.rest.remainingMs===null||num(s.rest.remainingMs,0,s.rest.durationMs))))throw Error('休息记录异常，原值已保留。');
   if(s.phase==='finishing'&&(!object(s.finish)||!store.validDate(s.finish.date)||!num(s.finish.endedAt,0,1e15)||!num(s.finish.bodyWeight,30,300)))throw Error('待保存训练无法核对，原值已保留。');
   if(active(s)&&s.focusRow!==undefined&&(!int(s.focusRow,0,t.draft.length-1)||!t.draft[s.focusRow]))throw Error('陪练动作位置无法核对，原草稿已保留。');
  }
  return t;
 }
 function values(row){
  if(!object(row)||!data.EXERCISES.some(x=>x.id===row.exId)||!int(row.sets,1,30)||!int(row.reps,1,180)||!num(row.weight,0,500))throw Error('动作组数、次数或负重异常，请在计划页核对。');
  if(row.setValues!==undefined&&(!Array.isArray(row.setValues)||row.setValues.length!==row.sets))throw Error('逐组数据不完整，原草稿已保留。');
  return Array.from({length:row.sets},(_,i)=>{
   const v=row.setValues?.[i]||{reps:row.reps,weight:row.weight};
   if(!object(v)||!int(v.reps,1,180)||!num(v.weight,0,500))throw Error('每组次数或负重无效，请更正后保存。');
   return {reps:v.reps,weight:v.weight,done:!!(row.completedSets?.[i]??row.completed)};
  });
 }
 function save(t){if(!store.set('training',t))throw Error('训练进度未保存，请重试；原记录不受影响。')}
 function writable(t){if(t.session&&['finishing','finished'].includes(t.session.phase))throw Error(t.session.phase==='finishing'?'请先重试保存这次训练。':'这次训练已保存，请开始下一次训练。');if(t.session&&now()<t.session.updatedAt)throw Error('设备时间早于上次记录，请校正后重试。')}
 function summary(t){
  const s=t.session,rows=t.draft.map((r,i)=>({row:i,exId:r.exId,name:data.EXERCISES.find(x=>x.id===r.exId)?.name||'训练动作',sets:values(r)}));
  const done=rows.reduce((n,r)=>n+r.sets.filter(x=>x.done).length,0),planned=rows.reduce((n,r)=>n+r.sets.length,0),time=now();
  const remaining=s?.rest?(s.phase==='paused'?s.rest.remainingMs:Math.min(s.rest.durationMs,Math.max(0,s.rest.endsAt-time))):0;
  const history=raw('history',[]);if(!Array.isArray(history))throw Error('训练历史格式异常，已保留。');
  const saved=s?.phase==='finished'?history.find(r=>r.id===s.recordId)||null:null;
  const first=rows.findIndex(r=>r.sets.some(x=>!x.done)),focusRow=active(s)&&s.focusRow!==undefined?s.focusRow:Math.max(0,first);
  return {phase:s?.phase||'idle',active:!!active(s),locked:!!active(s),name:t.draftName||'我的训练',date:s?.date||t.draftDate,sessionId:s?.id||null,done,planned,rows,focusRow,
   elapsedSeconds:s?.startedAt===null?null:s?Math.floor((s.elapsedMs+(s.phase==='running'&&time>=s.updatedAt?Math.max(0,time-s.lastResumeAt):0))/1000):null,
   restRemainingMs:remaining||0,restOver:!!s?.rest&&remaining===0,restSeconds:s?.restSeconds??90,autoRest:s?.autoRest??true,clockWarning:!!s&&time<s.updatedAt,savedRecord:saved};
 }
 function view(){return summary(read())}
 function edit(row,index,field,value){const t=read();writable(t);if(t.session?.phase==='paused')throw Error('请先恢复训练，再修改本组。');const r=t.draft[row],sets=values(r);if(!sets[index]||!['reps','weight','done'].includes(field))throw Error('未找到训练组。');
  if(field==='done'&&typeof value!=='boolean'||field==='reps'&&!int(value,1,180)||field==='weight'&&!num(value,0,500))throw Error('请填写有效的组次与负重。');
  const was=sets[index].done;sets[index][field]=value;r.setValues=sets.map(({reps,weight})=>({reps,weight}));r.completedSets=sets.map(x=>x.done);r.completed=r.completedSets.every(Boolean);
  if(t.session){t.session.updatedAt=now();t.session.focusRow=row;if(field==='done'&&value&&!was&&t.session.autoRest&&t.session.restSeconds>0)t.session.rest={durationMs:t.session.restSeconds*1000,endsAt:now()+t.session.restSeconds*1000,remainingMs:null};if(field==='done'&&!value)t.session.rest=null}
  save(t);return summary(t);
 }
 function focus(row){const t=read();writable(t);if(t.session?.phase!=='running')throw Error('开始或恢复训练后，再选择陪练动作。');if(!int(row,0,t.draft.length-1))throw Error('未找到这个训练动作。');t.session.focusRow=row;t.session.updatedAt=now();save(t);return summary(t)}
 function start(){const t=read();if(active(t.session))throw Error('已有训练进行中，请继续这次训练。');if(!t.draft.length)throw Error('先从现有动作库加入训练动作。');t.draft.forEach(values);
  const id=store.uid();if(t.session?.phase==='finished'||raw('history',[]).some(r=>r.id==='strength-'+t.draftDate+'-'+t.draftId)){t.draftId=id;t.draft.forEach(r=>{r.completed=false;r.completedSets=Array(r.sets).fill(false)})}
  const time=now(),old=t.session;t.session={schema:1,id,date:store.today(),phase:'running',startedAt:time,elapsedMs:0,lastResumeAt:time,updatedAt:time,restSeconds:old?.restSeconds??90,autoRest:old?.autoRest??true,rest:null};t.draftDate=store.today();save(t);return summary(t);
 }
 function action(type,value){const t=read(),s=t.session;if(!s||!['running','paused'].includes(s.phase))throw Error('请先开始训练。');writable(t);const time=now();
  if(type==='pause'&&s.phase==='running'){s.elapsedMs+=time-s.lastResumeAt;s.lastResumeAt=null;if(s.rest)s.rest.remainingMs=Math.min(s.rest.durationMs,Math.max(0,s.rest.endsAt-time));s.phase='paused'}
  else if(type==='resume'&&s.phase==='paused'){s.phase='running';s.lastResumeAt=time;if(s.rest){s.rest.endsAt=time+s.rest.remainingMs;s.rest.remainingMs=null}}
  else if(type==='skipRest'){s.rest=null}
  else if(type==='restSeconds'&&[0,60,90,120].includes(value)){s.restSeconds=value;s.autoRest=value>0;if(value===0)s.rest=null}
  else if(type==='cancel'){s.phase='cancelled';s.rest=null}
  else throw Error('当前训练状态无法执行此操作。');
  s.updatedAt=time;save(t);return summary(t);
 }
 function makeRecord(t,s){
  const items=t.draft.map(r=>{const sets=values(r).filter(x=>x.done);return {...r,plannedSets:r.sets,sets:sets.length,actualSets:sets.map(({reps,weight})=>({reps,weight}))}}).filter(r=>r.sets);
  if(!items.length)throw Error('至少确认一个实际完成的训练组。');
  const kcal=items.reduce((n,r)=>n+r.actualSets.reduce((sum,x)=>sum+calc.calculateStrengthCalories(data.EXERCISES.find(e=>e.id===r.exId),1,x.reps,x.weight,s.finish.bodyWeight),0),0);
  return {id:'strength-'+s.finish.date+'-'+t.draftId,date:s.finish.date,type:'strength',name:t.draftName||'我的训练',items,kcal:calc.round(kcal),sessionId:s.id,startedAt:s.startedAt===null?null:new Date(s.startedAt).toISOString(),endedAt:new Date(s.finish.endedAt).toISOString(),durationSeconds:s.startedAt===null?null:Math.floor(s.elapsedMs/1000),estimateMethod:'existing-strength-v1',estimateBodyWeight:s.finish.bodyWeight};
 }
 function finish(){let t=read(),s=t.session;
  if(s?.phase==='finished'){const row=raw('history',[]).find(r=>r.id===s.recordId);if(!row)throw Error('这条历史记录已删除，不会重新生成；可开始下一次训练。');return summary(t)}
  if(s?.phase!=='finishing'){
   if(!summary(t).done)throw Error('请先勾选实际完成的训练组。');writable(t);const time=now();
   if(!s||s.phase==='cancelled')s={schema:1,id:store.uid(),date:t.draftDate||store.today(),phase:'running',startedAt:null,elapsedMs:0,lastResumeAt:null,updatedAt:time,restSeconds:90,autoRest:true,rest:null};
   if(s.phase==='running'&&s.startedAt!==null)s.elapsedMs+=time-s.lastResumeAt;
   s.phase='finishing';s.lastResumeAt=null;s.rest=null;s.updatedAt=time;s.finish={date:s.startedAt===null?t.draftDate:store.today(),endedAt:time,bodyWeight:store.profile().weight};t.session=s;makeRecord(t,s);save(t);
  }
  const row=makeRecord(t,s),history=raw('history',[]);if(!Array.isArray(history))throw Error('原训练历史无法读取，已保留。');
  if(!history.some(x=>x.id===row.id)&&!store.set('history',[...history,row]))throw Error('训练记录尚未保存，请重试；已确认的组保留。');
  s.phase='finished';s.recordId=row.id;s.updatedAt=now();try{save(t)}catch{throw Error('训练历史已保存，收尾进度未确认，请重试；不会重复记账。')}return summary(t);
 }
 function completeExercise(index,done){const t=read();writable(t);if(active(t.session))throw Error('训练中请逐组确认。');if(typeof done!=='boolean'||!t.draft[index])throw Error('未找到动作。');const r=t.draft[index],sets=values(r);r.setValues=sets.map(({reps,weight})=>({reps,weight}));r.completedSets=sets.map(()=>done);r.completed=done;save(t);return summary(t)}
 return {view,start,edit,focus,action,finish,completeExercise};
});
if(typeof window!=='undefined'&&window.FitStore)window.FitWorkout=window.createFitWorkout({getRaw:k=>localStorage.getItem(k)},FitStore,FitData,FitCalc);
