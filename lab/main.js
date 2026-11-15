import { setRoomCollectibles } from './room-details.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { buildRoom,blocks,bounds,gradient,dumbbell,roomScale } from './room.js';
import { navigation } from './navigation.js';
import { modelProfile } from './model-profile.js';
import { mountLife } from './life-ui.js';

const $=s=>document.querySelector(s),canvas=$('#scene'),stage=$('.room');
const roomEvents=new EventTarget();
let roomModel,decorIds=[],showcase=false;
roomEvents.addEventListener('decor',e=>{decorIds=e.detail;if(roomModel){setRoomCollectibles(roomModel,decorIds);dirty=true}});
roomEvents.addEventListener('showcase',()=>{showcase=true;near=false;framing();dirty=true});
const lifeUI=mountLife({act:action,setPaused,setMessage:status,events:roomEvents});
window.FitLifeRoom={snapshot:()=>lifeUI.snapshot()};
const scene=new THREE.Scene();scene.background=new THREE.Color('#e1e5d8');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'})}
catch(error){$('#loadingText').textContent='三维画面未能启动，请使用支持 WebGL 的新版浏览器。';$('#retry').hidden=false;$('#retry').onclick=()=>location.reload();throw error}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.04;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
const camera=new THREE.OrthographicCamera(-5,5,3,-3,.1,70);camera.position.set(7,6.1,8.5);
const look=new THREE.Vector3(0,.75,0);camera.lookAt(look);
scene.add(new THREE.HemisphereLight('#fff5dd','#7d9979',1.65));
const sun=new THREE.DirectionalLight('#fff0cf',2.2);sun.position.set(-3.5,7,-5);sun.target.position.set(.3,0,.3);sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-5,right:5,top:6,bottom:-4,near:.5,far:22});sun.shadow.bias=-.00015;sun.shadow.normalBias=.025;sun.shadow.radius=3.5;scene.add(sun,sun.target);
const fill=new THREE.DirectionalLight('#dce8e3',.6);fill.position.set(4,4,7);scene.add(fill);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshToonMaterial({color:'#dce2d2',gradientMap:gradient}));ground.rotation.x=-Math.PI/2;ground.position.y=-.245;ground.receiveShadow=true;scene.add(ground);
const hitPlane=new THREE.Plane(new THREE.Vector3(0,1,0),-.025),ray=new THREE.Raycaster();
const nav=navigation(bounds,blocks),loader=new GLTFLoader(),reduced=matchMedia('(prefers-reduced-motion: reduce)');
let actor,mixer,current,clips={},hands=[],clothes=[],route=[],goal='idle',mode='idle',pause=reduced.matches,ready=false,near=innerWidth<700,elapsed=0,last=0,walkTime=0,seatTime=0,dirty=true,renders=0,frameSpan=5.2;
const spot=(x,z)=>new THREE.Vector3(x*roomScale,.023,z*roomScale);
const home=spot(0,.65),seat=spot(1.82,-.25),seatApproach=spot(1.82,.43),gym=spot(-1.43,.67);
function surfaceHeight(x,z){const dx=.61*roomScale-Math.abs(x+1.43*roomScale),dz=.84*roomScale-Math.abs(z-.70*roomScale);return .023+.032*THREE.MathUtils.smoothstep(Math.min(dx,dz),0,.12)}
const contacts=['Left','Right'].map(()=>{
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{strength:{value:.20}},vertexShader:'varying vec2 uvv;void main(){uvv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 uvv;uniform float strength;void main(){float d=length((uvv-.5)*2.);gl_FragColor=vec4(.16,.22,.14,pow(max(0.,1.-d),2.)*strength);}'});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.30,.39),material);mesh.rotation.x=-Math.PI/2;scene.add(mesh);return mesh;
});
function groundContact(){if(!ready||!actor)return;actor.updateMatrixWorld(true);['Left','Right'].forEach((side,i)=>{const foot=actor.getObjectByName(modelProfile.feet[i]).getWorldPosition(new THREE.Vector3());contacts[i].position.set(foot.x,surfaceHeight(foot.x,foot.z)+.005,foot.z+.035);contacts[i].material.uniforms.strength.value=.36*Math.max(0,1-Math.max(0,foot.y-.108)*9)})}

