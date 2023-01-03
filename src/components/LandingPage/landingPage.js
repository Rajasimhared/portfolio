import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./landingPage.css";
import { enterExperience } from "../../main";

function createTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
        <canvas id="main-content"></canvas>
        <div class="flex items-center justify-center h-screen flex-col w-full">
          <c-my-intro></c-my-intro>
          <button class="z-[2] my-10" id="know-more">Know More...</button>
        </div>
    `;
  return coreTemplate.content;
}

class LandingPage extends HTMLElement {
  constructor() {
    super();
    this.scene = {};
    this.camera = {};
    this.renderer = {};
    this.starsGeo = {};
    this.stars = {};
    this.mouse = new THREE.Vector2();
    this.target = new THREE.Vector2();
    this.windowHalf = new THREE.Vector2(
      window.innerWidth / 2,
      window.innerHeight / 2
    );
  }

  connectedCallback() {
    this.appendChild(createTemplate());
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // this.camera.position.z = 0;
    // this.camera.position.x = Math.PI / 2;
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#main-content"),
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.loadStars();
    this.animate();

    let knowMore = this.querySelector("#know-more");
    knowMore.onclick = (e) => enterExperience(e);
  }

  loadStars = () => {
    let sprite = new THREE.TextureLoader().load("/star.png");

    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(500);
      const y = THREE.MathUtils.randFloatSpread(500);
      const z = THREE.MathUtils.randFloatSpread(500);
      vertices.push(x, y, z);
    }

    this.starsGeo = new THREE.BufferGeometry();
    this.starsGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      map: sprite,
      transparent: true,
    });

    this.stars = new THREE.Points(this.starsGeo, material);
    this.scene.add(this.stars);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.minPolarAngle = 0; // radians
    controls.maxPolarAngle = Math.PI; // radians
    controls.enableZoom = false;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    document.addEventListener("mousemove", this.onMouseMove, false);
  };

  onMouseMove = (event) => {
    this.mouse.x = event.clientX - this.windowHalf.x;
    this.mouse.y = event.clientY - this.windowHalf.x;
  };

  animate = () => {
    this.target.x = (1 - this.mouse.x) * 0.002;
    this.target.y = (1 - this.mouse.y) * 0.002;

    // this.camera.rotation.x += 0.05 * (this.target.y - this.camera.rotation.x);
    this.camera.rotation.y += 0.05 * (this.target.x - this.camera.rotation.y);

    const positions = this.starsGeo.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const v = new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      );
      positions[i + 2] = v.z + 1.5;
      if (v.z > 300) {
        positions[i + 2] = -200;
      }
    }
    this.starsGeo.attributes.position.needsUpdate = true;
    // this.stars.rotation.y += 0.002;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  };
}

customElements.define("c-landing-page", LandingPage);
