import { experiences } from "../configs/configs";

function createTemplate(work, alignment) {
  const coreTemplate = document.createElement("template");

  const logoClass = `logo-${alignment} ${
    work.company && work.company.toLowerCase().includes("scapic")
      ? "logo-white"
      : ""
  }`;

  coreTemplate.innerHTML = `
        <div class="${
          alignment === "left" ? "l-event" : "r-event"
        } event w-6/12">
            <div class="event-body">
                <div class="event-content">
                    <h3 class="funky">${work.company}</h3>
                    <h5 class="text-simple text-left">${work.title}</h5>
                    <span class="text-simple text-muted text-left" style="display:block; margin: 0">
                        <small>${work.duration}</small>
                    </span>
                    <br />
                    <div>
                        ${work.workDescription}
                    </div>
                </div>
            </div>
            <div class="${logoClass}"><img src="${work.logo}" alt="${work.company} logo"/> </div>
        </div>
        <div class="row">
        </div>
    `;
  return coreTemplate.content;
}

class WorkExperience extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    experiences.forEach((experience, index) => {
      this.appendChild(
        createTemplate(experience, index % 2 ? "right" : "left")
      );
    });
  }
}

customElements.define("c-work-experience", WorkExperience);