let exitStart,exitTime=0,pending,roomFit,motionTime=0;
const motionBones=[];
function companionMotion(dt){
 const active=mode==='training'||mode==='finish';
 if(!active)return;motionTime+=dt;
 const envelope=Math.min(1,motionTime/.4)*(mode==='finish'?Math.max(0,1-motionTime/3):1);
 motionBones.forEach((bone,i)=>{const sign=i===0?1:-1;bone.rotateZ(sign*(.13+.12*Math.sin(motionTime*2))*envelope);bone.rotateX(.13*Math.sin(motionTime*2+.5)*envelope)});
 if(mode==='finish'&&motionTime>=3){walkTo(seatApproach,'sit')}
}
function measureRoom(room){
 room.updateMatrixWorld(true);
 const view=new THREE.Vector3(7,6.1,8.5).normalize(),right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),view).normalize(),up=new THREE.Vector3().crossVectors(view,right).normalize();
 let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
 room.traverse(o=>{if(!o.isMesh)return;o.geometry.computeBoundingBox();const b=o.geometry.boundingBox;
  for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z]){
   const v=new THREE.Vector3(x,y,z).applyMatrix4(o.matrixWorld),px=v.dot(right),py=v.dot(up);minX=Math.min(minX,px);maxX=Math.max(maxX,px);minY=Math.min(minY,py);maxY=Math.max(maxY,py);
  }
 });
 return {width:maxX-minX,height:maxY-minY,focus:right.multiplyScalar((minX+maxX)/2).add(up.multiplyScalar((minY+maxY)/2))};
}

