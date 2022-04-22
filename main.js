import './style.css'
import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x90AACB);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.setZ(100);

//Light
// const ambientLight = new THREE.AmbientLight(0xFF0000);
// ambientLight.intensity = 1;
// scene.add(ambientLight);

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
    canvas: document.querySelector('#main-content')
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


//Main models
const loader = new GLTFLoader();
let floatingIsland;
loader.load('mystic_stones_of_the_sky/scene.gltf', function(gltf) {

    floatingIsland = gltf.scene
    scene.add(floatingIsland);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = 0; // radians
    controls.maxPolarAngle = Math.PI; // radians
    controls.enableZoom = false;

}, undefined, function(error) {
    console.error('model load error', error);
});


// Geometries
const crystalGeometry = new THREE.OctahedronGeometry(6, 0);
const whiteBasicMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.5,
    roughness: 0.5,
    shininess: 0.5,
    transparent: true,
    opacity: 0.8
});

const sphereGeometry = new THREE.SphereGeometry(6, 32, 16);
const torusGeometry = new THREE.TorusGeometry(4, 1, 16, 60);

const createMeshRandomAndRotate = (geometry, material) => {
    const mesh = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    mesh.position.set(x, y, z);

    const [rx, ry, rz] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1));
    mesh.rotation.set(rx, ry, rz);

    scene.add(mesh);
}

Array(20).fill().map(() => createMeshRandomAndRotate(crystalGeometry, whiteBasicMaterial));
Array(20).fill().map(() => createMeshRandomAndRotate(sphereGeometry, whiteBasicMaterial));
Array(10).fill().map(() => createMeshRandomAndRotate(torusGeometry, whiteBasicMaterial));

//Animation
const animate = () => {

    requestAnimationFrame(animate);
    floatingIsland && (floatingIsland.rotation.y += 0.01);
    renderer.render(scene, camera);

}

animate();

const moveCamera = () => {
    const getTop = document.body.getBoundingClientRect().top;
    console.log(getTop);
    camera.position.z = getTop * 0.008 + 100;
    camera.position.y = getTop * 0.008;
    camera.rotation.x = getTop * 0.00095;
}

document.body.onscroll = moveCamera;