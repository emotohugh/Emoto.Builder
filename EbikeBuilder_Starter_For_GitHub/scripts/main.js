import * as THREE from 'https://cdn.skypack.dev/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bikeCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const bike = new THREE.Mesh(geometry, material);
scene.add(bike);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  bike.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();