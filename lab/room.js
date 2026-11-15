import { addRoomDetails } from './room-details.js';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const roomScale=.84;
export const blocks = [
  {x:-1.75,z:-.85,w:1.55,d:.65},
  {x:1.82,z:-.55,w:.95,d:1.05},
  {x:2.45,z:-1.78,w:.75,d:.65},
  {x:.45,z:-1.95,w:1.35,d:.50},
  {x:-2.55,z:1.42,w:.45,d:.45},
  {x:1.95,z:1.60,w:1.50,d:.65},
  {x:-2.65,z:.05,w:.55,d:1.15}
];
export const bounds={minX:-2.65*roomScale,maxX:2.65*roomScale,minZ:-1.85*roomScale,maxZ:1.85*roomScale};
blocks.forEach(b=>{for(const key of ['x','z','w','d'])b[key]*=roomScale});
export const gradient = new THREE.DataTexture(new Uint8Array([128,174,215,255]),4,1,THREE.RedFormat);
gradient.minFilter=gradient.magFilter=THREE.NearestFilter;gradient.needsUpdate=true;
export const toon=(color)=>new THREE.MeshToonMaterial({color,gradientMap:gradient});
const mats={wall:toon('#e8dfc6'),edge:toon('#d1b88c'),wood:toon('#99704d'),dark:toon('#3e5045'),cream:toon('#eee7d6'),green:toon('#668463'),metal:toon('#46585b')};
function box(parent,name,size,at,mat,r=.035){
 const o=new THREE.Mesh(new RoundedBoxGeometry(...size,2,r),mat);o.name=name;o.position.set(...at);o.castShadow=o.receiveShadow=true;parent.add(o);return o;
}
export function dumbbell(){
 const group=new THREE.Group();
 const rod=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.42,12),mats.metal);rod.rotation.z=Math.PI/2;group.add(rod);
 for(const sign of [-1,1]){
  const plate=new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.11,8),mats.dark);plate.rotation.z=Math.PI/2;plate.position.x=sign*.20;group.add(plate);
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.014,12),mats.green);cap.rotation.z=Math.PI/2;cap.position.x=sign*.263;group.add(cap);
 }
 group.traverse(o=>{if(o.isMesh)o.castShadow=true});return group;
}
export async function buildRoom(scene,loader){
 const room=new THREE.Group();room.scale.setScalar(roomScale);scene.add(room);
 box(room,'plinth',[6.25,.25,5.05],[0,-.16,0],mats.edge,.09);
 box(room,'floor',[6,.10,4.8],[0,-.035,0],toon('#c8a276'),.02);
 const planks=[];
 for(let i=0;i<26;i++){
  const geo=new THREE.BoxGeometry(.219,.009,4.72);geo.translate(-2.875+i*.230,.02,0);planks.push(geo);
 }
 const boards=new THREE.Mesh(mergeGeometries(planks),toon('#d2af80'));boards.receiveShadow=true;room.add(boards);
 // A real opening lets directional light fall through the window frame.
 const back=(name,size,at)=>box(room,name,size,at,mats.wall,.025);
 back('back lower',[6.1,.95,.14],[0,.49,-2.45]);back('back upper',[6.1,.32,.14],[0,2.48,-2.45]);
 back('back left',[.52,1.34,.14],[-2.79,1.64,-2.45]);back('back right',[3.15,1.34,.14],[1.47,1.64,-2.45]);
 back('left wall',[.14,2.62,4.88],[-3.05,1.31,-.03]);
 box(room,'left baseboard',[.08,.105,4.77],[-2.95,.08,-.02],mats.cream,.012);
 box(room,'back baseboard',[5.94,.105,.08],[0,.08,-2.34],mats.cream,.012);
 // Glass and frame are scene geometry, not a painted room background.
 const sky=new THREE.Mesh(new THREE.PlaneGeometry(2.45,1.31),new THREE.MeshBasicMaterial({color:'#b8d5ce'}));sky.position.set(-1.29,1.64,-2.51);room.add(sky);
 const sill=box(room,'window sill',[2.63,.10,.27],[-1.29,.96,-2.35],mats.cream,.025);
 for(const x of [-2.55,-1.3,-.04])box(room,'window mullion',[.065,1.4,.13],[x,1.66,-2.39],mats.cream,.014);
 for(const y of [.98,1.65,2.34])box(room,'window frame',[2.58,.06,.13],[-1.29,y,-2.39],mats.cream,.014);
 box(room,'shelf',[2.52,.07,.38],[1.15,1.43,-2.2],mats.wood,.018);
 const mat=box(room,'training mat',[1.22,.036,1.68],[-1.43,.045,.70],toon('#688b83'),.025);
 for(let i=0;i<7;i++)box(room,'mat stitch',[1.08,.002,.009],[-1.43,.065,.05+i*.205],toon('#82a29a'),.001);
 // A padded exercise bench with a stable, visible frame.
 box(room,'bench pad',[1.38,.15,.40],[-1.75,.42,-.85],toon('#e4c6a3'),.06);
 for(const x of [-2.20,-1.30]){
  box(room,'bench leg',[.09,.34,.28],[x,.18,-.85],mats.metal,.022);
  box(room,'bench foot',[.17,.055,.57],[x,.045,-.85],mats.metal,.02);
 }
 box(room,'dumbbell stand',[.74,.09,.35],[-2.47,.65,-1.81],mats.dark,.03);
 for(const x of [-2.73,-2.21])box(room,'rack leg',[.06,.64,.25],[x,.32,-1.81],mats.metal,.02);
 for(let i=0;i<2;i++){const d=dumbbell();d.scale.setScalar(.60);d.position.set(-2.61+i*.30,.79,-1.80);d.rotation.y=Math.PI/2;room.add(d)}
 const placements=[
 ['loungeChairRelax',{at:[1.82,0,-.50],height:.89,colors:{carpet:'#9dac83',wood:'#8b6747'}}],
 ['sideTable',{at:[2.46,0,-1.77],height:.48}],
 ['plantSmall1',{at:[2.46,.49,-1.77],height:.40}],
 ['pottedPlant',{at:[-2.55,0,1.42],height:.90}],
 ['bookcaseOpenLow',{at:[.45,0,-1.96],height:.72,colors:{wood:'#aa825a'}}],
 ['books',{at:[.14,.73,-1.94],width:.43}],
 ['plantSmall2',{at:[.90,.73,-1.94],height:.42}],
 ['lampRoundFloor',{at:[2.68,0,-.92],height:1.57,colors:{metal:'#65745d',lamp:'#f3dec1'}}],
 ['loungeSofa',{at:[1.95,0,1.60],width:1.50,colors:{carpet:'#78947c',wood:'#8b6747'}}],
 ['cabinetTelevisionDoors',{at:[-2.65,0,.05],width:1.15,rotationY:Math.PI/2}],
 ['kitchenCoffeeMachine',{at:[.44,.73,-1.96],height:.28}],
 ['rugRound',{at:[1.95,.024,1.58],width:1.78}],
 ['plantSmall2',{at:[.25,1.48,-2.16],height:.36,decor:'plant'}],
 ['lampRoundTable',{at:[1.46,1.48,-2.16],height:.35,decor:'lamp'}]
 ];
 await Promise.all(placements.map(async([name,spec])=>{
  const {scene:model}=await loader.loadAsync('./assets/furniture/'+name+'.glb');
  const b=new THREE.Box3().setFromObject(model),size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3());
  const scale=spec.height?spec.height/size.y:spec.width/size.x;
  model.position.set(-center.x,-b.min.y,-center.z);const holder=new THREE.Group();holder.add(model);holder.scale.setScalar(scale);holder.position.set(...spec.at);
  model.traverse(o=>{if(!o.isMesh)return;o.castShadow=o.receiveShadow=true;const convert=m=>{let color=spec.colors?.[m.name];if(!color&&/leaf|plant/i.test(m.name))color='#547953';const n=toon(color||m.color);n.map=m.map;n.side=m.side;return n};o.material=Array.isArray(o.material)?o.material.map(convert):convert(o.material)});
  holder.rotation.y=spec.rotationY||0;holder.name=spec.decor?'collectible '+spec.decor:'furniture '+name;holder.visible=!spec.decor;room.add(holder);
 }));
 // A small floor towel and bottle make the training corner read at game scale.
 box(room,'towel',[.30,.065,.23],[-2.44,.09,.11],mats.cream,.035);
 const bottle=new THREE.Mesh(new THREE.CylinderGeometry(.055,.06,.24,16),toon('#b7c5a6'));bottle.position.set(-2.50,.15,.41);bottle.castShadow=true;room.add(bottle);
 const cap=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.035,12),mats.dark);cap.position.set(-2.50,.286,.41);room.add(cap);
 addRoomDetails(room,{box,toon,mats});
 return room;
}
