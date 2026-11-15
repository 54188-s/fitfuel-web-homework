(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.createFitNativeImport=factory})(typeof globalThis!=='undefined'?globalThis:this,function(adapter,FitData){
 'use strict';
 const KEY='fitfuel_native_import_job_v1',object=x=>x&&typeof x==='object'&&!Array.isArray(x);
 const valid=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x))&&new Date(x+'T00:00:00Z').toISOString().slice(0,10)===x;
 const stringify=x=>JSON.stringify(x);
 function getJob(){const raw=adapter.getRaw(KEY);if(!raw)return null;let job;try{job=JSON.parse(raw)}catch{throw Error('旧版导入状态无法读取，原数据已保留')}
  if(!object(job)||job.schema!==1||!['pending','done'].includes(job.phase)||!object(job.before)||!object(job.after)||!object(job.snapshot))throw Error('旧版导入版本异常，原数据已保留');
  const allowed=new Set(['fitfuel_meals','fitfuel_history','fitfuel_weight_history','fitfuel_profile','fitfuel_favorite_foods','fitfuel_native_legacy_v1']);
  if(Object.keys(job.after).some(k=>!allowed.has(k)||typeof job.after[k]!=='string'||!(job.before[k]===null||typeof job.before[k]==='string'))||Object.keys(job.before).some(k=>!Object.hasOwn(job.after,k)))throw Error('旧版导入范围异常，原数据已保留');
  return job}
 function preview(snapshot){
  if(!object(snapshot)||snapshot.schema!==1||!object(snapshot.preferences))throw Error('旧App记录格式无法识别');
  const prefs=snapshot.preferences,read=(key,fallback)=>{if(!prefs[key])return fallback;try{return JSON.parse(prefs[key])}catch{throw Error('旧App的'+key+'无法解析，未写入新记录')}};
  const meals=read('meals',[]),workouts=read('workouts',[]),history=read('training_history_v1',[]),weights=read('weights',[]),profile=read('profile',{});
  if(![meals,workouts,history,weights].every(Array.isArray)||!object(profile))throw Error('旧App记录结构不完整');
  const current=key=>{const raw=adapter.getRaw(key);if(!raw)return [];let rows;try{rows=JSON.parse(raw)}catch{throw Error('当前网页记录无法读取，停止导入')};if(!Array.isArray(rows))throw Error('当前网页记录格式异常');return rows};
  const migratedMeals=meals.map(m=>{
   if(!object(m)||typeof m.id!=='string'||!m.id||typeof m.name!=='string'||!day(m.day)||!['早餐','午餐','晚餐','加餐'].includes(m.slot)||!['kcal','protein','fat','carb','grams'].every(k=>valid(m[k],0,30000)))throw Error('旧饮食记录有异常值，未覆盖任何数据');
   return {...m,id:'native-meal-'+m.id,date:m.day,origin:'native-import',createdAt:null};
  });
  const exerciseId=name=>FitData.EXERCISES.find(e=>e.name===name)?.id||'native-legacy';
  const migratedTraining=workouts.map(x=>{
   if(!object(x)||typeof x.id!=='string'||!x.id||typeof x.name!=='string'||!day(x.day)||![x.sets,x.reps,x.load].every(v=>typeof v==='number'&&Number.isFinite(v)))throw Error('旧训练记录格式异常');
   return {id:'native-workout-'+x.id,date:x.day,name:x.name,type:'strength',kcal:0,kcalUnknown:true,origin:'native-import',items:[{exId:exerciseId(x.name),name:x.name,sets:x.sets,reps:x.reps,weight:x.load}]};
  });
  for(const x of history){
   if(!object(x)||typeof x.id!=='string'||!x.id||!day(x.day)||!Array.isArray(x.entries))throw Error('旧逐组记录格式异常');
   const items=x.entries.map(e=>{if(!object(e)||!Array.isArray(e.sets)||typeof e.name!=='string')throw Error('旧动作分组异常');const actualSets=e.sets.filter(s=>s.done).map(s=>{const reps=Number(s.reps),weight=Number(s.load);if(!valid(reps,1,200)||!valid(weight,0,1000))throw Error('旧训练组数值异常');return {reps,weight}});return {exId:e.exerciseId||exerciseId(e.name),name:e.name,sets:actualSets.length,reps:actualSets[0]?.reps||0,weight:actualSets[0]?.weight||0,actualSets}}).filter(e=>e.sets);
   migratedTraining.push({id:'native-training-'+x.id,date:x.day,name:'旧App逐组训练',type:'strength',items,kcal:0,kcalUnknown:true,origin:'native-import',legacyStartedAt:x.startedAt,legacyFinishedAt:x.finishedAt});
  }
  const merge=(old,rows)=>[...old,...rows.filter(x=>!old.some(y=>y.id===x.id))];
  const after={'fitfuel_meals':stringify(merge(current('fitfuel_meals'),migratedMeals)),'fitfuel_history':stringify(merge(current('fitfuel_history'),migratedTraining))};
  const oldWeights=current('fitfuel_weight_history');let outside=0;
  const importedWeights=weights.filter(x=>{if(!object(x)||!day(x.day)||!valid(x.kg,20,350))throw Error('旧体重记录格式异常');if(!valid(x.kg,30,300)){outside++;return false}return true}).map(x=>({date:x.day,weight:x.kg,origin:'native-import'}));
  after.fitfuel_weight_history=stringify([...oldWeights,...importedWeights.filter(x=>!oldWeights.some(y=>y.date===x.date))].sort((a,b)=>a.date.localeCompare(b.date)));
  if(!adapter.getRaw('fitfuel_profile')&&valid(profile.height,100,250)&&valid(profile.weight,30,300)&&valid(profile.age,14,100))after.fitfuel_profile=stringify({height:profile.height,weight:profile.weight,age:profile.age,...(valid(profile.goal,1000,6000)?{targetCalories:profile.goal}:{}),origin:'native-import'});
  const favorite=read('favorites',[]);if(!Array.isArray(favorite))throw Error('旧收藏格式异常');const ids=new Set(FitData.FOODS.map(f=>f.id));after.fitfuel_favorite_foods=stringify([...new Set([...current('fitfuel_favorite_foods'),...favorite.filter(id=>ids.has(id))])]);
  after.fitfuel_native_legacy_v1=stringify(snapshot);
  const before=Object.fromEntries(Object.keys(after).map(k=>[k,adapter.getRaw(k)??null]));
  const counts={meals:migratedMeals.length,training:migratedTraining.length,weights:importedWeights.length,archivedWeights:outside,hasDraft:!!prefs.training_active_v1};
  return {schema:1,phase:'pending',before,after,snapshot,counts};
 }
 function run(snapshot){
  let job=getJob();if(job?.phase==='done')return job.counts;
  if(!job){job=preview(snapshot);adapter.setRaw(KEY,stringify(job))}
  // Validate all current values before resuming; a newer user edit is never overwritten.
  for(const [key,value] of Object.entries(job.after)){const actual=adapter.getRaw(key)??null;if(actual!==job.before[key]&&actual!==value)throw Error('导入期间记录已变化，已停止覆盖；原始档案和当前记录均保留')}
  for(const [key,value] of Object.entries(job.after))if(adapter.getRaw(key)!==value)adapter.setRaw(key,value);
  adapter.setRaw(KEY,stringify({...job,phase:'done'}));return job.counts;
 }
 return {preview,run,status:getJob};
});

