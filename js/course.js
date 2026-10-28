"use strict";
document.addEventListener('DOMContentLoaded',()=>{
 const {$,esc}=FitUI;
 document.querySelectorAll('[data-contact]').forEach(el=>el.textContent=window.FitContact?.[el.dataset.contact]||el.textContent);
 const page=document.body.dataset.page==='index'?'home':document.body.dataset.page;
 if(self!==top)parent.postMessage({kind:'fitfuel-course',action:'active',page,title:document.title.split(' · ')[0]},'*');
 document.querySelectorAll('img[usemap]').forEach(img=>{function resize(){const scale=img.clientWidth/440;const map=document.querySelector('map[name="'+img.getAttribute('usemap').slice(1)+'"]');map?.querySelectorAll('area[data-original]').forEach(a=>a.coords=a.dataset.original.split(',').map(v=>Math.round(Number(v)*scale)).join(','))}new ResizeObserver(resize).observe(img);img.addEventListener('load',resize);resize()});
 if($('courseWelcome'))$('courseWelcome').onclick=()=>{FitUI.modal('<h2>从今天开始，建立自己的节奏。</h2><p>① 身体档案确定目标<br>② 动作库建立训练计划<br>③ 食物记录与体重趋势查看进步</p><div class="actions"><a class="primary" href="body.html">填写身体档案</a><button class="secondary" id="guideClose">稍后再看</button></div>');$('guideClose').onclick=FitUI.close};
 if($('filterControls'))$('filterControls').onclick=e=>{const b=e.target.closest('[data-filter]');if(!b)return;$('filterPhoto').style.filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))};
 if($('courseFoodTable'))$('courseFoodTable').innerHTML=FitData.FOODS.slice(0,6).map(f=>'<tr><th scope="row">'+esc(f.name)+'</th>'+['kcal','protein','fat','carb'].map(k=>'<td>'+esc(f[k])+'</td>').join('')+'</tr>').join('');
 if($('feedbackForm'))$('feedbackForm').onsubmit=e=>{e.preventDefault();FitUI.modal('<h2>确认反馈草稿</h2><p>称呼：'+esc($('feedbackName').value)+'<br>类型：'+esc($('feedbackType').value)+'</p><p>'+esc($('feedbackText').value)+'</p><p class="muted">仅本地预览，没有发送。</p><button id="feedbackClose" class="primary">关闭预览</button>');$('feedbackClose').onclick=()=>{FitUI.close();$('feedbackStatus').textContent='反馈草稿已预览，未发送到服务器。'}};
});
FitPages.register=()=>{FitPages.account();FitUI.$('showRegister').click()};
