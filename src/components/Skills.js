import { skillSections } from "../configs/configs";

class Skills extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section id="skills">
        <h2 class="my-4">
          <i class="fa fa-cogs" style="font-size: 32px; padding-right: 1rem"></i>
          Skills
        </h2>
        <div class="wrapper-container-skills">
          <div class="journal-block">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-simple" id="skills-grid"></div>
          </div>
        </div>
      </section>
    `;

    this.appendChild(template.content);
    const grid = this.querySelector('#skills-grid');
    if (grid) {
      grid.appendChild(this.renderSkills());
    }
  }

  renderSkills() {
    const frag = document.createDocumentFragment();
    skillSections.forEach((section) => {
      const card = document.createElement('div');
      card.className = 'rounded-lg border border-gray-200 bg-white p-4';

      const title = document.createElement('h3');
      title.className = 'font-semibold text-gray-900 mb-2';
      title.textContent = section.title;
      card.appendChild(title);

      const list = document.createElement('ul');
      list.className = 'space-y-1 text-gray-800 text-sm md:text-base';

      if (section.items) {
        section.items.forEach((it) => {
          const li = document.createElement('li');
          const strong = document.createElement('span');
          strong.className = 'font-semibold';
          strong.textContent = `${it.label}:`;
          li.appendChild(strong);
          li.append(` ${it.text}`);
          list.appendChild(li);
        });
      }

      if (section.list) {
        section.list.forEach((text) => {
          const li = document.createElement('li');
          li.textContent = text;
          list.appendChild(li);
        });
      }

      card.appendChild(list);
      frag.appendChild(card);
    });
    return frag;
  }
}

customElements.define("c-skills", Skills);


