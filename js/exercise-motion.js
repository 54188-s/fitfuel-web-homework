"use strict";
window.FitMotion=(()=>{
 const states=new Map(),byId=new Map(FitData.EXERCISES.map(ex=>[ex.id,ex]));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),interval=3000;
 let timer=null;
 const icon=name=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{prev:'<path d="m14 6-6 6 6 6"/>',next:'<path d="m10 6 6 6-6 6"/>',pause:'<path d="M9 6v12M15 6v12"/>',play:'<path d="m9 5 10 7-10 7Z"/>'}[name]}</svg>`;
 function markup(ex,{detail=false,zoom=false,index=0}={}){
  const {esc}=FitUI,images=ex.art.images,n=images.length,tone=ex.art.tone==='invert'?' diagram-invert':'';
  index=Math.max(0,Math.min(n-1,index));
  const image=`<img src="${esc('../'+images[index])}" alt="${esc(ex.name)}${n>1?`，第 ${index+1} 张图示，共 ${n} 张`:'姿势示意'}" width="720" height="540" ${detail||zoom?'':'loading="lazy"'} decoding="async">`;
  const controls=n>1?`<div class="motion-controls"><button type="button" data-motion-toggle aria-label="${reduced.matches?'开始':'暂停'}${esc(ex.name)}图示轮播">${icon(reduced.matches?'play':'pause')}</button><span class="motion-count" aria-live="${reduced.matches?'polite':'off'}"><b>${index+1}</b><span> / ${n}</span></span><div class="motion-arrows"><button type="button" data-motion-prev aria-label="${esc(ex.name)}上一张图示">${icon('prev')}</button><button type="button" data-motion-next aria-label="${esc(ex.name)}下一张图示">${icon('next')}</button></div></div>`:'<p class="motion-single">单图示意</p>';
  const visual=zoom?`<div class="motion-enlarged${tone}">${image}</div>`:detail?`<button type="button" class="exercise-zoom${tone}" id="exerciseZoom" aria-label="放大${esc(ex.name)}当前图示">${image}<span>放大图示 ↗</span></button>`:`<a class="exercise-preview${tone}" href="exercise.html?id=${encodeURIComponent(ex.id)}" aria-label="查看${esc(ex.name)}图解">${image}</a>`;
  return `<div class="exercise-visual${detail?' motion-detail':''}${zoom?' motion-lightbox':''}" data-motion-id="${esc(ex.id)}" data-motion-index="${index}" role="group" ${n>1?'aria-roledescription="轮播"':''} aria-label="${esc(ex.name)}姿势图示">${controls}${visual}<p class="motion-error" role="status" hidden>这张图暂未加载，可切换下一张或重新打开本页。</p></div>`;
 }
 function runnable(s){
  const dialog=document.querySelector('dialog[open]'),own=s.root.closest('dialog');
  return s.playing&&s.visible&&!s.hover&&!document.hidden&&s.root.isConnected&&(!own||own.open)&&(!dialog||dialog.contains(s.root));
 }
 function sync(){
  for(const [root,s] of states)if(!root.isConnected){observer?.unobserve(root);s.version++;states.delete(root)}
  const needed=[...states.values()].some(runnable);
  if(!needed&&timer!==null){clearInterval(timer);timer=null}
  if(needed&&timer===null)timer=setInterval(()=>{
   const now=performance.now();
   for(const s of states.values())if(runnable(s)&&!s.pending&&now-s.last>=interval)show(s,s.current+1);
   sync();
  },250);
 }
 function label(s){
  const button=s.root.querySelector('[data-motion-toggle]');
  button.setAttribute('aria-label',`${s.playing?'暂停':'开始'}${s.ex.name}图示轮播`);button.innerHTML=icon(s.playing?'pause':'play');
  s.root.querySelector('.motion-count').setAttribute('aria-live',s.playing?'off':'polite');
 }
 function playing(s,value){s.playing=value;s.last=performance.now();label(s);sync()}
 async function show(s,target){
  target=(target+s.ex.art.images.length)%s.ex.art.images.length;
  const token=++s.version;s.pending=true;s.last=performance.now();
  try{
   const probe=new Image();probe.src='../'+s.ex.art.images[target];await probe.decode();
   if(token!==s.version||!s.root.isConnected)return;
   const img=s.root.querySelector('img');img.src=probe.src;img.alt=`${s.ex.name}，第 ${target+1} 张图示，共 ${s.ex.art.images.length} 张`;
   s.current=target;s.root.dataset.motionIndex=String(target);s.root.querySelector('.motion-count b').textContent=String(target+1);s.root.querySelector('.motion-error').hidden=true;
  }catch{if(token===s.version&&s.root.isConnected){s.root.querySelector('.motion-error').hidden=false;playing(s,false)}}
  finally{if(token===s.version){s.pending=false;s.last=performance.now()}}
 }
 const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{
  for(const entry of entries){const s=states.get(entry.target);if(s){s.visible=entry.isIntersecting;s.last=performance.now()}}sync();
 },{threshold:.15}):null;
 function mount(container){
  sync();container.querySelectorAll('[data-motion-id]').forEach(root=>{
   if(states.has(root))return;const ex=byId.get(root.dataset.motionId);if(!ex||ex.art.images.length<2)return;
   const s={root,ex,current:Number(root.dataset.motionIndex)||0,playing:!reduced.matches,visible:!observer,hover:false,last:performance.now(),version:0,pending:false};
   states.set(root,s);label(s);observer?.observe(root);
   const toggle=root.querySelector('[data-motion-toggle]');let pointerAction;
   toggle.addEventListener('pointerdown',()=>{pointerAction=!s.playing});toggle.addEventListener('pointercancel',()=>{pointerAction=undefined});
   toggle.addEventListener('click',()=>{playing(s,pointerAction??!s.playing);pointerAction=undefined});
   root.querySelector('[data-motion-prev]').addEventListener('click',()=>{playing(s,false);show(s,s.current-1)});
   root.querySelector('[data-motion-next]').addEventListener('click',()=>{playing(s,false);show(s,s.current+1)});
   root.addEventListener('mouseenter',()=>{s.hover=true;sync()});root.addEventListener('mouseleave',()=>{s.hover=false;s.last=performance.now();sync()});
   root.addEventListener('focusin',()=>playing(s,false));
   root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();playing(s,false);show(s,s.current+(e.key==='ArrowLeft'?-1:1))}});
  });sync();
 }
 document.addEventListener('visibilitychange',()=>{for(const s of states.values())s.last=performance.now();sync()});
 document.addEventListener('close',sync,true);
 window.addEventListener('pagehide',()=>{if(timer!==null)clearInterval(timer);timer=null});window.addEventListener('pageshow',()=>{for(const s of states.values())s.last=performance.now();sync()});
 reduced.addEventListener('change',()=>{if(reduced.matches)for(const s of states.values())playing(s,false)});
 return{markup,mount,index:root=>Number(root?.dataset.motionIndex)||0};
})();
