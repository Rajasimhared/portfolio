import "./myIntro.css";
import Typed from "typed.js";

function introTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
       <div class="relative grid grid-cols-1 md:grid-cols-2 gap-4 z-[2] max-w-lg mx-auto shadow-md overflow-hidden md:max-w-5xl bg-slate-800 rounded-xl p-6 md:p-8">
       <div class="flex flex-col flex items-center justify-evenly">
         <img
          src="${import.meta.env.BASE_URL}Rajasimha_Reddy.jpg"
          width="200"
          height="200"
          class="profile-pic"
          alt="Rajasimha Reddy Pic"
        />
        <span>
        <strong id="my-description" style="font-size: 2rem"></strong>
        </span>
       </div>
      <div class="flex content-center flex-col justify-center px-2 md:px-0">
      <h1 class="intro-title">I'm Rajasimha Reddy</h1>
      <br>
      <p class="text-justify">
Lead Salesforce Engineer with nearly 8 years of experience
delivering complex enterprise implementations. Skilled in
translating business requirements into scalable architectures
and reusable frameworks, while driving technical strategy
and cross-functional collaboration to build high-performance,
industry-aligned solutions.</div>
    `;
  return coreTemplate.content;
}

class MyIntro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(introTemplate());
    var options = {
      strings: ["Lead Salesforce Developer", "OmniStudio & CPQ Expert", "Frontend Developer", "Problem Solver"],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      backDelay: 700,
      backSpeed: 50,
    };

    new Typed("#my-description", options);
  }
}

customElements.define("c-my-intro", MyIntro);
