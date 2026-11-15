'use strict';
(()=>{
 const Album=window.FitLifeAlbum;if(!Album)return;
 const store=Album.create(),esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const modal=document.createElement('dialog');modal.id='lifeAlbumDialog';modal.setAttribute('aria-labelledby','albumTitle');
 modal.innerHTML='<div class="album-shell"><header class="album-heading"><div><h2 id="albumTitle">成长相册</h2><p>给一起走过的日子，留一个位置。</p></div><button type="button" id="albumClose" aria-label="关闭成长相册">关闭</button></header><div id="albumBody"></div><div id="albumStatus" role="status" aria-live="polite"></div></div>';
 document.body.append(modal);
 const q=s=>modal.querySelector(s),body=q('#albumBody'),status=q('#albumStatus'),urls=new Set(),disabled=new WeakMap();
 const s={screen:'gallery',rows:[],filter:'all',page:1,busy:false,id:null,revision:0,reference:null,picture:undefined,initial:'',generation:0};
 let previousFocus=null,sceneSuspended=false,exiting=false,previewURL='';
 function url(blob){const value=URL.createObjectURL(blob);urls.add(value);return value}
 function clean(){for(const u of urls)URL.revokeObjectURL(u);urls.clear();previewURL='';s.generation++}
 function message(value,error=false){status.replaceChildren();status.className=error?'is-error':'';status.textContent=value}
 function busy(value){s.busy=value;modal.setAttribute('aria-busy',String(value));modal.querySelectorAll('button,input,textarea,select').forEach(x=>{if(value){disabled.set(x,x.disabled);x.disabled=true}else if(disabled.has(x)){x.disabled=disabled.get(x);disabled.delete(x)}})}
 async function work(fn){if(s.busy)return;busy(true);message('');try{await fn()}catch(error){message(error.message||'操作未完成，请重试',true)}finally{busy(false)}}
 function pauseScene(){const c=window.fitfuelApp?.companion?.();if(c?._visible){c.spec.pageLifetimes.hide.call(c);sceneSuspended=true}}
 function resumeScene(){const c=window.fitfuelApp?.companion?.();if(sceneSuspended&&!exiting&&!document.hidden&&c?._ready)c.spec.pageLifetimes.show.call(c);sceneSuspended=false}
 function fields(){return {kind:q('#albumKind').value,title:q('#albumName').value,date:q('#albumDate').value,note:q('#albumNote').value,reference:s.reference}}
 function dirty(){return s.screen==='editor'&&(JSON.stringify(fields())!==s.initial||s.picture!==undefined)}
 function leave(action){
  if(s.busy){message('正在处理，请稍候。');return}
  if(!dirty()){action();return}
  message('这段纪念尚未保存。');
  const discard=document.createElement('button'),stay=document.createElement('button');discard.type=stay.type='button';discard.textContent='放弃未保存内容';stay.textContent='继续编辑';discard.onclick=action;stay.onclick=()=>{message('');q('#albumName')?.focus()};status.append(discard,stay);stay.focus();
 }
 function health(ref){
  if(!ref)return null;
  try{const rows=FitStore.get(ref.kind==='training'?'history':'meals',[]);return Array.isArray(rows)?rows.find(x=>String(x.id)===ref.id)||null:null}catch{return null}
 }
 function refMarkup(ref){if(!ref)return '';const row=health(ref);return '<div class="album-reference">'+(row?'关联'+(ref.kind==='training'?'训练':'饮食')+'记录 · '+esc(row.name||row.date):'原记录已删除或暂时无法读取，个人纪念仍保留')+'</div>'}
 async function gallery(focusId){
  clean();s.screen='gallery';s.picture=undefined;s.reference=null;s.pending=null;body.innerHTML='<p class="album-loading">正在打开本机相册…</p><button type="button" data-act="reload">重新打开相册</button>';
  s.rows=await store.list();if(exiting)return;
  const rows=s.rows.filter(x=>s.filter==='all'||x.kind===s.filter),pages=Math.max(1,Math.ceil(rows.length/12));s.page=Math.min(pages,Math.max(1,s.page));
  if(focusId){const index=rows.findIndex(x=>x.id===focusId);if(index>=0)s.page=Math.floor(index/12)+1}
  const visible=rows.slice((s.page-1)*12,s.page*12);
  body.innerHTML='<div class="album-toolbar"><button type="button" class="album-primary" data-act="new">新增纪念</button><div><button type="button" data-act="export" '+(!s.rows.length?'disabled':'')+'>导出相册</button><button type="button" data-act="import">恢复备份</button></div></div><p class="album-local">只保存在本机，不上传。与健康记录分开备份；换设备前可在这里导出。</p><div class="album-filters" role="group" aria-label="筛选个人纪念">'+[['all','全部'],['milestone','阶段纪念'],['daily','日常']].map(([id,label])=>'<button type="button" data-filter="'+id+'" aria-pressed="'+(s.filter===id)+'">'+label+'</button>').join('')+'<span>'+rows.length+' 段纪念</span></div>'+
   (visible.length?'<div class="album-grid">'+visible.map(e=>'<button type="button" class="album-card '+(e.image?'has-image':'text-only')+'" data-entry="'+esc(e.id)+'" aria-label="打开'+esc(e.title)+'">'+(e.image?'<div class="album-thumb"><img data-photo="'+esc(e.id)+'" alt="'+esc(e.title)+'" loading="lazy"><span class="album-photo-state">正在取出照片…</span></div>':'<div class="album-paper"><span>'+(e.kind==='milestone'?'这一阶段':'生活的一页')+'</span><p>'+esc(e.note||e.title)+'</p></div>')+'<div class="album-card-copy"><time datetime="'+e.date+'">'+e.date.replaceAll('-',' / ')+'</time><strong>'+esc(e.title)+'</strong><span>'+(e.reference?'关联原记录':e.kind==='milestone'?'自己写下的阶段纪念':'日常纪念')+'</span></div></button>').join('')+'</div>':
   '<div class="album-empty"><img src="../images/life/room.png" alt="可以留影的生活间" width="768" height="512"><div><h3>把今天留在这里</h3><p>给分身和房间留张影，或选一张自己的照片。也可以只写几句话，点保存才会加入相册。</p><button type="button" class="album-primary" data-act="scene">给房间留影</button><button type="button" data-act="new">写一段纪念</button></div></div>')+
   (pages>1?'<nav class="album-pagination" aria-label="相册分页"><button type="button" data-act="previous" '+(s.page===1?'disabled':'')+'>上一页</button><span>'+s.page+' / '+pages+'</span><button type="button" data-act="next" '+(s.page===pages?'disabled':'')+'>下一页</button></nav>':'')+
   '<input type="file" id="albumImportFile" accept=".json,application/json" hidden>';
  const generation=s.generation;
  for(const img of body.querySelectorAll('[data-photo]'))store.photo(img.dataset.photo).then(blob=>{if(generation!==s.generation||!img.isConnected)return;img.src=url(blob);img.onload=()=>{img.nextElementSibling.hidden=true};img.onerror=()=>{img.hidden=true;img.nextElementSibling.textContent='照片暂时无法显示，文字仍可打开'}}).catch(()=>{if(img.isConnected){img.hidden=true;img.nextElementSibling.textContent='照片暂时无法读取，文字仍可打开'}});
  q('#albumImportFile').onchange=event=>{const file=event.target.files[0];event.target.value='';if(file)work(()=>importFile(file))};
  (focusId?q('[data-entry="'+CSS.escape(focusId)+'"]'):null)?.focus();if(!focusId)q('[data-act="new"]')?.focus();
 }
 async function showPhoto(blob){
  if(previewURL){URL.revokeObjectURL(previewURL);urls.delete(previewURL)}
  previewURL=blob?url(blob):'';const img=q('#albumPreview');if(!img)return;img.hidden=!blob;img.src=previewURL;q('.album-photo-empty').hidden=!!blob;
  const remove=q('[data-act="remove-photo"]');if(remove)remove.hidden=!blob;
 }
 async function normalize(blob){
  if(!(blob instanceof Blob)||!['image/jpeg','image/png','image/webp'].includes(blob.type)||blob.size>8*1024*1024)throw Error('请选择8MB以内的JPEG、PNG或WebP照片');
  const source=url(blob),img=new Image();img.src=source;
  try{await img.decode();const scale=Math.min(1,1280/Math.max(img.naturalWidth,img.naturalHeight)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));const ctx=canvas.getContext('2d');ctx.fillStyle='#f4eedf';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
   let result;for(const quality of [.85,.72,.6]){result=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('照片未能处理，请重试')),'image/jpeg',quality));if(result.size<=Album.MAX_IMAGE_BYTES)break}
   if(result.size>Album.MAX_IMAGE_BYTES)throw Error('这张照片缩小后仍过大，请换一张尺寸较小的照片');return {blob:result,width:canvas.width,height:canvas.height};
  }catch(error){throw Error(error.message?.includes('过大')?error.message:'照片无法读取，请换一张JPEG或PNG图片')}
  finally{URL.revokeObjectURL(source);urls.delete(source)}
 }
 async function capture(){
  const c=window.fitfuelApp?.companion?.();if(!c||c.properties.projection?.displayMode==='hidden')throw Error('先显示生活间并等画面载入，再给房间留影');
  if(!c._assets?.room){
   // Resizing may rebuild the canvas while its animation is suspended by the album.
   c.spec.pageLifetimes.show.call(c);
   try{await new Promise((resolve,reject)=>{let tries=0;const check=()=>{if(c._assets?.room){resolve();return}if(exiting||++tries>80){reject(Error('房间画面暂未载入，可以重新打开相册后留影'));return}setTimeout(check,40)};check()})}
   finally{c.spec.pageLifetimes.hide.call(c)}
  }
  const canvas=document.getElementById('buddy');if(!canvas)throw Error('房间画面暂未载入，请重试');
  const blob=await new Promise((resolve,reject)=>{try{canvas.toBlob(b=>b?resolve(b):reject(Error('留影未完成，请重试')),'image/png')}catch{reject(Error('留影暂时不可用，你也可以选择自己的照片'))}});
  s.picture=await normalize(blob);await showPhoto(s.picture.blob);message('留影已放入草稿，点保存后才会加入相册。');
 }
 async function editor(entry=null,scene=false,preset=null){
  clean();s.screen='editor';s.id=entry?.id||crypto.randomUUID();s.revision=entry?.revision||0;s.reference=entry?.reference||preset?.reference||null;s.newReference=!entry&&!!s.reference;s.picture=undefined;
  const value=entry||{kind:preset?'milestone':'daily',title:preset?.title||'',date:preset?.date||FitStore.today(),note:''};
  body.innerHTML='<button type="button" data-act="back" class="album-back">返回相册</button><form id="albumEditor"><div class="album-editor-layout"><div class="album-editor-photo"><img id="albumPreview" alt="待保存的纪念照片" hidden><div class="album-photo-empty"><p>照片是可选的。</p><p>可以留影，也可以只写文字。</p></div><div class="album-photo-actions"><button type="button" data-act="capture">给房间留影</button><button type="button" data-act="choose-photo">选择照片</button><button type="button" data-act="remove-photo" hidden>移除照片</button></div><input type="file" id="albumPhotoFile" accept="image/jpeg,image/png,image/webp" hidden><p class="album-help">照片会缩小到最长1280像素保存。原文件不会改动。</p></div><div class="album-editor-fields"><label for="albumName">给这段日子起个名字</label><input id="albumName" maxlength="40" required value="'+esc(value.title)+'" placeholder="例如：开始认真记录的这一周"><div class="album-form-row"><div><label for="albumDate">纪念日期</label><input id="albumDate" type="date" required max="'+FitStore.today()+'" value="'+value.date+'"></div><div><label for="albumKind">放在哪一页</label><select id="albumKind"><option value="daily">日常纪念</option><option value="milestone">阶段纪念</option></select></div></div><label for="albumNote">想留下的话 <span>可不填</span></label><textarea id="albumNote" rows="5" maxlength="500" placeholder="今天发生了什么，或者想对以后的自己说什么。">'+esc(value.note)+'</textarea><p class="album-help">阶段纪念由你填写，不据此判断体形变化，也不发经验。</p><div id="albumReference">'+refMarkup(s.reference)+(s.reference?'<button type="button" data-act="unlink">取消关联，仅保留个人纪念</button>':'')+'</div><button type="submit" class="album-primary">保存这段纪念</button></div></div></form>';
  q('#albumKind').value=value.kind;s.initial=JSON.stringify(fields());
  q('#albumPhotoFile').onchange=event=>{const file=event.target.files[0];event.target.value='';if(file)work(async()=>{const prepared=await normalize(file);s.picture=prepared;await showPhoto(prepared.blob);message('照片在草稿里，点保存后才会加入相册。')})};
  q('#albumEditor').onsubmit=event=>{event.preventDefault();work(async()=>{const value=fields();if(value.date>FitStore.today())throw Error('纪念日期不能晚于今天');if(s.newReference&&s.reference&&!health(s.reference))throw Error('原记录已删除或无法读取，可以取消关联后保留个人纪念');const saved=await store.save(value,{id:s.id,revision:s.revision,image:s.picture});await detail(saved.id);message('这段纪念已保存在本机相册。')})};
  if(entry?.image){try{await showPhoto(await store.photo(entry.id))}catch{message('旧照片暂时无法读取，可以移除它或重新选择，文字仍保留。',true);q('[data-act="remove-photo"]').hidden=false}}
  if(scene)await capture();q('#albumName').focus();
 }
 async function detail(entryId){
  clean();s.screen='detail';s.picture=undefined;s.rows=await store.list();const entry=s.rows.find(x=>x.id===entryId);if(!entry){await gallery();message('这段纪念已在其他页面删除。');return}s.selected=entry;
  body.innerHTML='<button type="button" class="album-back" data-act="back">返回相册</button><article class="album-detail"><div class="album-detail-caption"><span>'+(entry.kind==='milestone'?'阶段纪念':'日常纪念')+'</span><time datetime="'+entry.date+'">'+entry.date.replaceAll('-',' / ')+'</time></div><h3 tabindex="-1" id="albumDetailTitle">'+esc(entry.title)+'</h3>'+(entry.image?'<img id="albumDetailPhoto" alt="'+esc(entry.title)+'">':'')+'<p class="album-note">'+esc(entry.note||'这一页，先把标题留在这里。')+'</p>'+refMarkup(entry.reference)+'<div class="album-detail-actions"><button type="button" data-act="edit">编辑这段纪念</button><button type="button" class="album-danger" data-act="delete">删除这段纪念</button></div></article>';
  if(entry.image){try{q('#albumDetailPhoto').src=url(await store.photo(entry.id))}catch(error){q('#albumDetailPhoto').hidden=true;message(error.message,true)}}q('#albumDetailTitle').focus();
 }
 async function exportAlbum(){
  message('正在整理相册备份，请稍候…');const data=await store.backup();let native=null;try{if(parent.capacitorExports?.Capacitor.isNativePlatform())native=parent.capacitorExports}catch{}
  if(native){try{const file=await native.registerPlugin('Filesystem').writeFile({path:'fitfuel-album/backup.json',data,directory:'CACHE',encoding:'utf8',recursive:true});await native.registerPlugin('Share').share({title:'FitFuel成长相册备份',files:[file.uri],dialogTitle:'保存相册备份'});message('已打开系统保存／分享窗口。备份包含你的照片，请自行保管。')}catch{throw Error('未完成系统保存／分享，相册仍保留。可以重新导出。')}}
  else{const download=URL.createObjectURL(new Blob([data],{type:'application/json'})),a=document.createElement('a');a.href=download;a.download='FitFuel-Album-'+FitStore.today()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(download),15000);message('相册备份已交给浏览器下载。备份包含照片，恢复时请选择这个JSON文件。')}
 }
 async function importFile(file){if(file.size>Album.MAX_BACKUP_BYTES)throw Error('相册备份过大，请选择本应用导出的JSON文件');message('正在校验备份中的照片，请稍候…');s.pendingRaw=await file.text();await previewImport()}
 async function previewImport(){
  const plan=await store.previewImport(s.pendingRaw);clean();s.screen='import';s.pending=plan;
  body.innerHTML='<button type="button" class="album-back" data-act="back">返回相册</button><div class="album-import"><h3>先看看将恢复哪些内容</h3><dl><div><dt>新增纪念</dt><dd>'+plan.added+' 段</dd></div><div><dt>其中与本机内容不同</dt><dd>'+plan.conflicts+' 段</dd></div><div><dt>重复内容，直接跳过</dt><dd>'+plan.skipped+' 段</dd></div></dl><p>内容不同的同名编号会作为独立纪念保留，不覆盖你在本机的更改。只恢复相册，不改训练、饮食或游戏奖励。</p><button type="button" class="album-primary" data-act="restore" '+(!plan.added?'disabled':'')+'>确认恢复相册</button><button type="button" data-act="repreview">重新预览</button></div>';message(plan.added?'确认后才会写入本机相册。':'这些内容已在相册中，无需重复导入。');
 }
 async function open(preset=null){
  if(modal.open)return;previousFocus=document.activeElement;exiting=false;pauseScene();modal.showModal();s.page=1;s.filter='all';
  await work(()=>preset?editor(null,false,preset):gallery());
 }
 modal.addEventListener('click',event=>{
  const target=event.target.closest('button');if(!target||s.busy)return;
  if(target.dataset.entry){work(()=>detail(target.dataset.entry));return}
  if(target.dataset.filter){s.filter=target.dataset.filter;s.page=1;work(()=>gallery());return}
  const action=target.dataset.act;
  if(action==='choose-photo'){q('#albumPhotoFile').click();return}
  if(action==='import'){q('#albumImportFile').click();return}
  if(action==='back'){leave(()=>work(()=>gallery()));return}
  if(action==='delete'){
   message('确定删除这段纪念和它的照片？已导出的备份需要你自行整理。');
   const confirm=document.createElement('button'),cancel=document.createElement('button');confirm.type=cancel.type='button';confirm.id='albumConfirmDelete';confirm.textContent='确定删除这段纪念';cancel.textContent='保留纪念';cancel.onclick=()=>message('');confirm.onclick=()=>work(async()=>{await store.remove(s.selected.id,s.selected.revision);await gallery();message('这段纪念和照片已从本机相册删除。')});status.append(confirm,cancel);cancel.focus();return;
  }
  if(action==='remove-photo'){s.picture=null;showPhoto(null);return}
  if(action==='unlink'){s.reference=null;s.newReference=false;q('#albumReference').replaceChildren();return}
  const tasks={new:()=>editor(),scene:()=>editor(null,true),capture,edit:()=>editor(s.selected),reload:()=>gallery(),previous:()=>{s.page--;return gallery()},next:()=>{s.page++;return gallery()},export:exportAlbum,repreview:previewImport,restore:async()=>{const result=await store.restore(s.pending);s.pendingRaw=null;await gallery();message('已恢复 '+result.added+' 段纪念，原有内容已保留。')}};
  if(tasks[action])work(tasks[action]);
 });
 q('#albumClose').onclick=()=>leave(()=>modal.close());
 modal.addEventListener('cancel',event=>{event.preventDefault();leave(()=>modal.close())});
 modal.addEventListener('close',()=>{clean();s.pendingRaw=null;s.pending=null;s.picture=undefined;resumeScene();if(!exiting)(previousFocus?.isConnected?previousFocus:document.querySelector('[data-album-open]'))?.focus()});
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-album-open],[data-album-record-id]');if(!button)return;
  if(button.dataset.albumRecordId){const reference={kind:button.dataset.albumRecordKind,id:button.dataset.albumRecordId},row=health(reference);if(row)open({reference,date:row.date,title:button.dataset.albumRecordTitle||'这一段记录'});return}
  open();
 });
 window.addEventListener('pagehide',()=>{exiting=true;if(modal.open)modal.close();store.close().catch(()=>{})});
 window.fitfuelAlbumUI={store,open,get screen(){return s.screen}};
})();
