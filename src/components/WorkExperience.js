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
        } event w-11/12 md:w-6/12">
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
            <div class="${logoClass}" style="order:0"><a href="${work.link}" target="_blank"><img src="${work.logo}" alt="${work.company} logo"/> </a></div>
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

class ExperienceSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section id="experience-timeline">
        <h2>
          <i
            class="fa fa-briefcase"
            style="font-size: 32px; padding-right: 1rem"
          ></i>
          Work Experience
        </h2>
        <div class="container">
          <div class="row">
            <div class="timeline-top">
              <div class="top-label"><span>Present</span></div>
            </div>
            <div class="timeline-block">
              <div class="timeline-events">
                <br />
                <c-work-experience></c-work-experience>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    this.appendChild(template.content);
  }
}

customElements.define("c-experience-section", ExperienceSection);
