import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
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
    this._rafId = null;
    this._mobileBanner = null;
  }

  connectedCallback() {
    this.appendChild(createTemplate());
    this.showMobileHeadsUpIfNeeded();
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.loadStars();
    this.animate();

    window.addEventListener("resize", this.onWindowResize, false);

    const knowMore = this.querySelector("#know-more");
    if (knowMore) {
      knowMore.addEventListener("click", (e) => enterExperience(e));
    }
  }

  showMobileHeadsUpIfNeeded = () => {
    const isMobileViewport = window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
    if (!isMobileViewport) return;

    // Avoid duplicate banners on re-renders/HMR
    if (document.getElementById("mobile-heads-up-banner")) return;

    const banner = document.createElement("div");
    banner.id = "mobile-heads-up-banner";
    banner.className = "fixed top-0 left-0 right-0 z-50 bg-amber-100 text-amber-900 border-b border-amber-300 px-4 py-2 text-sm md:text-base flex items-center justify-center";
    banner.innerHTML = `
      <span class=\"mr-8\">Heads up! The full experience looks way better on a desktop screen.</span>
      <button aria-label=\"Dismiss\" class=\"absolute right-7 top-1/2 -translate-y-1/2 text-amber-900 hover:text-amber-700\">&times;</button>
    `;
    const closeBtn = banner.querySelector("button");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
      });
    }
    document.body.appendChild(banner);
    this._mobileBanner = banner;
  };

  loadStars = () => {
    const sprite = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}star.png`);

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

    document.addEventListener("mousemove", this.onMouseMove, false);
  };

  onMouseMove = (event) => {
    this.mouse.x = event.clientX - this.windowHalf.x;
    this.mouse.y = event.clientY - this.windowHalf.y;
  };

  onWindowResize = () => {
    this.windowHalf.set(window.innerWidth / 2, window.innerHeight / 2);
    if (this.camera && this.camera.isPerspectiveCamera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
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
    this._rafId = requestAnimationFrame(this.animate);
  };

  disconnectedCallback() {
    document.removeEventListener("mousemove", this.onMouseMove, false);
    window.removeEventListener("resize", this.onWindowResize, false);
    if (this._rafId) cancelAnimationFrame(this._rafId);
    if (this._mobileBanner && this._mobileBanner.parentNode) {
      this._mobileBanner.parentNode.removeChild(this._mobileBanner);
      this._mobileBanner = null;
    }
  }
}

customElements.define("c-landing-page", LandingPage);
