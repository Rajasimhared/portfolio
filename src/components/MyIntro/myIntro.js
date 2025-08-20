import "./myIntro.css";
import Typed from "typed.js";

function introTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
       <div class="relative grid grid-cols-2 gap-4 z-[2] max-w-lg mx-auto shadow-md overflow-hidden md:max-w-5xl bg-slate-800 rounded-xl p-8">
       <div class="flex flex-col flex items-center justify-evenly">
         <img
          src="${import.meta.env.BASE_URL}Rajasimha_Reddy.jpg"
          width="200"
          heigth="200"
          class="profile-pic"
          alt="Rajasimha Reddy Pic"
        />
        <span>
        <strong id="my-description" style="font-size: 2rem"></strong>
        </span>
       </div>
      <div class="flex content-center flex-col justify-center">
      <h1>I'm Rajasimha Reddy</h1>
      <br>
      <p class="text-justify">
        Frontend Engineer with hands-on expertise successfully implementing
        multiple b2c applications with several web technologies. In-depth
        knowledge of end-to-end software development lifecycle, including
        business analysis, architecture, design, development, testing, and
        deployment.
      </p>
      </div>
       </div>
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
      strings: ["Software Developer", "Web Technophile", "Frontend Expert"],
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
