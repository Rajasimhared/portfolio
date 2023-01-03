import { projects } from "../configs/configs";

function createTemplate(project) {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
        <div class="wrapper-container">
            <div class="project-item">
                <iframe src=${project.projectLink}
                name = "targetframe"
                allowTransparency = "true"
                frameborder="0" 
                id=${project.id} 
                allow="fullscreen"
                scrolling="no"
                >
                </iframe>
                <div class="project-overlay" id="_${project.id}">
                    <i class="fa fa-window-close"></i>
                </div>
                <div class="project-item-content">
                    <h2 class="funky">${project.name}</h2>
                    <p>${project.description}</p>
                    <a href=${project.githubLink} target="_blank">Github link</a>
                </div>
            </div>
    
        </div>
    `;
  return coreTemplate.content;
}

class ProjectItems extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    projects.forEach((project) => {
      this.appendChild(createTemplate(project));
    });

    Array.from(document.querySelectorAll(".project-overlay")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          let navBar = document.querySelector("c-nav-bar");
          navBar.classList.toggle("hidden");
          item.classList.toggle("project-close");
          item.classList.toggle("project-overlay");
          let project = document.querySelector(
            `#${item.id.slice(1, item.id.length)}`
          );
          e.currentTarget.parentElement.classList.toggle("flex-column");
          project.classList.toggle("project-expand");
          document.body.classList.toggle("disable-scroll");
        });
      }
    );
  }
}

customElements.define("c-project-item", ProjectItems);
