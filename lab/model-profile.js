// Replace this mapping when a new rig is supplied. Gameplay never depends on a mesh filename.
export const modelProfile = Object.freeze({
  url: './assets/human.glb',
  clips: { Idle: 'Idle', Walk: 'Walk', Sit: 'Sit', Curl: 'Curl' },
  hands: ['LeftHand', 'RightHand'],
  shoulders: ['LeftArm', 'RightArm'],
  feet: ['LeftFoot', 'RightFoot'],
  shirtMaterial: 'FitFuel_Shirt'
});
