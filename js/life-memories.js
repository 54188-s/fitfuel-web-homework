/* A read-only view of existing fitness facts. It owns no health or reward storage. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.FitLifeMemories=factory()})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 const label=x=>x.slice(5).replace('-',' / ');
 function project(source,today){
  if(!day(today))throw Error('当前日期无法核对，请检查设备日期后重试。');
  const facts=[];
  for(const [kind,rows] of [['training',source.training],['meal',source.meals]]){
   if(!Array.isArray(rows))throw Error('原记录无法读取，请先在训练或饮食页面核对。');
   const ids=new Set();
   for(const row of rows){
    if(!row||typeof row.id!=='string'||!row.id||!day(row.date)||ids.has(row.id))throw Error('原记录的编号或日期无法核对，成长回忆已暂停显示。');
    ids.add(row.id);
    if(row.date<=today)facts.push({id:row.id,kind,date:row.date,name:String(row.name|| (kind==='training'?'训练记录':'饮食记录')).slice(0,100),imported:row.origin==='native-import'});
   }
  }
  facts.sort((a,b)=>a.date.localeCompare(b.date)||a.kind.localeCompare(b.kind)||a.id.localeCompare(b.id));
  const end=Date.parse(today+'T00:00:00Z');
  const days=Array.from({length:7},(_,i)=>{
   const date=new Date(end-(6-i)*86400000).toISOString().slice(0,10),rows=facts.filter(r=>r.date===date);
   return {date,label:label(date),today:date===today,training:rows.filter(r=>r.kind==='training').length,meals:rows.filter(r=>r.kind==='meal').length,records:rows};
  });
  const milestones=['training','meal'].map(kind=>{const row=facts.find(r=>r.kind===kind);return row?{...row,title:kind==='training'?'第一次留下训练记录':'第一次记下这一餐'}:null}).filter(Boolean);
  return {today,days,milestones,recordedDays:days.filter(d=>d.records.length).length,totalDays:new Set(facts.map(r=>r.date)).size};
 }
 return {project};
});

if(typeof document!=='undefined') (function(){
 'use strict';
 const root=document.getElementById('lifeMemories');if(!root)return;
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let view=null,selected='',signature='';
 function rows(key){try{const raw=localStorage.getItem(key);return raw===null?[]:JSON.parse(raw)}catch{throw Error('原记录无法读取，请在原记录页面核对后重试。')}}
 function detail(){
  const current=view.days.find(d=>d.date===selected)||view.days.at(-1);selected=current.date;
  root.querySelectorAll('[data-memory-day]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.memoryDay===selected)));
  const panel=root.querySelector('#memoryDayDetail');
  panel.innerHTML='<h3>'+esc(current.date)+' 的记录</h3>'+(current.records.length?
   '<ul>'+current.records.slice(0,6).map(r=>'<li><span class="memory-kind">'+(r.kind==='training'?'训练':'饮食')+'</span><span>'+esc(r.name)+'</span></li>').join('')+'</ul>'+(current.records.length>6?'<p>这天共 '+current.records.length+' 条，可到原记录页面查看全部内容。</p>':''):
   '<p>这一天没有保存记录。没记下来不代表没有好好生活，休息也不扣进度。</p>');
 }
 function render(){
  root.innerHTML='<div class="memory-heading"><h2>一起走过的日子</h2><span>近七天 · '+view.recordedDays+' 天有记录</span></div><p class="memory-intro">从训练和一餐一饭里，留下一点自己的生活。</p><div class="memory-week" role="group" aria-label="选择近七天的记录日期">'+
   view.days.map(d=>'<button type="button" data-memory-day="'+d.date+'" aria-pressed="false" aria-label="'+d.date+'，'+d.training+'条训练，'+d.meals+'条饮食"><span>'+ (d.today?'今天':d.label)+'</span><span class="memory-marks"><i class="'+(d.training?'has-training':'')+'">练</i><i class="'+(d.meals?'has-meal':'')+'">餐</i></span></button>').join('')+
   '</div><div id="memoryDayDetail" class="memory-day-detail" aria-live="polite" aria-atomic="true"></div><div class="memory-firsts"><h3>最初的记忆</h3>'+(view.milestones.length?
    '<ol>'+view.milestones.map(m=>'<li><time datetime="'+m.date+'">'+esc(m.date)+'</time><div><strong>'+esc(m.title)+'</strong><p>'+esc(m.name)+(m.imported?' · 来自导入档案':'')+'</p><button type="button" data-album-record-id="'+esc(m.id)+'" data-album-record-kind="'+m.kind+'" data-album-record-title="'+esc(m.title)+'">为这次留念</button></div></li>').join('')+'</ol>':
    '<p>保存第一条训练或饮食记录后，这里会出现你的第一段回忆。</p>')+'</div><nav class="memory-links" aria-label="查看回忆的原始记录"><a href="training.html">查看训练记录</a><a href="meals.html">查看饮食记录</a></nav><p class="memory-note">根据现存记录生成；更正或删除会同步更新。只展示截至今天的数据；相册仅在你主动保存时留影，不发放奖励。</p>';
  detail();
 }
 function refresh(){
  try{
   const next=FitLifeMemories.project({training:rows('fitfuel_history'),meals:rows('fitfuel_meals')},FitStore.today()),key=JSON.stringify(next);
   view=next;if(key!==signature){signature=key;render()}
  }catch(error){
   signature='';view=null;root.replaceChildren();
   const h=document.createElement('h2'),p=document.createElement('p'),b=document.createElement('button');
   h.textContent='成长回忆暂时无法显示';p.textContent=error.message||'原记录已保留，请重试。';b.textContent='重新读取回忆';b.type='button';b.onclick=refresh;root.append(h,p,b);
  }
 }
 root.addEventListener('click',event=>{const b=event.target.closest('[data-memory-day]');if(b){selected=b.dataset.memoryDay;detail()}});
 root.addEventListener('keydown',event=>{const b=event.target.closest('[data-memory-day]');if(!b||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();const all=[...root.querySelectorAll('[data-memory-day]')],i=all.indexOf(b),n=event.key==='Home'?0:event.key==='End'?6:(i+(event.key==='ArrowRight'?1:6))%7;all[n].focus();all[n].click();
 });
 document.addEventListener('fitfuel:life-view',refresh);
 window.addEventListener('pageshow',refresh);
 refresh();
})();