if(typeof window!=='undefined')document.addEventListener('DOMContentLoaded',async()=>{
 const section=document.getElementById('nativeImport');if(!section)return;
 let native;try{native=(parent!==self?parent:window).FitFuelNative}catch{return}
 if(!native?.isNative?.())return;
 section.hidden=false;const info=document.getElementById('nativeImportInfo'),actions=document.getElementById('nativeImportActions'),status=document.getElementById('nativeImportStatus');
 const importer=window.createFitNativeImport({getRaw:k=>localStorage.getItem(k),setRaw:(k,v)=>localStorage.setItem(k,v)},FitData);
 try{
  const snapshot=await native.getSnapshot();const pending=importer.status();
  if(pending?.phase==='done'){info.textContent='旧App记录已接回。原始逐组档案和未完成草稿也已保留。';return}
  const plan=pending||importer.preview(snapshot),n=plan.counts;
  info.textContent=`发现 ${n.meals} 条饮食、${n.training} 场训练、${n.weights} 条体重。现有同日体重和已保存记录优先保留。旧版未记录的身体选项请到身体档案确认。`;
  if(n.hasDraft)info.textContent+=' 未完成的旧逐组草稿保存在原始档案中，不自动计为完成。';
  const button=document.createElement('button');button.className='primary';button.textContent=pending?'继续上次导入':'导入并保留原始档案';actions.append(button);
  button.onclick=()=>{try{importer.run(snapshot);status.textContent='导入完成。历史记录不补发游戏经验；旧训练未记录的热量不补造。';button.disabled=true;fitfuelApp.refresh()}catch(e){status.textContent=e.message}};
 }catch(e){status.textContent=e.message||'旧记录暂时无法读取，请重试'}
});
