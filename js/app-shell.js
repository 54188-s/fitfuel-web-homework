'use strict';
(()=>{
 if(window.capacitorExports)window.FitFuelNative={isNative:()=>capacitorExports.Capacitor.isNativePlatform(),getSnapshot:()=>capacitorExports.registerPlugin('FitFuelLegacy').getSnapshot()};
 const names={life:'生活间',home:'今日工作台',training:'训练管理',library:'动作图鉴',exercise:'动作详情',strength:'无氧训练',cardio:'有氧训练',nutrition:'营养管理',foods:'食物数据库',meals:'今日饮食',analysis:'饮食分析',body:'身体档案',metrics:'身体指标',weight:'体重趋势',account:'登录',register:'注册',user:'用户中心',about:'网站介绍',techniques:'交互与技术',contact:'联系与版权'};
 const frame=document.getElementById('appContent'),menu=document.getElementById('appMenu'),more=document.getElementById('showMore');
 const selected=page=>['training','library','exercise','strength','cardio'].includes(page)?'training':['nutrition','foods','meals','analysis'].includes(page)?'meals':['body','metrics','weight'].includes(page)?'body':page==='life'?'life':'more';
 function active(page){document.getElementById('appTitle').textContent=names[page]||'FitFuel';document.querySelectorAll('[data-tab]').forEach(b=>{const on=b.dataset.tab===selected(page);if(on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')})}
 function go(page){if(!names[page])return;frame.src=page==='life'?'lab/index.html':'html/'+page+'.html';active(page);if(menu.open)menu.close()}
 document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));
 more.onclick=()=>menu.showModal();document.getElementById('closeMore').onclick=()=>menu.close();menu.addEventListener('close',()=>more.focus());
 document.getElementById('appBack').onclick=()=>{if(menu.open)menu.close();else if(history.length>1)history.back();else go('life')};
 window.addEventListener('message',e=>{if(e.source!==frame.contentWindow||e.origin!==(location.protocol==='file:'?'null':location.origin)||e.data?.kind!=='fitfuel-course')return;
  if(e.data.action==='active')active(e.data.page);else if(e.data.action==='navigate')go(e.data.page);else if(e.data.action==='toggle')menu.showModal();
 });
 frame.addEventListener('load',()=>{try{const doc=frame.contentDocument;doc.documentElement.classList.add('app-content');if(!doc.getElementById('appContentStyle')){const css=doc.createElement('link');css.id='appContentStyle';css.rel='stylesheet';css.href=new URL('css/app-content.css',location.href).href;doc.head.append(css)}}catch{}});
 active('life');
})();
