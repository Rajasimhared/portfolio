import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x90AACB);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 50;

const loader = new GLTFLoader();
let floatingIsland;
loader.load('mystic_stones_of_the_sky/scene.gltf', function(gltf) {
    // loader.load('fantasy_eco_city/scene.gltf', function(gltf) {

    const ambientLight = new THREE.AmbientLight(0xFFFDDE);
    ambientLight.intensity = 2;
    scene.add(ambientLight);
    floatingIsland = gltf.scene
        // floatingIsland.position.z = 42;
        // floatingIsland.position.y = -10;
    scene.add(floatingIsland);
    // renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.addEventListener('change', () => {
    //     console.log('asddsaf')
    // }); // use if there is no animation loop
    // controls.minDistance = 2;
    // controls.maxDistance = 10;
    // controls.target.set(0, 0, -0.2);
    // controls.update();

}, undefined, function(error) {
    console.error('model load error', error);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    floatingIsland && (floatingIsland.rotation.y += 0.01);
    sphere.position.y += 0.01;
    renderer.render(scene, camera);
}
animate();