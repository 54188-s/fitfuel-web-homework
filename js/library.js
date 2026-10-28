"use strict";
(() => {
 const {$,esc}=FitUI;
 const difficulty={beginner:'入门',intermediate:'进阶',advanced:'高阶'};
 const external=url=>url.startsWith('https://')?' target="_blank" rel="noopener noreferrer"':'';
 function illustration(ex,detail=false){
  if(!detail)return FitMotion.markup(ex);
  const art=ex.art;
  return `<figure class="exercise-figure">${FitMotion.markup(ex,{detail:true})}<figcaption><strong>${esc(ex.name)} · 姿势参考</strong><span>${esc(art.note)}</span><a href="${esc(art.sourceUrl)}"${external(art.sourceUrl)}>${esc(art.label)}</a><a href="exercise-sources.html">查看图示来源与说明</a></figcaption></figure>`;
 }
 FitPages.library=()=>{
  let group=new URLSearchParams(location.search).get('group')||'all',scope='all',visible=24;
  $('libraryCategories').innerHTML=FitData.EXERCISE_FILTERS.map(([k,n])=>`<button data-cat="${k}">${esc(n)}</button>`).join('')+'<button data-scope="favorites">收藏</button><button data-scope="recent">最近使用</button><button data-scope="viewed">最近查看</button><button data-scope="added">最近添加</button>';
  function render(){
   const o={...FitPickers.options('exercises'),group,scope};
   if(['viewed','added'].includes(scope)){o.scope='recent';o.recent=FitStore.recent('exercises').filter(x=>x[scope==='viewed'?'viewedAt':'addedAt']).map(x=>x.id)}
   const list=FitSearch.exercises(FitData.EXERCISES,$('librarySearch').value,o);
   $('libraryCount').textContent=`找到 ${list.length} / ${FitData.EXERCISES.length} 个动作 · 已显示 ${Math.min(visible,list.length)} 个`;
   $('libraryGrid').innerHTML=list.slice(0,visible).map(x=>{
    const favorite=o.favorites.includes(x.id);
    return `<article class="exercise-card illustrated-card">${illustration(x)}<div class="exercise-card-copy"><span class="tag">${esc(FitData.CATEGORY_NAMES[x.category])}</span><h3><a href="exercise.html?id=${encodeURIComponent(x.id)}">${esc(x.name)}</a></h3><p class="exercise-muscles">${esc(x.muscles.join(' · '))}</p><p class="exercise-card-desc">${esc(x.desc)}</p><small>${esc(x.equipment.join(' · '))} · ${esc(difficulty[x.difficulty]||x.difficulty)}</small><div class="actions"><a class="secondary" href="exercise.html?id=${encodeURIComponent(x.id)}">查看图解 ↗</a><button class="secondary" data-fav="${esc(x.id)}" aria-label="收藏${esc(x.name)}" aria-pressed="${favorite}">${favorite?'★ 已收藏':'☆ 收藏'}</button></div></div></article>`;
   }).join('')||FitUI.empty('没有匹配的动作，请调整筛选。');
   if(visible<list.length)$('libraryGrid').insertAdjacentHTML('beforeend',`<div class="library-more"><button class="secondary" data-more>继续显示 ${Math.min(24,list.length-visible)} 个动作</button><p>搜索和分类会检索全部 ${FitData.EXERCISES.length} 个动作</p></div>`);
   FitMotion.mount($('libraryGrid'));
   $('libraryCategories').querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.cat===group&&scope==='all'||b.dataset.scope===scope));
  }
  $('librarySearch').oninput=()=>{visible=24;render()};
  $('libraryCategories').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.cat){group=b.dataset.cat;scope='all'}else{scope=b.dataset.scope;group='all'}visible=24;render()};
  $('libraryGrid').onclick=e=>{
   const more=e.target.closest('[data-more]');if(more){const index=visible;visible+=24;render();$('libraryGrid').querySelectorAll('.exercise-card')[index]?.querySelector('h3 a')?.focus();return}
   const b=e.target.closest('[data-fav]');if(!b)return;
   try{const id=b.dataset.fav;FitStore.toggleFavorite('exercises',id);render();$('libraryGrid').querySelector(`[data-fav="${CSS.escape(id)}"]`)?.focus()}catch(err){FitUI.toast(err.message,'error')}
  };
  render();
 };
 FitPages.exercise=()=>{
  const id=new URLSearchParams(location.search).get('id')||'bench_press',ex=FitData.EXERCISES.find(e=>e.id===id);
  if(!ex){$('exerciseDetail').innerHTML=FitUI.empty('未找到该动作。','library.html','返回动作库');return}
  FitStore.recordExercise(id,'viewed');document.title=ex.name+' · FitFuel Pro';
  const reference=ex.recordingMode==='reference',favorite=FitStore.favorites('exercises').includes(id);
  const estimate=reference?'按时间练习 · 教学参考':`热量估算参考 · MET ${ex.met}${ex.metSource?'（类别值）':''}`;
  const route=ex.category==='cardio'?'cardio.html':'library.html?group=mobility';
  $('exerciseDetail').innerHTML=`<section class="panel exercise-summary"><a class="exercise-back" href="library.html">← 返回动作库</a><p class="exercise-category">${esc(FitData.CATEGORY_NAMES[ex.category])}</p><h2>${esc(ex.name)}</h2><p>${esc(ex.desc)}</p><div class="exercise-meta"><span>${esc(ex.equipment.join(' · '))}</span><span>${esc(difficulty[ex.difficulty]||ex.difficulty)}</span><span>${esc(estimate)}</span></div><p class="muted">目标肌群：${ex.muscles.map(esc).join(' · ')}</p><div class="actions"><button id="detailFavorite" class="secondary" aria-pressed="${favorite}">${favorite?'★ 已收藏':'☆ 收藏'}</button>${reference?`<a class="primary" href="${route}">${ex.category==='cardio'?'前往有氧记录':'查看拉伸与活动度'}</a>`:'<button id="addToTraining" class="primary">＋ 加入训练计划</button><a href="training.html" class="secondary">前往训练管理</a>'}</div>${reference?'<p class="exercise-recording-note">此条目按时间或距离练习，不套用力量训练的组数、次数与负重热量估算。</p>':ex.metSource?'<p class="exercise-recording-note">热量使用训练类别估算值，供记录参考，不是这个动作的实测消耗。</p>':''}</section><div class="exercise-teaching">${illustration(ex,true)}<section class="panel exercise-instructions"><h2>动作讲解</h2><h3>动作步骤</h3><ol class="exercise-steps">${ex.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><details open><summary>常见错误</summary><p>${ex.mistakes.map(esc).join('；')}</p></details><details><summary>训练技巧</summary><p>${esc(ex.tips)}</p></details></section></div>`;
  $('detailFavorite').onclick=()=>{try{const on=FitStore.toggleFavorite('exercises',id);$('detailFavorite').textContent=on?'★ 已收藏':'☆ 收藏';$('detailFavorite').setAttribute('aria-pressed',String(on))}catch(err){FitUI.toast(err.message,'error')}};
  if(!reference)$('addToTraining').onclick=()=>{try{FitStore.addExercise(id);FitUI.toast('动作已加入训练草稿')}catch(err){FitUI.toast(err.message,'error')}};
  FitMotion.mount($('exerciseDetail'));
  $('exerciseZoom').onclick=()=>{
   const index=FitMotion.index($('exerciseZoom').closest('[data-motion-id]'));
   FitUI.modal(`<div class="diagram-lightbox"><div class="diagram-lightbox-heading"><h2>${esc(ex.name)}</h2><button id="closeDiagram" class="secondary">关闭</button></div>${FitMotion.markup(ex,{zoom:true,index})}<p>${esc(ex.art.label)} · ${esc(ex.art.note)}</p></div>`);
   FitMotion.mount($('modalContent'));
   $('closeDiagram').onclick=FitUI.close;
  };
 };
})();
