import {
    projects
} from '../configs/configs';

function createTemplate(project) {
    const headerTemplate = document.createElement('template');

    headerTemplate.innerHTML = `
        <style>
          
        </style>
        <div class="wrapper-container">
            <div class="project-item">
                <iframe src=${
                    project.projectLink
                }
                name = "targetframe"
                allowTransparency = "true"
                frameborder="0" 
                id=${project.id} 
                allow="fullscreen">
                </iframe>
                <div class="project-overlay" id="_${project.id}">
                    <i class="fa fa-window-close"></i>
                </div>
                <div class="project-item-content">
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <a href=${project.githubLink} target="_blank">Github link</a>
                </div>
            </div>
    
        </div>
    `;
    return headerTemplate.content
}

class ProjectItems extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(projects);
        projects.forEach(project => {
            this.appendChild(createTemplate(project));
        })

        Array.from(document.querySelectorAll('.project-overlay')).forEach((item) => {
            item.addEventListener('click', (e) => {
                item.classList.toggle('project-close');
                item.classList.toggle('project-overlay');
                let project = document.querySelector(`#${item.id.slice(1,item.id.length)}`);
                e.currentTarget.parentElement.classList.toggle('flex-column');
                project.classList.toggle('project-expand');
            });
        });

        // let tryouts = document.querySelectorAll('.project-overlay');

        // tryouts.onclick = (e) => {
        //     console.log(e.target);
        // tryouts.classList.toggle('project-close');
        // tryouts.classList.toggle('project-overlay');
        // let project = document.querySelector('#project-frame');
        // let projItem = document.querySelector('.project-item');
        // projItem.classList.toggle('flex-column');
        // project.classList.toggle('project-expand');
        // }

    }
}

customElements.define('c-project-item', ProjectItems);