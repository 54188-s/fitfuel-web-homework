export function mountCollection(hub,refresh,events) {
  const root=document.querySelector('#roomCollection');
  const locations={plant:'陈列架左侧',books:'陈列架中左',lamp:'陈列架中右',frame:'陈列架右侧'};
  function update(value) {
    root.querySelector('#collectionCount').textContent=value.ownedCount+' / '+value.items.length+' 已解锁';
    root.querySelector('#collectionNotice').textContent=value.notice||'累计领取探索灵感解锁，不消耗灵感。摆放会保存，重开后仍在。';
    root.querySelector('#collectionItems').replaceChildren(...value.items.map(item=>{
      const li=document.createElement('li'),copy=document.createElement('div'),name=document.createElement('strong'),desc=document.createElement('p'),button=document.createElement('button');
      name.textContent=item.name;desc.textContent=item.description+' · '+locations[item.id];copy.append(name,desc);
      button.textContent=!item.owned?'领取 '+item.threshold+' 灵感解锁':item.selected?'收回':'摆进房间';button.disabled=!item.owned;
      button.dataset.collection=item.id;button.setAttribute('aria-label',button.textContent+' · '+item.name);
      button.onclick=()=>{try{if(item.selected)hub.unequip(item.id);else hub.equip(item.id);refresh();events.dispatchEvent(new Event('showcase'));root.querySelector('#collectionNotice').textContent=item.selected?'已收回 '+item.name:'已摆放 '+item.name;document.querySelector('.room').scrollIntoView({block:'center',behavior:'auto'})}catch(e){root.querySelector('#collectionNotice').textContent=e.message}};
      li.append(copy,button);return li;
    }));
    events.dispatchEvent(new CustomEvent('decor',{detail:value.equipped}));
  }
  root.querySelector('#showShelf').onclick=()=>{events.dispatchEvent(new Event('showcase'));document.querySelector('.room').scrollIntoView({block:'center',behavior:'auto'})};
  return {update};
}
