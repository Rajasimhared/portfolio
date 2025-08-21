import "./mainContent.css";

function introTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
        <main class="container ">
      <c-experience-section></c-experience-section>
      <br />
      <!-- <section id="certifications">
        <h2>
          <i
            class="fa fa-certificate"
            style="font-size: 32px; padding-right: 1rem"
          ></i
          >Certifications
        </h2>
        <div class="wrapper-container">
          <div class="journal-block">
            <ul style="font-size: large">
              <li>Omnistudio Platform Developer</li>
              <li>Javascript Developer I</li>
              <li>Trailhead Ranger</li>
            </ul>
          </div>
        </div>
      </section>
      <hr /> -->
      <c-skills></c-skills>
      <br />
      <c-achievements></c-achievements>
      <hr />
      <c-education></c-education>
      <hr />
      <section id="projects">
        <h2 class="my-4">
          <i
            class="fa-brands fa-github"
            style="font-size: 32px; padding-right: 1rem"
          ></i>
          Personal Projects
        </h2>
        <br />
        <c-project-item></c-project-item>
      </section>
      <footer class="text-center">
        <div class="social">
          Follow Me:
          <a href="https://codepen.io/rajasimhared" target="_blank" rel="noopener noreferrer">
            <abbr title="CodePen"><i class="fa-brands fa-codepen follow"></i></abbr>
          </a>
          <a href="https://github.com/Rajasimhared" target="_blank" rel="noopener noreferrer">
            <abbr title="GitHub"><i class="fa-brands fa-github"></i></abbr>
          </a>
        </div>
      </footer>
    </main>

    `;
  return coreTemplate.content;
}

class MainContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(introTemplate());
    const footer = this.querySelector("footer");
    this._onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
      if (footer) {
        footer.classList.toggle("footer-up", atBottom);
      }
    };
    window.addEventListener("scroll", this._onScroll, { passive: true });
    this._onScroll();
  }

  disconnectedCallback() {
    if (this._onScroll) {
      window.removeEventListener("scroll", this._onScroll);
    }
  }
}

customElements.define("c-main-content", MainContent);
