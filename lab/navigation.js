// Small planar navigation for a single furnished room. No health or game-state storage.
export function navigation(bounds,blocks,step=.16,radius=.17){
 const valid=(x,z)=>x>=bounds.minX&&x<=bounds.maxX&&z>=bounds.minZ&&z<=bounds.maxZ&&!blocks.some(b=>Math.abs(x-b.x)<b.w/2+radius&&Math.abs(z-b.z)<b.d/2+radius);
 const point=(x,z)=>({x:bounds.minX+x*step,z:bounds.minZ+z*step});
 const cols=Math.floor((bounds.maxX-bounds.minX)/step)+1,rows=Math.floor((bounds.maxZ-bounds.minZ)/step)+1;
 const nearest=p=>{let best=null,dist=Infinity;for(let z=0;z<rows;z++)for(let x=0;x<cols;x++){const q=point(x,z),d=Math.hypot(p.x-q.x,p.z-q.z);if(d<dist&&valid(q.x,q.z)){dist=d;best={x,z,p:q}}}return best};
 const clear=(a,b)=>{const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.z-b.z)/(step/3)));for(let i=0;i<=n;i++){const f=i/n;if(!valid(a.x+(b.x-a.x)*f,a.z+(b.z-a.z)*f))return false}return true};
 function path(start,target){
  if(!valid(target.x,target.z))return null;
  if(clear(start,target))return [{...target}];
  const a=nearest(start),b=nearest(target);if(!a||!b)return null;
  const key=(x,z)=>z*cols+x,open=[{...a,cost:0,score:0}],came=new Map(),costs=new Map([[key(a.x,a.z),0]]),closed=new Set();let end;
  while(open.length){
   open.sort((a,b)=>a.score-b.score);const u=open.shift(),id=key(u.x,u.z);if(closed.has(id))continue;closed.add(id);
   if(u.x===b.x&&u.z===b.z){end=id;break}
   for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    if(!dx&&!dz)continue;const x=u.x+dx,z=u.z+dz;if(x<0||x>=cols||z<0||z>=rows)continue;
    const q=point(x,z),v=key(x,z);if(closed.has(v)||!clear(point(u.x,u.z),q))continue;
    const c=u.cost+Math.hypot(dx,dz);if(c>=(costs.get(v)??Infinity))continue;costs.set(v,c);came.set(v,id);open.push({x,z,p:q,cost:c,score:c+Math.hypot(x-b.x,z-b.z)});
   }
  }
  if(end===undefined)return null;
  const raw=[target];let k=end;while(k!==key(a.x,a.z)){raw.push(point(k%cols,Math.floor(k/cols)));k=came.get(k);if(k===undefined)return null}raw.reverse();
  const result=[];let from=start,index=0;
  while(index<raw.length){let next=index;while(next+1<raw.length&&clear(from,raw[next+1]))next++;result.push(raw[next]);from=raw[next];index=next+1}
  return result;
 }
 return {valid,path,clear};
}
