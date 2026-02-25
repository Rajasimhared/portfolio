import { certifications } from "../configs/configs";

function certificationsTemplate() {
  const coreTemplate = document.createElement("template");

  const listItems = certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("\n            ");

  coreTemplate.innerHTML = `
      <section id="certifications">
        <h2 class="my-4">
          <i class="fa fa-certificate" style="font-size: 32px; padding-right: 1rem"></i>
          Certifications
        </h2>
        <div class="wrapper-container">
          <ul style="font-size: large">
            ${listItems}
          </ul>
        </div>
      </section>
    `;
  return coreTemplate.content;
}

class Certifications extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(certificationsTemplate());
  }
}

customElements.define("c-certifications", Certifications);
