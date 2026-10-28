/* First-party extension seam: observations only, no game rewards or cloud sync. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createFitnessEvents=factory})(typeof globalThis!=='undefined'?globalThis:this,function(adapter){
 const supported=new Set(['meal.saved','meal.removed','training.saved','weight.saved']);
 function read(){try{const x=JSON.parse(adapter.getRaw('fitfuel_events_v1')||'[]');return Array.isArray(x)?x:[]}catch{return []}}
 function publish(type,sourceId,date){if(!supported.has(type)||typeof sourceId!=='string'||!sourceId||!/^\d{4}-\d{2}-\d{2}$/.test(date))throw Error('无效的健身事件');const id=type+':'+sourceId,rows=read(),old=rows.find(x=>x.id===id),event={schemaVersion:1,id,type,sourceId,date,occurredAt:old?.occurredAt||new Date().toISOString(),updatedAt:new Date().toISOString()};adapter.setRaw('fitfuel_events_v1',JSON.stringify([...rows.filter(x=>x.id!==id),event].slice(-300)));return event}
 return {publish,list:read};
});
