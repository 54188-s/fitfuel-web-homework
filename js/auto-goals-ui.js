'use strict';
// Auto goal panel for the nutrition and training pages. It only reads existing records.
window.FitAutoGoalsUI=(()=>{
 const $=id=>document.getElementById(id),esc=v=>FitUI.esc(v),num=(v,d=0)=>FitCalc.round(v,d).toLocaleString('zh-CN',{maximumFractionDigits:d});
 const sources={manual:'手动设定',auto:'按身体档案估算','auto-calibrated':'按最近 14 天记录校准',plan:'来自今天的计划',history:'来自最近的训练记录',none:'暂无目标',default:'参考值：每周 3 次'};
 let host=null;
 function build(){
  const store=FitStore,profile=store.profile(),training=store.training();
  return {today:store.today(),profile,macros:FitCalc.calculateMacros(profile),
   draft:training.draftDate===store.today()?training.draft:[],
   history:store.history(),
   meals:store.list('meals').filter(m=>m&&store.validDate(m.date)),
   weeklyTarget:store.goalSettings().weeklySessions};
 }
 function state(){
  try{return {ok:true,view:FitAutoGoals.derive(build())}}
  catch(error){return {ok:false,message:error.message||'自动目标暂时无法显示，请稍后重试。'}}
 }
 function render(){
  if(!host)return;
  const result=state();
  if(!result.ok){host.innerHTML='<h2>自动目标</h2><p class="muted">'+esc(result.message)+'</p>';return}
  const v=result.view,p=v.progress,stat=(label,value,unit,sub)=>FitUI.stat(label,value,unit,sub);
  host.innerHTML='<h2>自动目标</h2><p class="muted">按你的身体档案和真实记录自动生成；记录不足时只给参考值，不做处罚。只有保存后的记录才计入目标。</p>'+
   '<div class="stats">'+stat('今日热量目标',num(v.nutrition.kcal.target),'kcal',sources[v.nutrition.kcal.source]||'')+
   stat('今日蛋白质目标',num(v.nutrition.protein.target),'g',sources[v.nutrition.protein.source]||'')+
   stat('今日训练目标',v.training.available?num(v.training.sets.target):'待定','组',v.training.available?(sources[v.training.sets.source]||''):'先加一个动作或保存一次训练')+
   stat('每周训练目标',num(v.weekly.target),'次',sources[v.weekly.source]||'')+'</div>'+
   '<div class="auto-goal-progress">'+FitUI.progress('今日热量',p.kcal.value,p.kcal.target,'var(--mint)','kcal')+
   FitUI.progress('今日蛋白质',p.protein.value,p.protein.target,'var(--mint)')+
   (v.training.available?FitUI.progress('今日训练组',p.trainingSets.value,p.trainingSets.target,'var(--cyan)','组'):'')+
   FitUI.progress('本周训练',p.weeklySessions.value,p.weeklySessions.target,'#ffbd59','次')+'</div>'+
   '<p class="auto-goal-state">'+(p.kcal.met?'今天的热量目标已达成。':p.kcal.recorded?'今天还差一点，按你自己的节奏来。':'今天还没有记录，先记一餐就会开始计算。')+
   (p.trainingSets.met?'今天的训练目标已达成。':p.weeklySessions.met?'本周训练目标已达成。':'')+'</p>'+
   '<div class="auto-goal-weekly"><label for="autoGoalWeekly">每周训练目标（1 到 7 次）<input id="autoGoalWeekly" type="number" min="1" max="7" step="1" inputmode="numeric" placeholder="自动" value="'+(v.weekly.source==='manual'?v.weekly.target:'')+'"></label>'+
   '<div class="actions"><button type="button" id="autoGoalSaveWeekly" class="secondary">保存每周目标</button><button type="button" id="autoGoalResetWeekly" class="ghost">恢复自动</button></div></div>'+
   (v.notes.length?'<p class="muted">'+v.notes.map(esc).join(' ')+'</p>':'');
  const input=$('autoGoalWeekly'),save=$('autoGoalSaveWeekly'),reset=$('autoGoalResetWeekly');
  if(save)save.onclick=()=>{try{FitStore.saveGoalSettings({weeklySessions:input.value});FitUI.toast('每周训练目标已保存');render()}catch(error){FitUI.toast(error.message,'error')}};
  if(reset)reset.onclick=()=>{try{FitStore.saveGoalSettings({weeklySessions:''});FitUI.toast('已恢复自动目标');render()}catch(error){FitUI.toast(error.message,'error')}};
 }
 function mount(selector){
  const anchor=document.querySelector(selector);if(!anchor)return;
  const panel=anchor.closest('section')||anchor;
  if(!document.getElementById('autoGoals')){
   host=document.createElement('section');host.id='autoGoals';host.className='panel auto-goals';
   panel.after(host);
  }else host=document.getElementById('autoGoals');
  render();
  document.addEventListener('fitfuel:workout-changed',render);
 }
 return {mount,render};
})();
