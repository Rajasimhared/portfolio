import "./mainContent.css";

function introTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
        <main class="container ">
      <section id="experience-timeline">
        <h2>
          <i
            class="fa fa-briefcase"
            style="font-size: 32px; padding-right: 1rem"
          ></i
          >Work Experience
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
      <section id="skills">
        <h2 class="my-4">
          <i class="fa fa-cogs" style="font-size: 32px; padding-right: 1rem"></i
          >Skills
        </h2>
        <div class="wrapper-container">
          <div class="journal-block">
            <div class="flex flex-auto">
              <div class="flex-1">
                <div class="journal-info">
                  <div class="journal-txt">
                    <h3 class="funky"
                     
                    >
                      Frontend
                    </h3>
                    <p style="color: black">Javascript | React</p>
                    <br />
                    <p style="color: black; font-size: medium">Development</p>
                    <ul style="font-size: large">
                      <li>HTML5, CSS3</li>
                      <li>JavaScript</li>
                      <li>Web components</li>
                      <li>Lightning Web components</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>Lit</li>
                      <li>PolymerJS</li>
                      <li>Redux</li>
                      <li>Bootstrap</li>
                      <li>Material UI</li>
                    </ul>
                    <p style="color: black; font-size: medium">Unit testing</p>
                    <ul style="font-size: large">
                      <li>Jest</li>
                    </ul>
                    <p class="separator"></p>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <div class="journal-info">
                  <div class="journal-txt">
                    <h3
                     class="funky"
                    >
                      Backend
                    </h3>
                    <p style="color: black">Javascript | Salesforce</p>
                    <br />
                    <p style="color: black; font-size: medium">Development</p>
                    <ul style="font-size: large">
                      <li>Apex</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>REST APIs</li>
                      <li>Mongo DB</li>
                    </ul>
                    <p style="color: black; font-size: medium">Unit testing</p>
                    <ul style="font-size: large">
                      <li>Jest</li>
                    </ul>
                    <p class="separator"></p>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <div class="journal-info">
                  <div class="journal-txt">
                    <h3
                     class="funky"
                    >
                      Tools used
                    </h3>
                    <br />
                    <br />
                    <ul style="font-size: large">
                      <li>Webpack</li>
                      <li>Babel</li>
                      <li>NPM</li>
                      <li>Git / Github</li>
                      <li>jira, confluence</li>
                      <li>Excalidraw / draw.io</li>
                      <li>CI / CD tools</li>
                    </ul>
                    <p class="separator"></p>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <div class="journal-info">
                  <div class="journal-txt">
                    <h3 class="funky"                    >
                      Other skills
                    </h3>
                    <p style="color: black">Extra curriculum</p>
                    <br />
                    <ul style="font-size: large">
                      <li>Mentoring</li>
                      <li>Presentation skills</li>
                      <li>Product demo</li>
                      <li>Rapid prototype building</li>
                    </ul>
                    <p class="separator"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="education">
        <h2 class="my-4">
          <i
            class="fa fa-graduation-cap"
            style="font-size: 32px; padding-right: 1rem"
          ></i
          >Education
        </h2>
        <br />
        <div class="wrapper-container">
          <h3>
            <a class="font-medium text-slate-800 underline dark:text-slate-800 hover:no-underline" href="https://nie.ac.in/" target="_blank"
              >The National Institute of Engineering, Mysuru, India
            </a>
          </h3>
          Bachelor of <b>Engineering in Computer Science</b> CGPA: 8.59/10 Aug
          2014 - May 2018
          <hr class="my-4"/>
          <h3>
            <a class="font-medium text-slate-800 underline dark:text-slate-800 hover:no-underline" href="https://alvaspucollege.org/" target="_blank"
              >Alva's PU College, Mudbidri, India
            </a>
          </h3>
          <b>PCMC</b> Perc: 93.16/100 June 2012 - May 2014
        </div>
      </section>
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
          <a target="_blank" href="">
            <abbr title="Codepen"><i class="fa fa-codepen follow"></i></abbr>
          </a>
          <a href=""
            ><abbr title="Github" target="_blank"
              ><i class="fa fa-github"></i></abbr
          ></a>
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
  }
}

customElements.define("c-main-content", MainContent);
