(function(root,factory){const create=factory();if(typeof module==='object'&&module.exports)module.exports=create;else root.createFitWorkoutAvatar=create})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function motionFor(ex){
  if(!ex)return {id:'neutral',label:'准备动作'};
  const name=ex.name||'',category=ex.category;
  if(category==='cardio')return {id:'march',label:'踏步节奏'};
  if(category==='mobility')return {id:'stretch',label:'舒展节奏'};
  if(category==='core')return {id:'core',label:'核心节奏'};
  if(category==='legs'||/深蹲|弓步|箭步|蹲举/.test(name))return {id:'squat',label:'下肢节奏'};
  if(/推举|肩推|推肩/.test(name))return {id:'overhead',label:'上推节奏'};
  if(category==='back'||/划船|下拉|引体|面拉/.test(name))return {id:'row',label:'拉的节奏'};
  if(category==='chest'||/卧推|俯卧撑|臂屈伸|下压/.test(name))return {id:'press',label:'推的节奏'};
  if(category==='arms'||/弯举/.test(name))return {id:'curl',label:'手臂节奏'};
  return {id:'neutral',label:'准备动作'};
 }
 function create(base,workout,{now=Date.now,exercises=[]}={}){
 function project(p){
  const live=workout.view();
  if(live.active){
   if(p.activity!=='idle')p=base.dispatch({type:'CANCEL'});
   const phase=live.phase==='paused'||live.phase==='finishing'?'paused':live.restRemainingMs>0||live.restOver?'resting':'training';
   const row=live.rows?.[live.focusRow??0],ex=exercises.find(e=>e.id===row?.exId),motion=motionFor(ex);
   const loaded=!!row?.sets.some(s=>s.weight>0)&&!!ex?.equipment?.some(x=>/哑铃|壶铃/.test(x));
   return {...p,state:p.displayMode==='animated'?phase:p.displayMode,activity:phase,sessionId:live.sessionId,remainingRestMs:live.restRemainingMs,isRestOver:live.restOver,feedback:null,realTraining:true,
    trainingExercise:row?{id:row.exId,name:row.name,row:row.row,done:row.sets.filter(s=>s.done).length,total:row.sets.length}:null,
    trainingMotion:motion.id,trainingMotionLabel:motion.label,trainingLoaded:loaded,
    trainingLabel:(row?.name||live.name)+' · '+(row?row.sets.filter(s=>s.done).length:live.done)+' / '+(row?row.sets.length:live.planned)+' 组已确认'};
  }
  const saved=live.savedRecord,age=saved?now()-Date.parse(saved.createdAt):Infinity;
  if(saved&&Number.isFinite(age)&&age>=0&&age<8000&&p.displayMode==='animated')return {...p,state:'completed',activity:'idle',feedback:{kind:'completed',recordType:'training',recordId:saved.id,revision:saved.revision},trainingLabel:'这次训练已保存 · '+live.done+' 组完成'};
  return p;
 }
 return {...base,refresh:()=>project(base.refresh()),setMode:mode=>project(base.setMode(mode)),dispatch(action){if(workout.view().active)throw Error('分身正在跟随实际训练，请在训练页操作。');return project(base.dispatch(action))}};
 }
 create.motionFor=motionFor;return create;
});
