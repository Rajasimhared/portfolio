import { educations } from "../configs/configs";

function educationItemTemplate(item) {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="wrapper-container">
      <h3>
        <a class="font-medium text-slate-800 underline dark:text-slate-800 hover:no-underline" href="${item.url}" target="_blank" rel="noopener noreferrer">
          ${item.institutionName}
        </a>
      </h3>
      ${item.degree ? `<div><b>${item.degree}</b></div>` : ""}
      ${item.scoreLabel && item.scoreValue ? `<div>${item.scoreLabel}: ${item.scoreValue}</div>` : ""}
      <div>${item.period}</div>
    </div>
  `;
  return template.content;
}

class Education extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const container = document.createElement("div");
    container.className = "wrapper-container";

    const titleTemplate = document.createElement("template");
    titleTemplate.innerHTML = `
      <section id="education">
        <h2 class="my-4">
          <i class="fa fa-graduation-cap" style="font-size: 32px; padding-right: 1rem"></i>
          Education
        </h2>
        <br />
      </section>
    `;

    const section = titleTemplate.content.firstElementChild;

    educations.forEach((e, index) => {
      section.appendChild(educationItemTemplate(e));
      if (index < educations.length - 1) {
        const hr = document.createElement("hr");
        hr.className = "my-4";
        section.appendChild(hr);
      }
    });

    this.appendChild(section);
  }
}

customElements.define("c-education", Education);


