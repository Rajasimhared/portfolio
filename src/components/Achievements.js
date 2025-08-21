function achievementsTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
      <section id="achievements">
        <h2 class="my-4">
          <i class="fa-solid fa-trophy" style="font-size: 32px; padding-right: 1rem"></i>
          Achievements
        </h2>
        <div class="wrapper-container">
          <ul style="font-size: large">
            <li>Attained the <strong>highest performance rating</strong> in Salesforce org during the last fiscal year.</li>
            <li>Honored with the <strong>Trailblazer Award</strong>, a quarterly recognition for a select group of top performers at Salesforce.</li>
            <li>Selected for the <strong>5th CSA Undergraduate Summer School</strong> at IISc, Bengaluru.</li>
            <li>Successfully mentored multiple college students to secure SDE roles via the <strong>Mentor Together Platform</strong>.</li>
            <li>Served as <strong>Chairperson</strong> of the NIE IEEE Student Branch, engaging over 450 members through technical initiatives.</li>
          </ul>
        </div>
      </section>
    `;
  return coreTemplate.content;
}

class Achievements extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(achievementsTemplate());
  }
}

customElements.define("c-achievements", Achievements);


