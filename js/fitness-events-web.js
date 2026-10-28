document.addEventListener('DOMContentLoaded',()=>{
 window.FitEvents=createFitnessEvents({getRaw:k=>localStorage.getItem(k),setRaw:(k,v)=>localStorage.setItem(k,v)});
 for(const [method,type] of [['addFoodMeal','meal.saved'],['recordTraining','training.saved'],['saveWeight','weight.saved']]){
  const original=FitStore[method];FitStore[method]=function(...args){const result=original.apply(this,args);try{FitEvents.publish(type,method==='saveWeight'?args[0]:result.id,method==='saveWeight'?args[0]:result.date)}catch(e){console.warn('记录已保存，扩展事件暂不可用')}return result};
 }
});
