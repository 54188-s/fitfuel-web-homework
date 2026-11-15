"use strict";
document.addEventListener('DOMContentLoaded',()=>{FitUI.init();const page=document.body.dataset.page;FitPages[page]?.();window.addEventListener('storage',e=>{if(e.key?.startsWith('fitfuel_')&&!['fitfuel_game_v1','fitfuel_life_observations_v1','fitfuel_collection_v1'].includes(e.key)){const active=document.activeElement;if(!active?.matches('input,select'))FitPages[page]?.()}})});
