import {
    experiences
} from '../configs/configs';

function createTemplate(work, alignment) {
    const coreTemplate = document.createElement('template');

    coreTemplate.innerHTML = `
        <style>
            h2{
                margin-top:0;
            }
        </style>
      
        <div class="${alignment === 'left' ? 'l-event' : 'r-event'} event col-md-6 col-sm-6 col-xs-8 ">
            <div class="event-body">
                <div class="event-content">
                    <h2>${work.company}</h2>
                    <h5 class="text-primary text-left">${work.title}</h5>
                    <span class="text-muted text-left" style="display:block; margin: 0">
                        <small>${work.duration}</small>
                    </span>
                    <br />
                    <div>
                        ${work.workDescription}
                    </div>
                </div>
            </div>
            <div class="logo-${alignment}"><img src=${work.logo}/> </div>
        </div>
        <div class="row">
        </div>
    `;
    return coreTemplate.content
}

class WorkExperience extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        experiences.forEach((experience, index) => {
            this.appendChild(createTemplate(experience, index % 2 ? 'right' : 'left'));
        });

    }
}

customElements.define('c-work-experience', WorkExperience);