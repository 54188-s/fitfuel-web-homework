(function(factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.FitLifeAlbum=api})(function(){
 'use strict';
 const DB='fitfuel_album_v1',MAX_ENTRIES=200,MAX_IMAGE_BYTES=600*1024,MAX_BACKUP_BYTES=170*1024*1024;
 const object=x=>x&&typeof x==='object'&&!Array.isArray(x),id=x=>typeof x==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(x);
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 const time=x=>Number.isSafeInteger(x)&&x>=0&&x<=8640000000000000;
 const text=(x,max)=>typeof x==='string'&&Array.from(x).length<=max&&!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(x);
 function reference(value){if(value===null||value===undefined)return null;if(!object(value)||!['training','meal'].includes(value.kind)||typeof value.id!=='string'||!value.id||value.id.length>200||/[\u0000-\u001f]/.test(value.id))throw Error('关联记录无法核对');return {kind:value.kind,id:value.id}}
 function photoInfo(p){
  if(p===null)return null;
  if(!object(p)||!['image/jpeg','image/png'].includes(p.type)||!Number.isInteger(p.width)||!Number.isInteger(p.height)||p.width<1||p.height<1||Math.max(p.width,p.height)>1280||!Number.isInteger(p.bytes)||p.bytes<1||p.bytes>MAX_IMAGE_BYTES||!/^\w{64}$/.test(p.hash)||!/^[0-9a-f]+$/.test(p.hash))throw Error('相册图片信息无法核对，原数据已保留');
  return {type:p.type,width:p.width,height:p.height,bytes:p.bytes,hash:p.hash};
 }
 function validate(entry){
  if(!object(entry)||entry.schema!==1||!id(entry.id)||!Number.isSafeInteger(entry.revision)||entry.revision<1||!['daily','milestone'].includes(entry.kind)||!day(entry.date)||!text(entry.title,40)||!entry.title.trim()||!text(entry.note,500)||!time(entry.createdAt)||!time(entry.updatedAt)||entry.updatedAt<entry.createdAt)throw Error('相册条目版本或内容异常，原数据已保留');
  return {schema:1,id:entry.id,revision:entry.revision,kind:entry.kind,title:entry.title,date:entry.date,note:entry.note,createdAt:entry.createdAt,updatedAt:entry.updatedAt,image:photoInfo(entry.image),reference:reference(entry.reference)};
 }
 function draft(value){
  if(!object(value)||!['daily','milestone'].includes(value.kind)||!day(value.date)||!text(value.title,40)||!value.title.trim()||!text(value.note,500))throw Error('请填写日期、1–40字标题和最多500字的文字');
  return {kind:value.kind,title:value.title.trim(),date:value.date,note:value.note,reference:reference(value.reference)};
 }
 const content=e=>JSON.stringify({kind:e.kind,title:e.title,date:e.date,note:e.note,image:e.image,reference:e.reference||null});
 function validatedList(rows){
  if(!Array.isArray(rows)||rows.length>MAX_ENTRIES)throw Error('相册条目数量或格式异常，原数据已保留');
  const result=rows.map(validate);if(new Set(result.map(x=>x.id)).size!==result.length)throw Error('相册条目编号重复，原数据已保留');
  return result.sort((a,b)=>b.date.localeCompare(a.date)||b.updatedAt-a.updatedAt||a.id.localeCompare(b.id));
 }
 const fingerprint=rows=>JSON.stringify([...rows].sort((a,b)=>a.id.localeCompare(b.id)));
 async function hash(bytes){
  if(!globalThis.crypto?.subtle)throw Error('当前浏览器不支持相册校验，请使用新版Edge或Chrome');
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),n=>n.toString(16).padStart(2,'0')).join('');
 }
 async function image(value){
  if(!value||!(value.blob instanceof Blob)||!Number.isInteger(value.width)||!Number.isInteger(value.height))throw Error('请选择可读取的照片');
  const bytes=new Uint8Array(await value.blob.arrayBuffer()),type=value.blob.type;
  if(type==='image/jpeg'?(bytes[0]!==255||bytes[1]!==216||bytes[2]!==255):type==='image/png'?![137,80,78,71,13,10,26,10].every((x,i)=>bytes[i]===x):true)throw Error('请选择JPEG或PNG图片，原相册未改动');
  const info=photoInfo({type,width:value.width,height:value.height,bytes:bytes.length,hash:await hash(bytes)});
  if(typeof globalThis.createImageBitmap==='function'){
   let bitmap;try{bitmap=await createImageBitmap(value.blob);if(bitmap.width!==info.width||bitmap.height!==info.height)throw Error('size')}catch{throw Error('照片无法解码或尺寸不符，原相册未改动')}finally{bitmap?.close()}
  }
  return {info,blob:value.blob};
 }
 function base64(bytes){let s='';for(let i=0;i<bytes.length;i+=16384)s+=String.fromCharCode(...bytes.subarray(i,i+16384));return btoa(s)}
 function unbase64(value){
  if(typeof value!=='string'||value.length>Math.ceil(MAX_IMAGE_BYTES/3)*4+4||value.length%4||!/^[A-Za-z0-9+/]*={0,2}$/.test(value))throw Error('备份图片内容无法读取');
  const raw=atob(value);return Uint8Array.from(raw,c=>c.charCodeAt(0));
 }
 async function decodeBackup(raw){
  if(typeof raw!=='string'||raw.length>MAX_BACKUP_BYTES)throw Error('相册备份过大或无法读取');
  let data;try{data=JSON.parse(raw)}catch{throw Error('这不是可读取的相册备份')}
  if(!object(data)||data.format!=='fitfuel-life-album'||data.schema!==1||!Array.isArray(data.entries))throw Error('相册备份版本不受支持，原相册未改动');
  const entries=validatedList(data.entries.map(x=>x?.entry)),files=new Map(data.entries.map(x=>[x.entry.id,x.data])),items=[];
  for(const entry of entries){
   let prepared=null;
   if(entry.image){prepared=await image({blob:new Blob([unbase64(files.get(entry.id))],{type:entry.image.type}),width:entry.image.width,height:entry.image.height});if(JSON.stringify(prepared.info)!==JSON.stringify(entry.image))throw Error('备份照片校验失败，原相册未改动')}
   else if(files.get(entry.id)!==null)throw Error('备份条目与照片不对应');
   items.push({entry,blob:prepared?.blob||null,conflictId:'import-'+await hash(new TextEncoder().encode(entry.id+':'+content(entry)))});
  }
  return items;
 }
 function planMerge(current,items){
  const byId=new Map(validatedList(current).map(x=>[x.id,x])),additions=[];let conflicts=0,skipped=0;
  for(const item of items){
   const old=byId.get(item.entry.id);let target=item.entry.id;
   if(old&&content(old)===content(item.entry)){skipped++;continue}
   if(old){target=item.conflictId;const imported=byId.get(target);if(imported){if(content(imported)!==content(item.entry))throw Error('备份合并编号冲突，请重新核对');skipped++;continue}conflicts++}
   const next=validate({...item.entry,id:target,revision:1});byId.set(target,next);additions.push({entry:next,blob:item.blob});
  }
  if(byId.size>MAX_ENTRIES)throw Error('本机相册最多保存200段纪念，请先备份并整理后再导入');
  return {additions,added:additions.length,conflicts,skipped};
 }
 function create({indexedDB=globalThis.indexedDB,now=Date.now}={}){
  let connection=null;const plans=new WeakMap();
  function open(){
   if(!indexedDB)return Promise.reject(Error('当前浏览器无法保存本机相册，其他记录功能仍可使用'));
   if(connection)return connection;
   connection=new Promise((resolve,reject)=>{
    let request,abandoned=false;
    try{request=indexedDB.open(DB,1)}catch{connection=null;reject(Error('本机相册暂时无法打开，请重试'));return}
    request.onupgradeneeded=event=>{if(event.oldVersion>0)return;const db=request.result;if(!db.objectStoreNames.contains('entries'))db.createObjectStore('entries',{keyPath:'id'});if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos',{keyPath:'id'})};
    request.onblocked=()=>{abandoned=true;connection=null;reject(Error('另一个页面正在使用相册，请关闭它后重试'))};
    request.onerror=()=>{connection=null;reject(Error(request.error?.name==='VersionError'?'相册来自更新版本，请更新后打开；原相册已保留':'本机相册无法读取，请重试；原相册已保留'))};
    request.onsuccess=()=>{const db=request.result;if(abandoned){db.close();return}if(!db.objectStoreNames.contains('entries')||!db.objectStoreNames.contains('photos')){db.close();connection=null;reject(Error('相册结构无法读取，原数据已保留'));return}db.onversionchange=()=>{db.close();connection=null};resolve(db)};
   });const pending=connection;pending.catch(()=>{if(connection===pending)connection=null});return pending;
  }
  async function transaction(mode,work){
   const db=await open();return new Promise((resolve,reject)=>{
    let tx,result,failure;
    const fail=error=>{failure=error;try{tx.abort()}catch{reject(error)}};
    try{tx=db.transaction(['entries','photos'],mode);tx.oncomplete=()=>resolve(result);tx.onabort=()=>reject((failure?.name==='QuotaExceededError'||tx.error?.name==='QuotaExceededError')?Error('本机空间不足，相册未保存，请整理空间后重试'):failure||Error('相册操作未完成，原数据已保留，请重试'));
     const guard=fn=>()=>{try{fn()}catch(error){fail(error)}};
     work({entries:tx.objectStore('entries'),photos:tx.objectStore('photos'),done:x=>{result=x},guard,fail});
    }catch(error){if(tx)fail(error);else reject(Error('相册暂时无法使用，请重新打开'))}
   });
  }
  const list=()=>transaction('readonly',c=>{const r=c.entries.getAll();r.onsuccess=c.guard(()=>c.done(validatedList(r.result)))});
  async function save(value,{id:entryId,revision=0,image:nextImage}={}){
   const fields=draft(value);if(!id(entryId)||!Number.isSafeInteger(revision)||revision<0||!time(now()))throw Error('纪念编号或版本无法读取，请重新打开');
   const prepared=nextImage===undefined?undefined:nextImage===null?null:await image(nextImage);
   return transaction('readwrite',c=>{const r=c.entries.get(entryId);r.onsuccess=c.guard(()=>{
    const old=r.result?validate(r.result):null,info=prepared===undefined?old?.image||null:prepared?.info||null;
    if(old&&old.revision!==revision){if(content(old)===content({...fields,image:info})){c.done(old);return}throw Error('这段纪念已在其他页面更改，请重新打开后编辑')}
    if(!old&&revision!==0)throw Error('这段纪念已删除，请重新打开相册');
    const commit=()=>{const stamp=now(),next=validate({schema:1,id:entryId,revision:(old?.revision||0)+1,...fields,createdAt:old?.createdAt??stamp,updatedAt:Math.max(stamp,old?.updatedAt||0),image:info});c.entries.put(next);if(prepared===null)c.photos.delete(entryId);else if(prepared)c.photos.put({id:entryId,blob:prepared.blob});c.done(next)};
    if(old)commit();else{const count=c.entries.count();count.onsuccess=c.guard(()=>{if(count.result>=MAX_ENTRIES)throw Error('本机相册已满200段，请先备份并整理');commit()})}
   })});
  }
  const photo=entryId=>transaction('readonly',c=>{const a=c.entries.get(entryId),b=c.photos.get(entryId);let count=0;const ready=c.guard(()=>{if(++count<2)return;const entry=a.result?validate(a.result):null;if(!entry)throw Error('这段纪念已删除');if(!entry.image){c.done(null);return}const blob=b.result?.blob;if(!(blob instanceof Blob)||blob.type!==entry.image.type||blob.size!==entry.image.bytes)throw Error('这张照片暂时无法读取，文字纪念仍保留');c.done(blob)});a.onsuccess=ready;b.onsuccess=ready});
  const remove=(entryId,revision)=>transaction('readwrite',c=>{const r=c.entries.get(entryId);r.onsuccess=c.guard(()=>{if(!r.result){c.done(false);return}const old=validate(r.result);if(old.revision!==revision)throw Error('这段纪念已在其他页面更改，请重新打开');c.entries.delete(entryId);c.photos.delete(entryId);c.done(true)})});
  async function backup(){
   const snapshot=await transaction('readonly',c=>{const a=c.entries.getAll(),b=c.photos.getAll();let count=0;const ready=c.guard(()=>{if(++count<2)return;c.done({entries:validatedList(a.result),photos:b.result})});a.onsuccess=ready;b.onsuccess=ready});
   const pictures=new Map(snapshot.photos.map(x=>[x.id,x.blob])),entries=[];
   if(pictures.size!==snapshot.entries.filter(x=>x.image).length)throw Error('相册照片与条目无法核对，未生成不完整备份');
   for(const entry of snapshot.entries){let data=null;if(entry.image){const blob=pictures.get(entry.id);if(!(blob instanceof Blob))throw Error('相册缺少照片，未生成不完整备份');const bytes=new Uint8Array(await blob.arrayBuffer());if(bytes.length!==entry.image.bytes||await hash(bytes)!==entry.image.hash)throw Error('相册照片校验失败，未生成不完整备份');data=base64(bytes)}entries.push({entry,data})}
   return JSON.stringify({format:'fitfuel-life-album',schema:1,exportedAt:now(),entries});
  }
  async function previewImport(raw){const items=await decodeBackup(raw),current=await list(),merged=planMerge(current,items),plan=Object.freeze({added:merged.added,conflicts:merged.conflicts,skipped:merged.skipped});plans.set(plan,{baseline:fingerprint(current),additions:merged.additions});return plan}
  async function restore(plan){const prepared=plans.get(plan);if(!prepared)throw Error('请先预览这份相册备份');const result=await transaction('readwrite',c=>{const r=c.entries.getAll();r.onsuccess=c.guard(()=>{if(fingerprint(validatedList(r.result))!==prepared.baseline)throw Error('本机相册已变化，请重新预览后导入');for(const item of prepared.additions){c.entries.add(item.entry);if(item.blob)c.photos.add({id:item.entry.id,blob:item.blob})}c.done({added:prepared.additions.length})})});plans.delete(plan);return result}
  return {list,save,photo,remove,backup,previewImport,restore,async close(){if(connection)(await connection).close();connection=null}};
 }
 return {DB,MAX_ENTRIES,MAX_IMAGE_BYTES,MAX_BACKUP_BYTES,validate,draft,photoInfo,validatedList,decodeBackup,planMerge,create};
});
