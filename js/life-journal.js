/* Observations of the website's confirmed records; never a second health store. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createFitLifeJournal=factory})(typeof globalThis!=='undefined'?globalThis:this,function(adapter,options){
 'use strict';
 const now=options?.now||Date.now;
 const KEY='fitfuel_life_observations_v1',own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
 const object=x=>x&&typeof x==='object'&&!Array.isArray(x),day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 function read(key,fallback){const raw=adapter.getRaw(key);if(raw===null||raw===undefined||raw==='')return fallback;try{return typeof raw==='string'?JSON.parse(raw):JSON.parse(JSON.stringify(raw))}catch{throw Error('已保存记录无法读取，原数据保留，请重试')}}
 function load(){
  const state=read(KEY,{schema:1,events:[],records:{}});
  if(!object(state)||state.schema!==1||!Array.isArray(state.events)||!object(state.records)||Object.keys(state).some(k=>!['schema','events','records'].includes(k)))throw Error('生活间记录索引版本异常，原数据已保留');
  const ids=new Set();
  for(const e of state.events){if(!object(e)||e.schemaVersion!==2||typeof e.eventId!=='string'||ids.has(e.eventId)||!Number.isSafeInteger(e.revision)||e.revision<1||!['create','update','delete'].includes(e.operation)||!['meal','training'].includes(e.recordType)||typeof e.recordId!=='string'||!day(e.recordLocalDate)||!Number.isFinite(Date.parse(e.occurredAt))||!Number.isInteger(e.timezoneOffsetMinutes)||Math.abs(e.timezoneOffsetMinutes)>840)throw Error('生活间记录索引无法核对，原数据已保留');ids.add(e.eventId)}
  for(const [key,r] of Object.entries(state.records))if(!object(r)||!['meal','training'].includes(r.kind)||key!==r.kind+':'+r.id||typeof r.id!=='string'||!r.id||!Number.isSafeInteger(r.revision)||r.revision<1||!day(r.date)||typeof r.present!=='boolean'||!(r.stamp===null||typeof r.stamp==='string'))throw Error('生活间记录引用异常，原数据已保留');
  return state;
 }
 function source(){
  const state=load(),before=JSON.stringify(state),time=now();
  if(!Number.isSafeInteger(time)||time<0)throw Error('无法读取当前时间');
  const instant=new Date(time),seen=new Set(),result={events:state.events,meals:[],training:[]};
  function event(kind,row,old,operation){
   const revision=(old?.revision||0)+1,created=Date.parse(row.createdAt),updated=Date.parse(row.updatedAt);
   const stamped=operation==='create'&&Number.isFinite(created)?created:operation==='update'&&Number.isFinite(updated)?updated:time;
   const eventId=kind+':'+row.id+':'+revision;
   state.events.push({schemaVersion:2,eventId,recordId:row.id,recordType:kind,revision,operation,recordLocalDate:row.date,
    occurredAt:new Date(stamped).toISOString(),timezoneOffsetMinutes:operation==='create'&&Number.isInteger(row.timezoneOffsetMinutes)?row.timezoneOffsetMinutes:-instant.getTimezoneOffset()});
   return revision;
  }
  for(const [kind,key,target] of [['meal','fitfuel_meals','meals'],['training','fitfuel_history','training']]){
   const rows=read(key,[]);if(!Array.isArray(rows))throw Error('健身记录格式异常，生活间暂停结算，原记录已保留');
   const unique=new Set();
   for(const row of rows){
    if(!object(row)||typeof row.id!=='string'||!row.id||row.id.length>200||!day(row.date)||unique.has(row.id))throw Error('健身记录编号或日期异常，生活间暂停结算');
    unique.add(row.id);result[target].push(row);
    const reference=kind+':'+row.id,old=own(state.records,reference)?state.records[reference]:null;
    const stamp=typeof row.updatedAt==='string'?String(row.revision||0)+':'+row.updatedAt:null;
    seen.add(reference);
    if(!old||!old.present||old.stamp!==stamp||old.date!==row.date){
     // Unstamped historical / imported rows can be viewed but never become new rewarded records.
     const fresh=!old&&Number.isFinite(Date.parse(row.createdAt))&&row.origin!=='native-import';
     const revision=event(kind,row,old,fresh?'create':'update');
     state.records[reference]={kind,id:row.id,revision,date:row.date,stamp,present:true};
    }
   }
  }
  for(const [key,old] of Object.entries(state.records))if(old.present&&!seen.has(key)){
   const revision=event(old.kind,{id:old.id,date:old.date},old,'delete');state.records[key]={...old,revision,present:false};
  }
  if(JSON.stringify(state)!==before)adapter.setRaw(KEY,JSON.stringify(state));
  return result;
 }
 return {source,key:KEY};
});
