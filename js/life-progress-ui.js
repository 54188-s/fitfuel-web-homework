'use strict';
(()=>{
 const root=document.getElementById('lifeProgress'),model=window.FitLifeProgress;if(!root||!model)return;
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let offset=0,selected='',page=1,view=null,stamp='';
 const date=x=>x.slice(5).replace('-',' / '),format=x=>Number(x.toFixed(3)).toLocaleString('zh-CN');
 function leaveMemory(row,title){return '<button type="button" data-album-record-id="'+esc(row.recordId||row.id)+'" data-album-record-kind="training" data-album-record-title="'+esc(Array.from(title).slice(0,40).join(''))+'">为这次留念</button>'}
 function lift(){
  const host=root.querySelector('#progressLift');if(!host)return;
  const entry=view.lifts.find(x=>x.exId===selected)||view.lifts[0];if(!entry)return;selected=entry.exId;
  const weekly=entry.days.filter(x=>x.date>=view.period.start),max=Math.max(entry.best.weight,1);
  host.innerHTML='<div class="progress-best"><div><h4>截至这周的单组最高负重</h4><p><strong>'+format(entry.best.weight)+' <span>kg</span></strong><time datetime="'+entry.best.date+'">'+entry.best.date+'</time></p></div><a href="exercise.html?id='+encodeURIComponent(entry.exId)+'">查看动作图示</a></div><ol class="progress-load-days" aria-label="'+esc(entry.name)+'本周每日最高负重">'+view.days.map(d=>{const point=weekly.find(x=>x.date===d.date);return '<li><span class="progress-load-label">'+(point?format(point.weight)+' kg':d.future?'未到':'未记录')+'</span><span class="progress-load-track" aria-hidden="true"><i style="height:'+(point?Math.max(3,point.weight/max*100):0)+'%"></i></span><span>'+date(d.date)+'</span></li>'}).join('')+'</ol><p class="progress-note">'+(entry.baseline.date===entry.best.date?'这次是已记录的起点，先把自己的节奏记下来。':'起点记录 '+entry.baseline.date+' · '+format(entry.baseline.weight)+' kg。')+' 同一天只取最高负重；没有记录的日期留空。</p>';
 }
 function history(){
  const host=root.querySelector('#progressHistory'),rows=view.records.slice((page-1)*8,page*8),pages=Math.max(1,Math.ceil(view.records.length/8));
  host.innerHTML=rows.length?'<ol class="progress-session-list">'+rows.map(r=>'<li><div><time datetime="'+r.date+'">'+r.date+'</time><h4>'+esc(r.name)+'</h4><p>'+(r.type==='strength'?(r.confirmedSets?r.confirmedSets+' 组已确认':'缺少逐组数据'):r.type==='cardio'?'有氧记录':'训练记录')+' · '+(r.duration===null?'时长未记录':Math.floor(r.duration/60)+' 分 '+r.duration%60+' 秒')+(r.imported?' · 导入记录':'')+'</p></div>'+leaveMemory(r,r.name)+'</li>').join('')+'</ol><div class="progress-pages"><button type="button" data-progress-page="-1" '+(page===1?'disabled':'')+'>上一页</button><span>'+page+' / '+pages+'</span><button type="button" data-progress-page="1" '+(page===pages?'disabled':'')+'>下一页</button></div>':'<p class="progress-empty">这一周还没有训练记录。休息不会扣成长，下一次练完再回来看看。</p>';
 }
 function render(){
  const s=view.summary,week=view.period;
  root.innerHTML='<div class="progress-heading"><div><h2 id="progressTitle">这一周，留下了什么。</h2><p>回看真实记录，按自己的节奏往前走。</p></div><div class="progress-week-nav" role="group" aria-label="切换回顾周"><button type="button" data-progress-week="-1" '+(week.start<=view.earliest||offset===-5200?'disabled':'')+' aria-label="查看上一周">上一周</button><span id="progressWeekLabel">'+date(week.start)+' — '+date(week.end)+(offset===0?' · 本周':'')+'</span><button type="button" data-progress-week="1" '+(!offset?'disabled':'')+' aria-label="查看下一周">下一周</button></div></div>'+
   '<p class="progress-companion">'+(s.training?('这周你在 '+s.trainingDays+' 天里留下了 '+s.training+' 次训练。'+(view.milestones.length?'有 '+view.milestones.length+' 次单组负重高于此前记录日，下面可以回看。':'每一条确认过的记录，都是自己的积累。')):'这周可以慢一点。训练、好好吃饭和休息，都由你自己安排。')+'</p><ol class="progress-week-strip" aria-label="周一至周日的已存记录">'+view.days.map((d,i)=>'<li aria-label="'+d.date+'，'+(d.future?'尚未到来':d.training+'次训练，'+d.meals+'条饮食')+'" class="'+(d.future?'is-future':d.training?'has-training':'')+'"><span>'+['周一','周二','周三','周四','周五','周六','周日'][i]+'</span><time datetime="'+d.date+'">'+Number(d.date.slice(8))+'</time><span>'+(d.future?'未到':d.training?'练 '+d.training:'未记')+'</span><small>'+(d.meals?'餐 '+d.meals:'')+'</small></li>').join('')+'</ol>'+
   '<dl class="progress-facts"><div><dt>确认的训练组</dt><dd>'+s.confirmedSets+' <span>组</span></dd></div><div><dt>有计时的训练</dt><dd>'+Math.floor(s.timedSeconds/60)+' <span>分 · '+s.timedSessions+' 次</span></dd></div><div><dt>饮食记录</dt><dd>'+s.meals+' <span>条 · '+s.mealDays+' 天</span></dd></div></dl><p class="progress-note">'+(s.unverifiedRecords?s.unverifiedRecords+' 条训练缺少完整有效逐组数据，未推算缺失组。':'只统计已保存的实际组，不把计划当作完成。')+' '+(s.untimedSessions?s.untimedSessions+' 次训练没有计时，不补造时长。':'计时时长含组间休息，沿用原记录。')+'</p>'+
   '<div class="progress-columns"><section class="progress-lifts" aria-labelledby="progressLiftsTitle"><h3 id="progressLiftsTitle">把变化看清楚</h3>'+(view.lifts.length?'<label for="progressExercise">选择有实际负重记录的动作</label><select id="progressExercise">'+view.lifts.map(x=>'<option value="'+esc(x.exId)+'" '+(x.exId===selected?'selected':'')+'>'+esc(x.name)+'</option>').join('')+'</select><div id="progressLift"></div>':'<p class="progress-empty">保存有实际次数和负重的训练组后，这里会出现动作记录。首条只作起点，不会虚构一次突破。</p><a href="training.html">去记录一次训练</a>')+'<details class="progress-method"><summary>这些数字怎么算？</summary><p>负重只比较同一动作中你填写的正数 kg；自重、弹力带、辅助动作、有氧和拉伸不做负重纪录。每个日期取一组最高值，同重不重复记纪录，首个日期作为起点。次数、器械倍率和单侧／总重沿原记录口径，不估算1RM，也不据此判断身体或力量变化。导入与补录只参与回顾，不补发游戏奖励。修改、删除原记录后会重新计算。</p></details></section>'+
   '<section class="progress-milestones" aria-labelledby="progressMilestoneTitle"><h3 id="progressMilestoneTitle">值得留住的小进展</h3>'+(view.milestones.length?'<ul>'+view.milestones.slice(0,12).map(m=>'<li><time datetime="'+m.date+'">'+m.date+'</time><h4>'+esc(m.name)+'</h4><p>当天最高 '+format(m.weight)+' kg · 此前 '+format(m.previous)+' kg</p>'+leaveMemory(m,m.name+'的训练进展')+'</li>').join('')+'</ul>'+(view.milestones.length>12?'<p class="progress-note">本周共 '+view.milestones.length+' 项，先展示最近12项；全部原记录可在下方查看。</p>':''):'<p class="progress-empty">这周没有新增负重纪录也没关系。先认识自己的起点，训练不必每次都更重。</p>')+'</section></div>'+
   '<details class="progress-history" '+(s.training?'open':'')+'><summary>这一周的训练记录 <span>'+s.training+' 次</span></summary><div id="progressHistory"></div></details><nav class="progress-links" aria-label="打开回顾的原始记录"><a href="training.html">训练管理</a><a href="meals.html">饮食记录</a><button type="button" data-album-open="true">打开成长相册</button></nav><p id="progressStatus" class="progress-note" role="status">按周一至周日归档，截至 '+week.through+'。未来日期留空；不发额外经验。</p>';
  lift();history();
 }
 function refresh(force=false){
  try{
   const raw=[localStorage.getItem('fitfuel_history'),localStorage.getItem('fitfuel_meals')],today=FitStore.today(),next=JSON.stringify([raw,today,offset]);if(!force&&next===stamp)return;
   const value=model.project({training:raw[0]===null?[]:JSON.parse(raw[0]),meals:raw[1]===null?[]:JSON.parse(raw[1]),exercises:FitData.EXERCISES},today,offset);
   view=value;stamp=next;page=1;if(!view.lifts.some(x=>x.exId===selected))selected=view.lifts[0]?.exId||'';render();
  }catch(error){stamp='';view=null;root.innerHTML='<h2>训练回顾暂时无法显示</h2><p>'+esc(error instanceof SyntaxError?'原记录无法解析，数据已保留。请到原页面核对后重试。':error.message)+'</p><button type="button" data-progress-retry>重新读取训练回顾</button>'}
 }
 root.addEventListener('click',event=>{
  const b=event.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-progress-retry')){refresh(true);return}
  if(b.dataset.progressWeek){offset=Math.max(-5200,Math.min(0,offset+Number(b.dataset.progressWeek)));refresh();const target=root.querySelector('[data-progress-week="'+b.dataset.progressWeek+'"]:not([disabled])')||root.querySelector('#progressWeekLabel');if(target){if(target.tagName!=='BUTTON')target.tabIndex=-1;target.focus({preventScroll:true})}return}
  if(b.dataset.progressPage){page+=Number(b.dataset.progressPage);history();const target=root.querySelector('.progress-pages [data-progress-page="'+b.dataset.progressPage+'"]:not([disabled])')||root.querySelector('.progress-pages button:not([disabled])');target?.focus({preventScroll:true});root.querySelector('.progress-session-list h4')?.scrollIntoView({block:'nearest'})}
 });
 root.addEventListener('change',event=>{if(event.target.id==='progressExercise'){selected=event.target.value;lift()}});
 document.addEventListener('fitfuel:life-view',()=>refresh());window.addEventListener('pageshow',()=>refresh());
 window.addEventListener('storage',event=>{if(event.key===null||['fitfuel_history','fitfuel_meals'].includes(event.key))refresh()});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
 window.fitfuelProgressUI={refresh,get view(){return view}};refresh();
})();
