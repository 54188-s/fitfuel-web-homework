// Visual presentation only: never writes health records or rewards.
export function workoutPresentation(live) {
  if (!live?.active) return {action:'finish', message:'训练结束，放松一下，再到休息角坐坐。'};
  if (live.phase==='paused'||live.phase==='finishing') return {action:'paused',message:'训练已暂停，已确认的组都保留。'};
  if (live.restRemainingMs>0) return {action:'sit',message:'组间休息中。'};
  const row=live.rows?.[live.focusRow??0],name=row?.name||live.name||'';
  const curl=/哑铃.*弯举|弯举.*哑铃/.test(name)&&!/(反向|锤式|集中|上斜)/.test(name);
  return curl ? {action:'curl',message:'跟随哑铃弯举的节奏。'} : {action:'training',message:'正在记录 '+name+'；分身做肩部准备活动，专项姿势以动作图鉴为准。'};
}
