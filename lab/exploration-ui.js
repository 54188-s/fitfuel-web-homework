// Presentation for the existing exploration ledger. No independent timer or reward store.
export function mountExploration(hub, refresh) {
  const $=s=>document.querySelector(s);let view,selected='riverside',timer;
  const el=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n};
  function error(text){$('#exploreMessage').textContent=text;}
  function run(kind){
    try {
      if(kind==='start')hub.start(selected);else hub[kind]();
      refresh();error(kind==='claim'?'已领取本次累积的灵感，发现也记下了。':kind==='finish'?'这趟探索已结束，累积收益已领取。':'已经出发。关闭页面后仍按时间累计。');
    }catch(e){error(e.message)}
  }
  $('#exploreStart').onclick=()=>run('start');$('#exploreClaim').onclick=()=>run('claim');$('#exploreFinish').onclick=()=>run('finish');
  function update(g){
    clearTimeout(timer);view=g;
    $('#exploreDisabled').hidden=!!g.enabled;$('#exploreContent').hidden=!g.enabled;
    if(!g.enabled)return;
    const trip=g.trip;
    $('#routeChoices').replaceChildren(...g.journey.routes.map(r=>{
      const label=document.createElement('label'),input=document.createElement('input');input.type='radio';input.name='route';input.value=r.id;input.checked=selected===r.id;input.disabled=!!trip;
      input.onchange=()=>{selected=r.id;update(view)};
      const copy=el('span','');copy.append(el('strong',r.name),el('small',r.preview));label.append(input,copy);return label;
    }));
    $('#exploreStart').hidden=!!trip;$('#exploreClaim').hidden=!trip;$('#exploreFinish').hidden=!trip;
    $('#exploreClaim').disabled=!trip?.pendingUnits||g.clockWarning;$('#exploreFinish').disabled=!!g.clockWarning;
    $('#tripStatus').textContent=g.clockWarning?'设备时间早于上次使用时间，请校正后重试。':trip?trip.routeName+' · 已累计 '+trip.earnedUnits+' / 32 灵感'+(trip.capped?' · 已达8小时上限':''):'选一条路线，带一点新发现回家。';
    $('#pendingInspiration').textContent=trip?'待领取 '+trip.pendingUnits+' · 本趟已领取 '+trip.claimedUnits:'每15分钟1灵感，单趟最多累计8小时。';
    const list=$('#discoveryList'),found=g.journey.routes.flatMap(r=>r.events.filter(e=>e.unlocked)).sort((a,b)=>b.discoveredAt-a.discoveredAt||b.units-a.units);
    list.replaceChildren(...found.map(e=>{const li=el('li','');li.append(el('small',e.routeName+' · '+e.dateLabel),el('h3',e.title),el('p',e.body));return li}));
    $('#discoveryEmpty').hidden=!!found.length;$('#discoveryCount').textContent=g.journey.count+' / '+g.journey.total;
    if(trip&&!trip.capped&&!g.clockWarning&&!document.hidden)timer=setTimeout(refresh,Math.max(1000,Math.min(30000,trip.nextUnitAt-Date.now()+50)));
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer)});
  window.addEventListener('pagehide',()=>clearTimeout(timer));
  return {update};
}
