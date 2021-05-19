import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127/build/three.module.js';

const boxWidth = 10;
const boxHeight = .1;
const boxDepth = 10;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

const cube = new THREE.Mesh(geometry, material);

export default cube