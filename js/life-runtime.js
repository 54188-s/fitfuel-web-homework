'use strict';
// Browser adapter for the exact shipped WXML, Page/Component and CommonJS source.
const {files,images}=window.FITFUEL_SOURCE;
const modules={},pages={},instances=new Map();
let route='today',currentPage=null,queued=false,componentDirty=new Set(),afterRender=[];
const copy=v=>v===undefined?undefined:JSON.parse(JSON.stringify(v));
const api=window.fitfuelApp={failNextSave:false,get route(){return route},instances,modules};
const wx={
  getStorageSync:key=>localStorage.getItem(key)||'',
  setStorageSync(key,value){if(api.failNextSave){api.failNextSave=false;throw Error('test write failure')};localStorage.setItem(key,typeof value==='string'?value:JSON.stringify(value))},
  nextTick:fn=>queueMicrotask(fn),getWindowInfo:()=>({pixelRatio:devicePixelRatio||1,windowWidth:innerWidth}),
  switchTab:()=>{location.href='meals.html'},
  showToast:({title})=>document.querySelector('#host-status').textContent=title
};
function resolve(id,from=''){
  if(!id.startsWith('.'))return id.endsWith('.js')?id:id+'.js';
  const parts=from.split('/');parts.pop();for(const part of id.split('/')){if(part==='..')parts.pop();else if(part!=='.')parts.push(part)}
  const path=parts.join('/');return path.endsWith('.js')?path:path+'.js';
}
function requireSource(id,from=''){
  const path=resolve(id,from);if(modules[path])return modules[path].exports;
  if(!(path in files))throw Error('Missing source '+path);
  const module={exports:{}};modules[path]=module;
  new Function('module','exports','require','wx',files[path])(module,module.exports,n=>requireSource(n,path),wx);return module.exports;
}
const core=requireSource('core/index.js');api.core=core;
function expr(code,scope){try{return new Function('s','with(s){return ('+code+')}')(scope)}catch{return ''}}
function value(raw,scope){if(raw===null)return null;const single=raw.match(/^\{\{([^{}]+)\}\}$/);return single?expr(single[1],scope):raw.replace(/\{\{([\s\S]*?)\}\}/g,(_,code)=>String(expr(code,scope)??''))}
const templates={};
function template(path){
  // WXML allows self-closing components/canvases; HTML's parser does not.
  const normalized=files[path].replace(/<([\w-]+)(\s[^<>]*?)?\s*\/>/g,(_,tag,attrs)=>'<'+tag+(attrs||'')+'></'+tag+'>');
  return templates[path]||(templates[path]=new DOMParser().parseFromString(normalized,'text/html').body);
}
function focusState(){
  const el=document.activeElement;if(!el?.closest('#app'))return null;
  let selector=el.id?'#'+CSS.escape(el.id):el.dataset.key?'[data-key="'+CSS.escape(el.dataset.key)+'"]':null;
  if(!selector&&el.dataset.field)selector='button[data-field="'+el.dataset.field+'"][data-value="'+el.dataset.value+'"]';
  if(!selector&&el.dataset.zone)selector='button[data-zone="'+el.dataset.zone+'"]';
  return selector?{element:el,selector,start:el.selectionStart,end:el.selectionEnd}:null;
}
function schedule(inst){if(inst)componentDirty.add(inst);if(queued)return;queued=true;queueMicrotask(()=>{
  queued=false;const focused=focusState();renderPage();for(const i of componentDirty)if(i.route===route)renderComponent(i);componentDirty.clear();
  if(focused&&!focused.element.isConnected){const target=document.querySelector('#app '+focused.selector);if(target){target.focus({preventScroll:true});try{if(focused.start!==null)target.setSelectionRange(focused.start,focused.end)}catch{}}}
  const callbacks=afterRender;afterRender=[];callbacks.forEach(fn=>fn());
  if(currentPage?._meetingFocus){
    const target=currentPage._meetingFocus;currentPage._meetingFocus=null;
    document.querySelector(target==='meeting-title'?'#meeting-title':'[data-key="meeting-reopen"]')?.focus({preventScroll:true});
  }
})}
const kebab=s=>s.replace(/[A-Z]/g,m=>'-'+m.toLowerCase());
function component(tag,node,scope,page){
  const componentName=tag==='fitfuel-companion'?'companion':'game-panel',key=route+':'+tag;
  let inst=instances.get(key),fresh=!inst;
  if(fresh){
    let spec;new Function('Component','require','wx',files['components/'+componentName+'/index.js'])(s=>spec=s,n=>requireSource(n,'components/'+componentName+'/index.js'),wx);
    inst={...spec.methods,spec,route,templatePath:'components/'+componentName+'/index.wxml',properties:{},data:copy(spec.data),canvases:{},el:document.createElement('div'),handlers:{},
      setData(v){Object.assign(this.data,copy(v));schedule(this)},
      triggerEvent(name,detail){const method=this.handlers[name];if(method&&typeof page[method]==='function')page[method]({detail})},
      createSelectorQuery(){const selectors=[];const q={select:s=>{selectors.push(s);return q},fields:()=>q,exec:callback=>queueMicrotask(()=>callback(selectors.map(s=>{const element=this.el.querySelector(s);if(!element)return null;const rect=element.getBoundingClientRect();return {node:element,width:rect.width,height:rect.height}})))};return q}
    };
    inst.el.className=componentName==='companion'?'companion-scope':'game-scope';instances.set(key,inst);
  }
  for(const attr of node.attributes)if(attr.name.startsWith('bind:'))inst.handlers[attr.name.slice(5)]=attr.value;
  for(const [name,def] of Object.entries(inst.spec.properties||{})){
    const raw=node.getAttribute(kebab(name)),next=raw===null?copy(def.value):value(raw,scope),old=inst.properties[name];inst.properties[name]=copy(next);
    if(!fresh&&JSON.stringify(old)!==JSON.stringify(next)&&def.observer)afterRender.push(()=>inst[def.observer]());
  }
  if(fresh){renderComponent(inst);afterRender.push(()=>{inst.spec.lifetimes?.ready?.call(inst);inst.ready=true})}
  else componentDirty.add(inst);
  return inst.el;
}
function children(nodes,scope,owner){
  const fragment=document.createDocumentFragment();let branch=null;
  for(const node of nodes){
    if(node.nodeType===1&&!node.hasAttribute('wx:for')){
      if(node.hasAttribute('wx:if'))branch=!!value(node.getAttribute('wx:if'),scope);
      else if(node.hasAttribute('wx:elif')){const take=branch===false&&!!value(node.getAttribute('wx:elif'),scope);if(branch!==null)branch=branch||take;if(!take)continue}
      else if(node.hasAttribute('wx:else')){const take=branch===false;branch=true;if(!take)continue}
      else branch=null;
    }
    fragment.append(element(node,scope,owner));
  }
  return fragment;
}
function element(node,scope,owner,inLoop=false){
  if(node.nodeType===3)return document.createTextNode(value(node.textContent,scope));
  if(node.nodeType!==1)return document.createDocumentFragment();
  if(node.hasAttribute('wx:for')&&!inLoop){const out=document.createDocumentFragment(),array=value(node.getAttribute('wx:for'),scope)||[];array.forEach((item,index)=>out.append(element(node,{...scope,[node.getAttribute('wx:for-item')||'item']:item,[node.getAttribute('wx:for-index')||'index']:index},owner,true)));return out}
  if(node.hasAttribute('wx:if')&&!value(node.getAttribute('wx:if'),scope))return document.createDocumentFragment();
  const tag=node.tagName.toLowerCase();if(tag==='block')return children(node.childNodes,scope,owner);
  if(tag.startsWith('fitfuel-'))return component(tag,node,scope,owner);
  if(tag==='picker'){
    const select=document.createElement('select'),list=value(node.getAttribute('range'),scope)||[],key=node.getAttribute('range-key');
    list.forEach((x,i)=>select.append(new Option(key?x[key]:x,String(i))));select.value=String(value(node.getAttribute('value'),scope)||0);
    for(const a of node.attributes)if(a.name.startsWith('data-'))select.setAttribute(a.name,String(value(a.value,scope)));
    select.setAttribute('aria-label',node.textContent.trim().replace(/\{\{.*?\}\}/g,'')||'选择');
    const method=node.getAttribute('bindchange');select.onchange=()=>owner[method]?.({detail:{value:select.value},currentTarget:select});return select;
  }
  let out;
  if(tag==='canvas'&&owner.canvases){const id=node.getAttribute('id');out=owner.canvases[id]||(owner.canvases[id]=document.createElement('canvas'));out.createImage=()=>{const image=new Image(),desc=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,'src');Object.defineProperty(image,'src',{set(src){desc.set.call(this,images[src]||src)},get(){return desc.get.call(this)}});return image}}
  else out=document.createElement(({view:'div',text:'span','scroll-view':'div',image:'img'})[tag]||tag);
  for(const a of node.attributes){
    if(a.name.startsWith('wx:'))continue;
    if(a.name==='bindtap'){out.onclick=()=>owner[a.value]?.({currentTarget:out,detail:{}});continue}
    if(a.name==='bindinput'){out.oninput=()=>owner[a.value]?.({currentTarget:out,detail:{value:out.value}});continue}
    const v=value(a.value,scope);if(a.name==='disabled'){out.disabled=!!v;continue}
    if(a.name==='value'){out.value=v??'';continue}
    if(a.name==='type'&&tag==='canvas')continue;
    if(a.name==='src'&&(tag==='image'||tag==='img')){out.setAttribute('src',images[v]||v);continue}
    if(a.name==='style'){out.setAttribute('style',String(v??'').replace(/(-?[\d.]+)rpx/g,(_,n)=>'calc(var(--rpx) * '+n+')'));continue}
    out.setAttribute(a.name,String(v??''));
  }
  if(tag!=='canvas'&&tag!=='input')out.replaceChildren(children(node.childNodes,scope,owner));
  return out;
}
function renderComponent(inst){inst.el.replaceChildren(children(template(inst.templatePath).childNodes,{...inst.properties,...inst.data},inst))}
function renderPage(){
  if(!currentPage)return;const app=document.querySelector('#app');app.className='route-'+route;
  app.replaceChildren(children(template('pages/'+route+'/index.wxml').childNodes,currentPage.data,currentPage));
  syncMotionControls();
}
function switchTo(next){
  if(!['today','record','progress','profile'].includes(next))return;
  currentPage?.onHide?.();for(const inst of instances.values())if(inst.route===route)inst.spec.pageLifetimes?.hide?.call(inst);
  route=next;
  if(!pages[next]){
    let spec;new Function('Page','require','wx',files['pages/'+next+'/index.js'])(s=>spec=s,n=>requireSource(n,'pages/'+next+'/index.js'),wx);
    const page={...spec,data:copy(spec.data||{}),setData(v){Object.assign(this.data,copy(v));schedule()}};pages[next]=page;page.onLoad?.();
  }
  currentPage=pages[next];currentPage.onShow?.();schedule();
  for(const inst of instances.values())if(inst.route===route&&inst.ready)afterRender.push(()=>inst.spec.pageLifetimes?.show?.call(inst));
  for(const button of document.querySelectorAll('[data-route]')){if(button.dataset.route===route)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current')}
}
document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>switchTo(b.dataset.route));
function syncMotionControls(){
  const status=document.getElementById('displayModeStatus');if(!status)return;
  try{
    const p=currentPage?.data.companion||pages.today?.data.companion;
    const mode=p?.displayMode||core.avatar.snapshot().mode;
    for(const key of ['animated','static','hidden'])document.getElementById('mode-'+key)?.setAttribute('aria-pressed',String(key===mode));
    status.textContent=mode==='static'?'静态显示中，点击“开启动画”让分身活动。':mode==='hidden'?'分身已隐藏，可开启动画或选择静态显示。':p?.activity==='paused'?(p.realTraining?'动画已开启；这次训练已暂停，请在训练页恢复。':'动画已开启；陪练已暂停，请点击“恢复陪练”。'):'动画已开启，分身会按当前状态活动。';
  }catch(error){status.textContent=error.message||'显示设置暂时无法读取，请重试。'}
}
api.setMode=mode=>{
  try{core.avatar.setMode(mode);if(route==='today')currentPage.refreshCompanion();else pages.profile?.loadCompanion();syncMotionControls();return true}
  catch(error){const status=document.getElementById('displayModeStatus');if(status)status.textContent=error.message||'显示设置未保存，请重试。';return false}
};
document.querySelector('#mode-animated').onclick=()=>api.setMode('animated');document.querySelector('#mode-static').onclick=()=>api.setMode('static');
api.switchTo=switchTo;api.companion=()=>instances.get('today:fitfuel-companion');api.scene=requireSource('components/companion/scene.js');
api.refresh=()=>{pages.today?.refreshToday?.();pages.today?.refreshCompanion();pages.today?.refreshGame();syncMotionControls()};
window.addEventListener('resize',()=>{const inst=api.companion();if(route==='today'&&inst?.ready){inst.stop();inst._canvas=null;inst._assets=null;inst.changed()}});
document.addEventListener('visibilitychange',()=>{for(const inst of instances.values())if(inst.route===route)(document.hidden?inst.spec.pageLifetimes?.hide:inst.spec.pageLifetimes?.show)?.call(inst)});
switchTo('today');
FitPages.life=()=>api.refresh();
window.addEventListener('pagehide',()=>{currentPage?.onHide?.();for(const i of instances.values())i.spec.lifetimes?.detached?.call(i)});

window.addEventListener('pageshow',()=>api.refresh());
document.addEventListener('visibilitychange',()=>{if(!document.hidden)api.refresh()});
