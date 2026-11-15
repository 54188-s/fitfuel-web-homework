// A receipt presents committed facts; it cannot award XP or write a record.
export function mountReceipt({returnToRoom}) {
  const box=document.createElement('section');box.id='recordReceipt';box.className='record-receipt';box.hidden=true;
  const content=document.createElement('div');content.setAttribute('role','status');content.setAttribute('aria-live','polite');content.setAttribute('aria-atomic','true');
  const title=document.createElement('strong'),detail=document.createElement('p'),reward=document.createElement('p');reward.className='receipt-reward';
  content.append(title,detail,reward);
  const actions=document.createElement('div');actions.className='receipt-actions';
  const back=document.createElement('button');back.type='button';back.textContent='回到小屋';back.onclick=returnToRoom;
  const close=document.createElement('button');close.type='button';close.textContent='收起';close.setAttribute('aria-label','收起保存结果');close.onclick=()=>{box.hidden=true};
  actions.append(back,close);box.append(content,actions);document.body.append(box);
  return {hide(){box.hidden=true},show(receipts){
    const xp=receipts.reduce((n,r)=>n+r.xp,0),last=receipts.at(-1);
    title.textContent=receipts.length>1?'已保存 '+receipts.length+' 条记录':last.kind==='training'?'这次训练，记下了。':'这一餐，记下了。';
    detail.textContent=receipts.map(r=>r.name+(r.sets?' · '+r.sets+' 组已确认':'')).join('；');
    reward.textContent=xp?'＋'+xp+' 经验 · '+(receipts.some(r=>r.leveledUp)?'升至等级 '+last.level:'今日首次记录奖励已到账'):
      last.clockWarning?'请校正设备时间，成长结算暂时停止。':!last.enabled?'成长尚未开启，记录已保存。':'本次未新增经验；每天首次记录按规则奖励。';
    box.dataset.reward=String(xp);box.hidden=false;
  }};
}
