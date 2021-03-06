import './style.css'
import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import './components/AnimationControls';
import './components/ProjectItems';
import './components/WorkExperience';
// Used to play/pause using controls in UI

let animationId;
let audio;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x91d1ff);

// Camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);

var clock = new THREE.Clock();
var angle = 0;
var angularSpeed = THREE.Math.degToRad(20);
var delta = 0;
var radius = 80;

// Light

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
ambientLight.intensity = 1;
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 2, 200, 0.4472);
spotLight.position.set(10, 10, 100);
scene.add(spotLight);

const pointLight = new THREE.PointLight(0x008000);
pointLight.position.set(5, 10, 100)
pointLight.intensity = 2;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xFF0000);
pointLight2.position.set(5, -10, 100)
pointLight2.intensity = 1;
scene.add(pointLight2);

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#main-content'),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Orbit Controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = 0; // radians
controls.maxPolarAngle = Math.PI; // radians
controls.enableZoom = false;
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI;

// Main models

const loader = new GLTFLoader();
let floatingIsland;
loadModel('mystic_stones_of_the_sky/scene.gltf').then(model => {
    floatingIsland = model;
    scene.add(floatingIsland);
});

// Geometries

const crystalGeometry = new THREE.OctahedronGeometry(6, 0);
// const whiteBasicMaterial = new THREE.MeshStandardMaterial({
//     color: 0xFFFFFF,
//     metalness: 0.5,
//     roughness: 0.5,
//     shininess: 0.5,
//     transparent: true,
//     opacity: 0.8
// });
const whiteBasicMaterial = new THREE.MeshNormalMaterial();

const sphereGeometry = new THREE.SphereGeometry(6, 32, 16);
const torusGeometry = new THREE.TorusGeometry(4, 1, 16, 60);

const createMeshRandomAndRotate = (geometry, material) => {
    const mesh = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
    mesh.position.set(x, y, z);

    const [rx, ry, rz] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1));
    mesh.rotation.set(rx, ry, rz);

    scene.add(mesh);
}

Array(100).fill().map(() => createMeshRandomAndRotate(crystalGeometry, whiteBasicMaterial));
Array(100).fill().map(() => createMeshRandomAndRotate(sphereGeometry, whiteBasicMaterial));
Array(100).fill().map(() => createMeshRandomAndRotate(torusGeometry, whiteBasicMaterial));

//Animation

const animate = () => {
    animationId = requestAnimationFrame(animate);
    delta = clock.getDelta();
    camera.position.x = Math.cos(angle) * radius;
    camera.position.z = Math.sin(angle) * radius + 40;
    angle += angularSpeed * delta;
    camera.lookAt(floatingIsland ? floatingIsland.position : new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
}

animate();

// Resize event listener

window.addEventListener('resize', onWindowResize, true);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

// Load models generic function

function loadModel(path) {
    return new Promise((resolve, reject) => {
        loader.load(path, function (gltf) {
            resolve(gltf.scene);
        }, undefined, function (error) {
            console.error('model load error', error);
            reject();
        });
    })

}

// Used preloader to enable audio at the start of experience

let preloader = document.querySelector('.preloader');
preloader.onclick = enterExperience;

// Init function 

function enterExperience(e) {

    e.target.style.display = 'none'

    audio = new Audio('./music.mp3');
    audio.currentTime = 15;
    audio.play();
    audio.loop = true;

    setTimeout(() => {
        document.getElementsByTagName('main')[0].style.display = 'block';
        // document.getElementsByTagName('main')[0].style.width = '100%';
        toggleAnimation();
        loadCustomElement('c-animation-controls', null, document.querySelector('main'));
    }, 5000);
}

// Toggle controls

const toggleAnimation = () => animationId ? (cancelAnimationFrame(animationId),
    animationId = null) : animate();

const toggleAudio = () => audio.paused ? audio.play() : audio.pause();

// Used to load any defined custom html element. Takes two params name, container to query upon

function loadCustomElement(name, attributes, container = document.body) {
    const game = document.createElement(name);
    attributes?.forEach(attribute => {
        game.setAttribute(attribute.key, attribute.value);
    })
    container.appendChild(game);
}

// Event Listeners

document.addEventListener('animate', () => toggleAnimation());
document.addEventListener('audio', () => toggleAudio())

// Show/Hide Projects Logic