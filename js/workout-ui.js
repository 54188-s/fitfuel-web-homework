'use strict';
window.FitWorkoutUI=(()=>{
 let timer=null,onSaved=null,clockView=null,clockSample=0;
 const esc=x=>FitUI.esc(x),engine=()=>window.FitWorkout,$=id=>document.getElementById(id);
 const time=x=>x===null?'未计时':Math.floor(x/60)+':'+String(x%60).padStart(2,'0');
 function message(text){$('workoutMessage').textContent=text}
 function status(v){return v.clockWarning?'请校正设备时间':({idle:'准备开始',running:v.restRemainingMs>0?'组间休息':v.restOver?'休息结束，准备下一组':'训练进行中',paused:'训练已暂停',finishing:'记录待保存',finished:'这次训练已保存',cancelled:'计时已结束，已勾选的组仍保留'})[v.phase]}
 function controls(v){return '<div class="workout-heading"><div><h2>'+esc(status(v))+'</h2><p id="workoutSummary">'+v.done+' / '+v.planned+' 组已确认 · <span id="workoutElapsed">'+time(v.elapsedSeconds)+'</span></p></div><a class="text-link" href="life.html">看看我的分身</a></div><div class="workout-controls">'+
  (!v.active?'<button type="button" class="primary" data-workout-action="start">'+(v.phase==='finished'?'开始下一次训练':'开始本次训练')+'</button>':'')+
  (v.phase==='running'?'<button type="button" class="secondary" data-workout-action="pause">暂停训练</button>':'')+(v.phase==='paused'?'<button type="button" class="primary" data-workout-action="resume">恢复训练</button>':'')+
  (v.restRemainingMs>0||v.restOver?'<button type="button" class="secondary" data-workout-action="skipRest">结束休息</button>':'')+
  (['running','paused'].includes(v.phase)?'<button type="button" class="ghost" data-workout-action="cancel">停止计时</button>':'')+
  '</div><div class="workout-rest"><label for="workoutRest">完成一组后休息</label><select id="workoutRest" '+(!['running','paused'].includes(v.phase)?'disabled':'')+'>'+[0,60,90,120].map(n=>'<option value="'+n+'" '+(v.restSeconds===n?'selected':'')+'>'+(n?n+' 秒':'关闭自动休息')+'</option>').join('')+'</select><strong id="workoutRestClock" aria-live="off">'+(v.restRemainingMs>0?Math.ceil(v.restRemainingMs/1000)+' 秒':v.restOver?'时间到，准备好再继续':'由你确认每一组')+'</strong></div><p class="muted">计时结束不会勾选下一组。保存后才计入历史和成长；休息、暂停与陪练动画不会自动生成记录。</p>'}
 function rows(v){return v.rows.length?v.rows.map(r=>'<section class="workout-exercise" data-workout-row="'+r.row+'"><div class="workout-exercise-heading"><h3>'+esc(r.name)+'</h3>'+ (v.active?'<button type="button" class="workout-focus" data-workout-focus="'+r.row+'" aria-pressed="'+(v.focusRow===r.row)+'" '+(v.phase!=='running'?'disabled':'')+'>'+(v.focusRow===r.row?'分身正在跟练':'分身跟练这个动作')+'</button>':'')+'<a href="exercise.html?id='+encodeURIComponent(r.exId)+'">查看动作图示</a></div><div class="workout-columns" aria-hidden="true"><span>组</span><span>次数 / 秒</span><span>负重 kg</span><span>完成</span></div>'+r.sets.map((s,i)=>'<div class="workout-set '+(s.done?'is-done':'')+'"><span class="workout-set-number">'+(i+1)+'</span><label><span class="sr-only">'+esc(r.name)+' 第'+(i+1)+'组次数或秒</span><input inputmode="numeric" type="number" min="1" max="180" step="1" value="'+s.reps+'" data-workout-field="reps" data-set="'+i+'" '+(['paused','finishing','finished'].includes(v.phase)?'disabled':'')+'></label><label><span class="sr-only">'+esc(r.name)+' 第'+(i+1)+'组负重</span><input inputmode="decimal" type="number" min="0" max="500" step="0.5" value="'+s.weight+'" data-workout-field="weight" data-set="'+i+'" '+(['paused','finishing','finished'].includes(v.phase)?'disabled':'')+'></label><label class="workout-check"><input type="checkbox" data-workout-field="done" data-set="'+i+'" '+(s.done?'checked':'')+' aria-label="确认'+esc(r.name)+'第'+(i+1)+'组完成" '+(['paused','finishing','finished'].includes(v.phase)?'disabled':'')+'></label></div>').join('')+
  (!v.active&&v.phase!=='finished'?'<label class="check workout-bulk"><input type="checkbox" data-done="'+r.row+'" '+(r.sets.every(s=>s.done)?'checked':'')+'>补录这个动作全部 '+r.sets.length+' 组</label>':'')+'</section>').join(''):'<p class="muted">先到计划设计，从现有动作库选择训练。</p>'}
 function locked(v){const disabled=v.active||v.phase==='finishing';for(const id of ['planName','addExercise','savePlan','clearPlan'])if($(id))$(id).disabled=disabled;document.querySelectorAll('#planRows input,#planRows button,#presets button,#savedPlans button').forEach(n=>n.disabled=disabled)}
 function render(){
  const host=$('workoutSession');if(!host)return;
  try{
   const v=engine().view();locked(v);host.innerHTML=controls(v);$('todayRows').innerHTML=rows(v);$('todayTotal').innerHTML=FitUI.progress('已完成训练组',v.done,v.planned,'var(--mint)','组');
   $('finishTraining').textContent=v.phase==='finishing'?'重试保存这次训练':'保存已完成的训练';$('finishTraining').disabled=v.phase==='finished'||v.done===0||v.clockWarning;
   clockView=v;clockSample=Date.now();tick();
  }catch(error){host.textContent=error.message;message(error.message);for(const id of ['planName','addExercise','savePlan','clearPlan','finishTraining'])if($(id))$(id).disabled=true;document.querySelectorAll('#planRows input,#planRows button,#presets button,#savedPlans button').forEach(n=>n.disabled=true)}
 }
 function operate(fn,success='训练进度已保存',refresh=true){
  const focused=document.activeElement,field=focused?.dataset.workoutField,set=focused?.dataset.set,row=focused?.closest('[data-workout-row]')?.dataset.workoutRow;
  try{fn();message(success);if(refresh){render();if(field&&row!==undefined)$('todayRows').querySelector('[data-workout-row="'+row+'"] [data-workout-field="'+field+'"][data-set="'+set+'"]')?.focus({preventScroll:true})}else{clockView=engine().view();for(const b of document.querySelectorAll("[data-workout-focus]")){const selected=Number(b.dataset.workoutFocus)===clockView.focusRow;b.setAttribute("aria-pressed",String(selected));b.textContent=selected?"分身正在跟练":"分身跟练这个动作"}clockSample=Date.now();tick()}document.dispatchEvent(new Event('fitfuel:workout-changed'));onSaved?.()}
  catch(error){message(error.message||'进度未保存，请重试。');render()}
 }
 function tick(){
  if(timer)clearTimeout(timer);timer=null;
  if(document.hidden)return;
  try{if(!clockView)return;const delta=Math.max(0,Date.now()-clockSample),v={...clockView};if(v.phase==='running'){if(v.elapsedSeconds!==null)v.elapsedSeconds+=Math.floor(delta/1000);v.restRemainingMs=Math.max(0,v.restRemainingMs-delta);v.restOver=(clockView.restRemainingMs>0||clockView.restOver)&&v.restRemainingMs===0}if($('workoutElapsed'))$('workoutElapsed').textContent=time(v.elapsedSeconds);if($('workoutRestClock'))$('workoutRestClock').textContent=v.restRemainingMs>0?Math.ceil(v.restRemainingMs/1000)+' 秒':v.restOver?'时间到，准备好再继续':'由你确认每一组';
   const heading=$('workoutSession')?.querySelector('h2');if(heading)heading.textContent=status(v);
   if(v.active&&v.phase!=='finishing')timer=setTimeout(()=>tick(),1000);
  }catch{} // Read errors are displayed by render and never reset persisted state.
 }
 function init(callback){
  onSaved=callback;
  if(!$('workoutSession')){const host=document.createElement('section');host.id='workoutSession';host.className='workout-session';$('todayRows').before(host);const m=document.createElement('p');m.id='workoutMessage';m.setAttribute('role','status');host.after(m)}
  $('workoutSession').onclick=e=>{const b=e.target.closest('[data-workout-action]');if(!b)return;const type=b.dataset.workoutAction;operate(()=>type==='start'?engine().start():engine().action(type))};
  $('workoutSession').onchange=e=>{if(e.target.id==='workoutRest')operate(()=>engine().action('restSeconds',Number(e.target.value)))};
  $('todayRows').onclick=e=>{const button=e.target.closest('[data-workout-focus]');if(!button)return;const row=button.dataset.workoutFocus;operate(()=>engine().focus(Number(row)),'分身已切换到这个动作');$('todayRows').querySelector('[data-workout-focus=\"'+row+'\"]')?.focus({preventScroll:true})};
  $('todayRows').onchange=e=>{const el=e.target,field=el.dataset.workoutField,row=el.closest('[data-workout-row]');
   if(field&&row){if(!el.checkValidity()){el.setAttribute('aria-invalid','true');return}el.removeAttribute('aria-invalid');operate(()=>engine().edit(Number(row.dataset.workoutRow),Number(el.dataset.set),field,field==='done'?el.checked:Number(el.value)),'训练进度已保存',field==='done');return}
   if(el.dataset.done!==undefined){const index=Number(el.dataset.done),checked=el.checked;operate(()=>engine().completeExercise(index,checked))}
  };
  $('finishTraining').onclick=()=>operate(()=>engine().finish(),'训练已保存，回生活间看看分身吧。');
  if(!window.__workoutUiBound){window.__workoutUiBound=true;window.addEventListener('pagehide',()=>{if(timer)clearTimeout(timer);timer=null});document.addEventListener('visibilitychange',()=>{if(document.hidden){if(timer)clearTimeout(timer);timer=null}else render()})}
  render();
 }
 return {init,render};
})();
