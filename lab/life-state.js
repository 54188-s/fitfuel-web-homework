import { createGame, createCollection } from './game-core.js';

// Read health facts from the existing website. Only the existing journal/game may write receipts.
export function createLifeHub(adapter, { createJournal, now = Date.now, localDay } = {}) {
  const day = localDay || (() => { const d = new Date(now()); return [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-'); });
  const journal = createJournal(adapter, { now });
  const game = createGame(adapter, () => journal.source(), { now });
  const collection=createCollection(adapter);
  let previous = null, previousAwards = null, previousLevel = null;
  function rows(key) {
    const raw = adapter.getRaw(key);
    let value;
    try { value = raw ? JSON.parse(raw) : []; } catch { throw Error('原记录无法读取，数据已保留。请在原记录页核对后重试。'); }
    if (!Array.isArray(value) || value.some(r => !r || typeof r.id !== 'string' || typeof r.date !== 'string')) throw Error('原记录格式异常，数据已保留。请在原记录页核对。');
    return value;
  }
  function refresh() {
    const date = day(), training = rows('fitfuel_history'), meals = rows('fitfuel_meals');
    const current = new Map([...training.map(r => ['training:'+r.id, r]), ...meals.map(r => ['meal:'+r.id, r])]);
    const changes = [];
    if (previous) for (const [key, row] of current) {
      const before = previous.get(key);
      if (row.date === date && (!before || JSON.stringify(before) !== JSON.stringify(row))) changes.push({ kind: key.split(':')[0], id: row.id, operation: before ? 'update' : 'create' });
    }
    const growth = game.refresh();
    const awards=growth.recentAwards||[];
    const fresh=previousAwards===null?[]:awards.filter(a=>!previousAwards.has(a.key));
    const receipts=changes.filter(c=>c.operation==='create').map(c=>{
      const row=current.get(c.kind+':'+c.id);
      const award=fresh.find(a=>a.recordId===c.id&&a.day===date&&a.amount===growth.rules[c.kind+'XP']);
      const sets=(Array.isArray(row.items)?row.items:[]).reduce((n,item)=>n+(Array.isArray(item.actualSets)?item.actualSets.length:0),0);
      return {kind:c.kind,id:c.id,name:row.name||(c.kind==='training'?'训练记录':'饮食记录'),sets,
        xp:award?.amount||0,enabled:growth.enabled,clockWarning:!!growth.clockWarning,
        level:growth.level,leveledUp:!!award&&previousLevel!==null&&growth.level>previousLevel};
    });
    const collectionView=collection.refresh(growth);
    previous = current;previousAwards=new Set(awards.map(a=>a.key));previousLevel=growth.level??null;
    return { receipts, date, training: training.filter(r => r.date === date), meals: meals.filter(r => r.date === date), growth, changes, collection:collectionView };
  }
  return { refresh, enable() { game.enable(); return refresh(); },
    equip(id) { collection.equip(id);return refresh(); },
    unequip(id) { collection.unequip(id);return refresh(); },
    start(routeId) { game.start('trip-'+now()+'-'+Math.random().toString(36).slice(2),routeId); return refresh(); },
    claim() { const trip=game.refresh().trip;if(!trip)throw Error('当前没有进行中的探索');game.claim(trip.id);return refresh(); },
    finish() { const trip=game.refresh().trip;if(!trip)throw Error('当前没有进行中的探索');game.finish(trip.id);return refresh(); }
  };
}
