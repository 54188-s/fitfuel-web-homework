import * as THREE from 'three';

// Real geometry: architectural trim and small objects, all in the room's local units.
export function addRoomDetails(room,{box,toon,mats}) {
  const sage=toon('#718a72'),trim=toon('#d9cbb1'),linen=toon('#d9c3a4'),clay=toon('#b77557');
  box(room,'left wainscot',[.065,.70,4.77],[-2.95,.44,-.02],sage,.01);
  for(let z=-2.20;z<2.3;z+=.48)box(room,'wall batten',[.035,.61,.025],[-2.90,.44,z],trim,.004);
  box(room,'chair rail',[.085,.06,4.77],[-2.90,.82,-.02],trim,.012);
  box(room,'left crown',[.15,.10,4.95],[-3.00,2.61,-.03],mats.cream,.015);
  box(room,'back crown',[6.1,.10,.16],[0,2.61,-2.40],mats.cream,.015);
  box(room,'curtain rod',[2.94,.035,.045],[-1.29,2.43,-2.19],mats.wood,.012);
  for(const side of [-1,1])for(let i=0;i<5;i++){
    const x=-1.29+side*(1.18+i*.045);
    box(room,'linen curtain fold',[.075,1.35,.08],[x,1.69,-2.22+(i%2)*.045],linen,.027);
  }
  // Left-wall noticeboard, hooks and training-day tiles.
  box(room,'notice board frame',[.08,.70,1.08],[-2.89,1.58,-.62],mats.wood,.02);
  box(room,'notice board cork',[.03,.60,.98],[-2.83,1.58,-.62],toon('#bb9970'),.01);
  for(let i=0;i<3;i++)box(room,'paper note',[.012,.27,.20],[-2.80,1.59,-.92+i*.30],i===1?linen:mats.cream,.005);
  // An actual small clock with hands, mounted on the back wall.
  const clock=new THREE.Group();clock.name='wall clock';clock.position.set(2.52,2.06,-2.28);
  const disk=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.04,32),mats.wood);disk.rotation.x=Math.PI/2;clock.add(disk);
  const face=new THREE.Mesh(new THREE.CircleGeometry(.165,32),mats.cream);face.position.z=.024;clock.add(face);
  box(clock,'hour hand',[.018,.105,.015],[0,.045,.04],mats.dark,.003);
  const hand=box(clock,'minute hand',[.014,.14,.015],[.048,0,.042],mats.dark,.003);hand.rotation.z=-Math.PI/2;room.add(clock);
  // Sofa throw and a soft cushion; geometry is tied to the furniture location.
  box(room,'sofa cushion',[.34,.30,.11],[1.58,.54,1.56],linen,.08);
  box(room,'sofa throw',[.24,.045,.46],[2.40,.43,1.66],clay,.025);
  // Simple keepsakes created for FitFuel, not raster illustrations.
  const books=new THREE.Group();books.name='collectible books';books.position.set(.86,1.48,-2.16);books.visible=false;
  for(let i=0;i<3;i++){
    box(books,'journal pages',[.28,.045,.20],[0,.03+i*.065,0],mats.cream,.004);
    box(books,'journal cover',[.30,.012,.22],[0,.058+i*.065,0],i===1?clay:sage,.004);
  }
  const cup=new THREE.Mesh(new THREE.CylinderGeometry(.055,.045,.11,16),linen);cup.position.set(.20,.06,.01);books.add(cup);
  const handle=new THREE.Mesh(new THREE.TorusGeometry(.037,.01,8,16),linen);handle.position.set(.26,.067,.01);books.add(handle);room.add(books);
  const frame=new THREE.Group();frame.name='collectible frame';frame.position.set(2.05,1.48,-2.16);frame.visible=false;
  box(frame,'postcard frame',[.35,.29,.05],[0,.15,0],mats.wood,.015);
  box(frame,'postcard paper',[.29,.23,.01],[0,.15,.031],mats.cream,.005);
  const hill=new THREE.Mesh(new THREE.ConeGeometry(.11,.13,3),sage);hill.scale.z=.08;hill.position.set(-.035,.125,.044);frame.add(hill);
  const sun=new THREE.Mesh(new THREE.CircleGeometry(.028,16),clay);sun.position.set(.080,.215,.046);frame.add(sun);room.add(frame);
}

export function setRoomCollectibles(room,ids) {
  for(const id of ['plant','books','lamp','frame']) {const object=room.getObjectByName('collectible '+id);if(object)object.visible=ids.includes(id);}
}
