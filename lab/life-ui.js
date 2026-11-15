import { mountReceipt } from './record-receipt.js';
import { workoutPresentation } from './workout-presentation.js';
import { mountCollection } from './collection-ui.js';
import { mountExploration } from './exploration-ui.js';
import { createLifeHub } from './life-state.js';

const pages = { training:'训练记录', meals:'饮食记录', library:'动作图鉴', exercise:'动作详情', foods:'食物数据库', strength:'无氧训练', cardio:'有氧训练', body:'身体档案', nutrition:'营养管理', analysis:'饮食分析' };
const healthKeys = new Set(['fitfuel_history','fitfuel_meals','fitfuel_training']);
export function mountLife({ act, setPaused, setMessage, events }) {
  const $ = s => document.querySelector(s), frame = $('#recordFrame'), panel = $('#recordPanel');
  const hub = createLifeHub({getRaw:k=>localStorage.getItem(k),setRaw:(k,v)=>localStorage.setItem(k,v)}, {createJournal:window.createFitLifeJournal});
  const exploration=mountExploration(hub,()=>refresh());
  const collection=mountCollection(hub,()=>refresh(),events);
  let view, opener, lastWorkout = '', restTimer, live = null, lastPage = '', ready = false;
  const receipt=mountReceipt({returnToRoom:()=>{closeRecords();$('.room').scrollIntoView({block:'start',behavior:'auto'})}});
  function message(text) { $('#lifeFeedback').textContent = text; }
  function mirrorWorkout(force=false) {
    clearTimeout(restTimer);
    let next = null;
    try { next = window.FitWorkout?.view(); } catch { /* frame is still loading */ }
    live = next?.active ? next : null;
    const phase = live ? live.phase==='paused'||live.phase==='finishing' ? 'paused' : live.restRemainingMs>0 ? 'rest' : 'running' : '';
    const row = live?.rows?.[live.focusRow??0], name = row?.name || live?.name || '';
    const presentation=workoutPresentation(live);
    const canCurl=presentation.action==='curl';
    const key = [phase, live?.sessionId, name, canCurl].join(':');
    $('#workoutNotice').hidden = !live;
    if (live) {
      const label = phase==='paused' ? '训练已暂停' : phase==='rest' ? '正在组间休息' : '训练进行中';
      $('#workoutNotice').textContent = label+' · '+name+' · 已确认 '+live.done+' / '+live.planned+' 组';
      if (ready && (key !== lastWorkout || force)) {
        if (phase==='paused') { setPaused(true); setMessage('训练已暂停，记录和已确认的组都保留。'); }
        else if (phase==='rest') { act('sit'); setMessage('组间休息中，不算训练完成。'); }
        else { act(presentation.action); setMessage(presentation.message); }
      }
      if (live.restRemainingMs>0 && phase!=='paused') restTimer=setTimeout(()=>mirrorWorkout(),live.restRemainingMs+40);
    } else if (lastWorkout && ready) { act('finish'); }
    document.querySelectorAll('.preview-controls [data-action]').forEach(b=>b.disabled=!!live||!ready);
    lastWorkout = live ? key : '';
  }
  function refresh() {
    try {
      view = hub.refresh();collection.update(view.collection);
      if(view.receipts.length)receipt.show(view.receipts);
      else if(view.changes.length)receipt.hide();
      $('#todayDate').textContent = new Date(view.date+'T12:00:00').toLocaleDateString('zh-CN',{month:'long',day:'numeric',weekday:'long'});
      $('#trainingCount').textContent = view.training.length ? '已保存 '+view.training.length+' 次' : '还没有记录';
      $('#mealCount').textContent = view.meals.length ? '已保存 '+view.meals.length+' 条' : '还没有记录';
      $('#trainingTask').classList.toggle('is-done',!!view.training.length);
      $('#mealTask').classList.toggle('is-done',!!view.meals.length);
      const g=view.growth;exploration.update(g);
      $('#growthOff').hidden=g.enabled; $('#growthOn').hidden=!g.enabled;
      if(g.enabled) {
        $('#level').textContent='等级 '+g.level; $('#experience').textContent=g.levelXP+' / '+g.rules.xpPerLevel+' 经验';
        $('#xpProgress').value=g.levelXP; $('#xpProgress').max=g.rules.xpPerLevel;
        $('#inspiration').textContent='已领取灵感 '+g.inspiration;
        $('#awardList').replaceChildren(...g.recentAwards.slice(0,5).map(a=>{const li=document.createElement('li');li.textContent=a.day+' · '+a.title+' +'+a.amount+' 经验';return li}));
        $('#noAwards').hidden=!!g.recentAwards.length;
      }
      $('#hubError').hidden=true;
      const created=view.changes.filter(c=>c.operation==='create');
      if(created.length) {
        const meal=created.some(c=>c.kind==='meal');
        message(meal?'这顿饭已记下。分身陪你坐一会儿。':'训练已保存。确认过的每一组，都留在原记录里。');
        if(ready&&!live) act(meal?'sit':'finish');
      } else if(view.changes.length) message('原记录已更新，今日汇总已同步；不会重复发放当天奖励。');
      mirrorWorkout();
    } catch(error) {
      $('#hubError').hidden=false; $('#hubErrorText').textContent=error.message;
      message('记录暂时无法核对，原数据已保留。可以打开原页面检查。');
    }
  }
  function closeRecords() {
    panel.hidden=true; panel.inert=true;
    // Keep the real page alive, including unsubmitted inputs and the active session.
    refresh(); opener?.focus({preventScroll:true});
  }
  function openRecords(page, source) {
    if(!pages[page])return;
    receipt.hide();
    opener=source||document.activeElement;panel.hidden=false;panel.inert=false;
    $('#recordTitle').textContent=pages[page];
    $('#recordHint').textContent='这里使用原网页功能。关闭后仍保留当前页面和训练进度。';
    if(lastPage!==page){lastPage=page;$('#frameLoading').hidden=false;frame.src='../html/'+page+'.html';}
    $('#recordTitle').focus({preventScroll:true});panel.scrollIntoView({block:'start',behavior:'auto'});
  }
  document.querySelectorAll('[data-record]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openRecords(b.dataset.record,b)}));
  document.querySelectorAll('[data-life]').forEach(b=>b.onclick=()=>{
    const choice=b.dataset.life;
    if(choice==='training'||choice==='meals') {
      if(ready&&!live)act(choice==='training'?'training':'sit');
      openRecords(choice,b);return;
    }
    if(live) {message('有训练正在进行。要暂停或结束计时，请在训练记录里操作。');openRecords('training',b);return;}
    if(!ready){message('三维画面尚未就绪；训练、饮食和图鉴仍可正常打开。');return;}
    act(choice==='rest'?'sit':'walk');
    $('#restCopy').textContent=choice==='rest'?'正在休息 · 随时继续':'由你安排，不扣成长';
    message(choice==='rest'?'坐一会儿也很好。休息没有倒计时，也不会扣成长。':'点小屋里的空地，去你想去的位置。');
  });
  $('#closeRecords').onclick=closeRecords;
  $('#retryHub').onclick=refresh;
  $('#enableGrowth').onclick=()=>{try{hub.enable();message('已开启成长。从现在的新记录开始，历史记录不补奖。');refresh()}catch(e){$('#hubError').hidden=false;$('#hubErrorText').textContent=e.message}};
  frame.addEventListener('load',()=>{
    $('#frameLoading').hidden=true;
    try {
      const doc=frame.contentDocument;
      if(!doc?.body)return;
      const page=doc.body.dataset.page;
      if(pages[page]){lastPage=page;$('#recordTitle').textContent=pages[page]}
      doc.documentElement.classList.add('app-content');
      frame.contentWindow.addEventListener('storage',e=>{if(['fitfuel_game_v1','fitfuel_life_observations_v1'].includes(e.key))e.stopImmediatePropagation()},true);
      if(!doc.getElementById('toonTheme')){const css=doc.createElement('link');css.id='toonTheme';css.rel='stylesheet';css.href=new URL('./record-content.css',location.href).href;doc.head.append(css)}
      doc.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(a&&new URL(a.href).pathname.endsWith('/html/life.html')){e.preventDefault();closeRecords()}});
      doc.addEventListener('keydown',e=>{if(e.key==='Escape'&&!doc.querySelector('dialog[open]'))closeRecords()});
      refresh();
    }catch{message('记录页暂时无法读取，请用独立窗口打开。')}
  });
  window.addEventListener('message',e=>{
    if(e.source!==frame.contentWindow||e.origin!==location.origin||e.data?.kind!=='fitfuel-course')return;
    if(e.data.action==='active'&&pages[e.data.page]){lastPage=e.data.page;$('#recordTitle').textContent=pages[lastPage]}
    if(e.data.action==='navigate'&&pages[e.data.page])openRecords(e.data.page);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)closeRecords()});
  window.addEventListener('storage',e=>{if(e.key===null||healthKeys.has(e.key))refresh()});
  window.addEventListener('pageshow',refresh);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();else clearTimeout(restTimer)});
  window.addEventListener('pagehide',()=>clearTimeout(restTimer));
  events.addEventListener('ready',()=>{ready=true;mirrorWorkout(true)});
  refresh();
  return { refresh, openRecords, closeRecords, snapshot:()=>({view,panelOpen:!panel.hidden,live,ready}) };
}