const labels={training:'训练陪伴 · 肩部准备活动',idle:'在家，歇一会儿。',walk:'走一走，换个心情。',sit:'坐下来，慢慢呼吸。',finish:'训练结束，放松一下肩膀。',curl:'哑铃弯举 · 分身动作演示'};
function status(text){$('#sceneStatus').textContent=text}
function activeAction(name){document.querySelectorAll('[data-action]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.action===name)))}
function clip(name){
 const next=clips[name];if(!next||next===current)return;
 next.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();if(current)current.crossFadeTo(next,.28,false);current=next;dirty=true;
}
function arrived(){
 route=[];mode=goal;motionTime=0;status(labels[goal]);activeAction(goal);
 hands.forEach(h=>h.visible=goal==='curl');
 if(goal==='sit'){seatTime=0;clip('Sit')}
 else if(goal==='curl')clip('Curl');else clip('Idle');
}
function walkTo(target,after='idle'){
 if(mode==='sit'||mode==='exit'){exitStart=actor.position.clone();exitTime=0;pending={target:target.clone(),after};mode='exit';clip('Idle');hands.forEach(h=>h.visible=false);status('站起来，准备走走。');return true}
 const points=nav.path({x:actor.position.x,z:actor.position.z},{x:target.x,z:target.z});
 if(!points){status('这边放着家具，换一处空地试试。');return false}
 hands.forEach(h=>h.visible=false);route=points.map(p=>new THREE.Vector3(p.x,.023,p.z));goal=after;mode='walk';activeAction(after==='idle'?'walk':after);status('走向'+(after==='sit'?'休息角。':(after==='curl'||after==='training')?'训练垫。':'那片空地。'));return true;
}
function setPaused(value){pause=value;$('#pause').setAttribute('aria-pressed',String(value));$('#pause span').textContent=value?'继续动作':'暂停动作';$('#pause svg').innerHTML=value?'<path d="m8 5 11 7-11 7Z"/>':'<path d="M8 5v14M16 5v14"/>';dirty=true}
function action(name){
 if(!ready)return;setPaused(false);
 if(name==='finish'){if(mode==='sit'){status('训练已结束，坐下来恢复一下。');return}if(mode==='exit'){pending={target:seatApproach.clone(),after:'sit'};return}route=[];goal='finish';arrived();return}
 if(name==='sit'){walkTo(seatApproach,'sit');return}
 if(name==='curl'){walkTo(gym,'curl');return}
 if(name==='training'){walkTo(gym,'training');return}
 if(name==='idle'){walkTo(home,'idle');activeAction('idle');return}
 const target=actor.position.x<-.5?spot(.80,1.15):spot(-.75,1.25);walkTo(target,'idle');activeAction('walk');
}
$('#pause').onclick=()=>setPaused(!pause);$('#framing').onclick=()=>{if(showcase){showcase=false;near=false}else{near=!near}framing();dirty=true};
function framing(){$('#framing').textContent=(near||showcase)?'查看全屋':'近看分身';$('#framing').setAttribute('aria-pressed',String(near))}
function size(){const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);const aspect=r.width/r.height;camera.left=-frameSpan*aspect/2;camera.right=frameSpan*aspect/2;camera.top=frameSpan/2;camera.bottom=-frameSpan/2;camera.updateProjectionMatrix();dirty=true}
new ResizeObserver(size).observe(stage);
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>action(b.dataset.action));
document.querySelectorAll('[data-shirt]').forEach(b=>b.onclick=()=>{clothes.forEach(m=>m.color.set(b.dataset.shirt));document.querySelectorAll('[data-shirt]').forEach(c=>c.setAttribute('aria-pressed',String(c===b)));dirty=true});
$('#retry').onclick=()=>location.reload();
reduced.addEventListener('change',e=>{if(e.matches)setPaused(true)});
window.addEventListener('keydown',e=>{if(e.key==='Escape')setPaused(true)});
canvas.addEventListener('click',e=>{
 if(!ready)return;if(lifeUI.snapshot().live){status('分身正在跟随实际训练，请在训练页暂停或继续。');return}const r=canvas.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const p=new THREE.Vector3();if(ray.ray.intersectPlane(hitPlane,p)&&nav.valid(p.x,p.z)){setPaused(false);walkTo(p,'idle')}
});
function tick(time){
 const dt=last?Math.min((time-last)/1000,.05):0;last=time;let moving=false;
 if(ready&&!pause){
  elapsed+=dt;
  if(mode==='exit'){
   exitTime=Math.min(exitTime+dt,.65);actor.position.lerpVectors(exitStart,seatApproach,THREE.MathUtils.smoothstep(exitTime/.65,0,1));
   if(exitTime>=.65){mode='idle';const next=pending;pending=null;walkTo(next.target,next.after)}
  }else if(mode==='walk'&&route.length){
   const target=route[0],delta=target.clone().sub(actor.position);delta.y=0;const distance=delta.length();
   if(distance<.015){actor.position.copy(target);route.shift();if(!route.length)arrived()}
   else{
    const desired=Math.atan2(delta.x,delta.z),diff=THREE.MathUtils.euclideanModulo(desired-actor.rotation.y+Math.PI,Math.PI*2)-Math.PI;
    const turning=Math.abs(diff)>.06;actor.rotation.y+=diff*(1-Math.exp(-dt*11));
    if(turning)clip('Idle');else{
     clip('Walk');const speed=.4796/1.2,travel=Math.min(distance,speed*dt);actor.position.addScaledVector(delta,travel/distance);walkTime+=travel/speed;
    }
   }
  }else{
   const yaw=mode==='sit'?0:.35;actor.rotation.y=THREE.MathUtils.lerp(actor.rotation.y,yaw,1-Math.exp(-dt*7));
   if(mode==='sit'){seatTime=Math.min(seatTime+dt,.65);actor.position.lerpVectors(seatApproach,seat,THREE.MathUtils.smoothstep(seatTime/.65,0,1))}
  }
  actor.position.y=surfaceHeight(actor.position.x,actor.position.z);mixer.update(dt);companionMotion(dt);moving=true;
 }
 const focus=showcase?new THREE.Vector3(1.12*roomScale,1.53*roomScale,-2.14*roomScale):near&&actor?actor.position.clone().add(new THREE.Vector3(0,.77,0)):roomFit?.focus.clone()||new THREE.Vector3(0,1.05,-.05);
 const aspect=Math.max(.1,stage.clientWidth/stage.clientHeight);
 const wideSpan=roomFit?Math.max(roomFit.height,roomFit.width/aspect)*1.08+.10:5.25;
 const wantedSpan=showcase?2.60:near?(innerWidth<700?3.45:3.6):wideSpan;
 const cameraMoving=Math.abs(frameSpan-wantedSpan)>.003||look.distanceTo(focus)>.005;
 if(cameraMoving){const f=1-Math.exp(-Math.max(dt,.016)*5);frameSpan=THREE.MathUtils.lerp(frameSpan,wantedSpan,f);look.lerp(focus,f);const offset=new THREE.Vector3(7,6.1,8.5);camera.position.copy(look).add(offset);camera.lookAt(look);size()}
 if(moving||dirty||cameraMoving){groundContact();renderer.render(scene,camera);renders++;dirty=false}
}
function loop(){last=0;renderer.setAnimationLoop(tick)}
document.addEventListener('visibilitychange',()=>{if(document.hidden)renderer.setAnimationLoop(null);else{dirty=true;loop()}});
window.addEventListener('pagehide',()=>{renderer.setAnimationLoop(null)});
window.addEventListener('pageshow',()=>{dirty=true;loop()});
async function start(){
 await Promise.all([buildRoom(scene,loader).then(room=>{roomModel=room;setRoomCollectibles(room,decorIds);roomFit=measureRoom(room)}),loader.loadAsync(modelProfile.url).then(g=>{
  actor=g.scene;actor.position.copy(home);actor.rotation.y=.35;actor.name='human';
  actor.traverse(o=>{if(!o.isMesh)return;const convert=m=>{const n=new THREE.MeshToonMaterial({color:m.color,map:m.map,gradientMap:gradient});if(m.name===modelProfile.shirtMaterial){n.color.set('#6e9a78');clothes.push(n)}n.name=m.name;return n};o.material=Array.isArray(o.material)?o.material.map(convert):convert(o.material);o.castShadow=o.receiveShadow=true});
  scene.add(actor);mixer=new THREE.AnimationMixer(actor);for(const [role,name] of Object.entries(modelProfile.clips)){const c=g.animations.find(c=>c.name===name);if(c)clips[role]=mixer.clipAction(c)}
  for(const name of ['Idle','Walk','Sit','Curl'])if(!clips[name])throw new Error('Missing character animation: '+name);
  if(modelProfile.feet.length!==2||modelProfile.hands.length!==2)throw new Error('Invalid character bone mapping');
  for(const name of modelProfile.feet)if(!actor.getObjectByName(name))throw new Error('Missing human foot: '+name);
  for(const name of modelProfile.hands){const bone=actor.getObjectByName(name);if(!bone)throw new Error('Missing human hand');const d=dumbbell();d.position.y=.15;d.visible=false;bone.add(d);hands.push(d)}
  for(const name of modelProfile.shoulders){const bone=actor.getObjectByName(name);if(!bone)throw Error('Missing human shoulder: '+name);motionBones.push(bone)}
  clip('Idle');mixer.update(0);
 })]);
 ready=true;$('#loading').hidden=true;document.body.dataset.ready='true';document.querySelectorAll('[data-action]').forEach(b=>b.disabled=false);activeAction('idle');framing();setPaused(pause);size();
 window.FitToon={
  snapshot(){actor.updateMatrixWorld(true);const feet={};for(const side of ['Left','Right']){const b=actor.getObjectByName(modelProfile.feet[side==='Left'?0:1]);feet[side]=b?.getWorldPosition(new THREE.Vector3()).toArray()}
   return {visibleDecor:['plant','books','lamp','frame'].filter(id=>roomModel?.getObjectByName('collectible '+id)?.visible),shoulders:motionBones.map(b=>b.quaternion.toArray()),motionTime,ready,mode,goal,paused:pause,position:actor.position.toArray(),heading:actor.rotation.y,clip:current?Object.keys(clips).find(k=>clips[k]===current):null,clipTime:current?.time,feet,route:route.map(v=>v.toArray()),renders,triangles:renderer.info.render.triangles,drawCalls:renderer.info.render.calls,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures,shirt:clothes[0]?.color.getHexString(),renderer:renderer.capabilities.isWebGL2?'WebGL2':'WebGL',clips:Object.keys(clips)}},
  // Deterministic inspection entry for the source sample; no persistent state.
  inspectClip(name,time,travel=0){setPaused(true);route=[];for(const a of Object.values(clips))a.stop();const a=clips[name];if(!a)throw Error('Unknown animation');a.reset().play();current=a;actor.position.copy(home);actor.rotation.y=0;actor.position.z+=travel;mixer.setTime(time);hands.forEach(h=>h.visible=name==='Curl');dirty=true;renderer.render(scene,camera);return this.snapshot()}
 };
 roomEvents.dispatchEvent(new Event('ready'));
}
loop();start().catch(error=>{console.error(error);$('#loadingText').textContent='模型未能加载，请重新加载生活间。';$('#retry').hidden=false;$('#loading').hidden=false;document.body.dataset.ready='error'});
