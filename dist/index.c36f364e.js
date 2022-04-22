const scene = new THREE.Scene();
scene.background = new THREE.Color(13675506);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 5;
const loader = new THREE.GLTFLoader();
let floatingIsland;
loader.load('mystic_stones_of_the_sky/scene.gltf', function(gltf) {
    // loader.load('assets/fantasy_eco_city/scene.gltf', function(gltf) {
    const ambientLight = new THREE.AmbientLight(16776670);
    ambientLight.intensity = 2;
    scene.add(ambientLight);
    floatingIsland = gltf.scene;
    scene.add(floatingIsland);
    renderer.render(scene, camera);
}, undefined, function(error) {
    console.error('model load error', error);
});
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// const controls = new THREE.OrbitControls(camera, floatingIsland);
// controls.addEventListener('change', render); // use if there is no animation loop
// controls.minDistance = 2;
// controls.maxDistance = 10;
// controls.target.set(0, 0, -0.2);
// controls.update();
function animate() {
    requestAnimationFrame(animate);
    // floatingIsland.rotation.x += 0.01;
    floatingIsland.rotation.y += 0.01;
    sphere.position.y += 0.01;
    renderer.render(scene, camera);
} // animate();

//# sourceMappingURL=index.c36f364e.js.map
