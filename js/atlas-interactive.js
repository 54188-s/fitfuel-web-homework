"use strict";
document.addEventListener('DOMContentLoaded',()=>{
 const names={chest:'胸部',back:'背部',shoulders:'肩部',biceps:'手臂',core:'核心',legs:'腿部'};
 document.querySelectorAll('.muscle-atlas').forEach(atlas=>{
  function select(group){
   if(!names[group])group='chest';
   atlas.dataset.selectedMuscle=group;
   atlas.querySelectorAll('[data-muscle]').forEach(zone=>{const active=zone.dataset.muscle===group;zone.classList.toggle('is-selected',active);zone.setAttribute('aria-pressed',String(active))});
   atlas.querySelectorAll('[data-select-muscle]').forEach(link=>{const active=new URL(link.href).searchParams.get('group')===group;link.classList.toggle('is-selected',active);if(active)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')});
   atlas.querySelector('[data-selected-name]').textContent=names[group];
   const count=FitData.EXERCISES.filter(x=>FitSearch.inGroup(x,group)).length;
   atlas.querySelector('[data-selected-detail]').textContent=group==='back'?`背部位于身体背面 · ${count} 个相关动作`:`已点亮目标肌群 · ${count} 个相关动作`;
   const link=atlas.querySelector('[data-selected-link]');link.href='library.html?group='+group;link.textContent='查看'+names[group]+'动作 ↗';
  }
  atlas.addEventListener('click',e=>{const zone=e.target.closest('[data-muscle]');const card=e.target.closest('[data-select-muscle]');if(zone){select(zone.dataset.muscle)}else if(card&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();select(new URL(card.href).searchParams.get('group'))}});
  atlas.addEventListener('keydown',e=>{const zone=e.target.closest('[data-muscle]');if(zone&&['Enter',' '].includes(e.key)){e.preventDefault();select(zone.dataset.muscle)}});
  select(new URLSearchParams(location.search).get('group')||'chest');
 });
});
