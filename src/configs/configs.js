const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    id: "tryouts",
    name: "Tryouts",
    description:
      "Web based chat application that has features like login, signup with profile pic, search friends, create chat, create a group chat, remove members from group chat",
    githubLink: "https://github.com/Rajasimhared/tryouts",
    projectLink: "https://tryouts-nu.vercel.app",
  },
  {
    id: "memory-game",
    name: "Memory game",
    description:
      "Remember in our early days of mobile revolution, we had this memory game with two dimensionl grid that had multiple small boxes with images. This grid would flip after some time and we have to match the set of similar images by clicking on these boxes.<br>    I have recreated this experience for mobile and desktop just for fun. It is developed using the web components.<br>Additionally, you can try to increase the complexity by choosing your own grid size.",
    githubLink: "https://github.com/Rajasimhared/memory-game",
    projectLink: "https://dynamic-memory-game.surge.sh",
  },
  {
    id: "memory-game-2",
    name: "Memory Game inspired by F1",
    description:
      "Inspired by the preparation games that F1 drivers play in order to improve their concentration, focus and coordination, I built this game containing one dimensional blocks. On start, player has to memorise the block blink sequence and select the sequence once the blinking stops. The score would go up and also the frequency of blinks would go up as the player succeeds.<br>We show the score and high score on the top of the screen.",
    githubLink: "https://github.com/Rajasimhared/memory-game-2",
    projectLink: "https://memory-game-clicks.surge.sh",
  },
  {
    id: "online-editor",
    name: "Online Editor",
    description:
      "Custom documents manager which allows to create, edit documents by uploading pdf template and download the final draft in docx or pdf format.<br>This was developed for a specific requirement as part of our freelance work",
    githubLink: "https://github.com/Rajasimhared/online-editor",
    projectLink: "https://delonline-editor.herokuapp.com",
  },
  {
    id: "roll-ball",
    name: "Unity Roll a Ball",
    description:
      "While exploring unity 3D I have build this simple game that involves different geometries, textures, laws of physics. <br>Build in the unity application was ported to web using the webGL renderer.",
    githubLink: "",
    projectLink: "https://webgl-rollaball.surge.sh",
  },
];

const experiences = [
  {
    title: "Senior Technical Consultant",
    company: "Salesforce, Inc.",
    duration: "January 2020 - Present",
    workDescription: `
    <ul>
        <li><strong>Led end-to-end Salesforce implementations</strong> (Experience Cloud, OmniStudio, EPC, CPQ, Digital Commerce, Slack-SFDC integrations) driving digital transformation for telecom and enterprise clients.</li>

        <li>Designed and delivered custom <strong>Apex, LWC, and OmniStudio solutions</strong>, including high-performance CPQ APIs that outperformed OOTB APIs by 3x.</li>

        <li>Conducted code reviews, enforced best practices, and assured performance using <strong>JMeter and Blazemeter</strong> to ensure scalability and maintainability.</li>

        <li><strong>Mentored and coached</strong> junior developers through workshops, peer reviews, and technical guidance, accelerating ramp-up and delivery quality.</li>

        <li>Architected and implemented complex integrations (TMF APIs, DigiCom APIs, Slack-SFDC, Node.js middleware) ensuring seamless interoperability with external systems.</li>
        
        <li>Collaborated with cross-functional stakeholders to translate business requirements into scalable technical designs, enabling faster MVP delivery and adoption.</li>

        <li>Established and optimized DevOps pipelines (Heroku, GitLab CI/CD) and contributed to release adoption, improving deployment speed and reducing production issues.</li>

        <li>Delivered <strong>Partner Portal for Amazon</strong> on Salesforce + Slack, reducing deal closure timelines from weeks to minutes through automation and integration.</li>

        <li>Authored and maintained technical documentation, design specifications, and deployment guides to ensure knowledge transfer and smooth handoffs.</li>

        <li>Optimized Webpack bundles to reduce build time from <strong>120s to 20s (6x improvement)</strong>, boosting developer productivity.</li>

        <li>Developed a <strong>React Chrome extension</strong> for validating best practices in an internal framework, adopted by 500+ developers.</li>
        
    </ul>
    `,
    logo: asset("salesforce-logo.svg"),
    link: "https://www.salesforce.com/"
  },
  {
    title: "Software Development Engineer",
    company: "Youplus, Inc.",
    duration: "July 2018 - December 2019",
    workDescription: `
        <ul>
        <li>Built end-to-end portal for customers to order/review videos, theme widgets, and manage thousands of pages efficiently.</li>

        <li>Optimized widgets using <strong>bit.dev</strong>, reducing bundle size by <strong>50%</strong> (50-120KB each).</li>

        <li>Developed in-house analytics via <strong>HOC</strong> to track user interactions (play, pause, clicks).</li>

        <li>Designed Operation Portal to improve AI accuracy by feeding back corrected results.</li>

        <li>Part of  <strong>SWAT team</strong>, delivering quick POCs for new ideas.</li>

        <li>Awarded <strong>Excellence Award</strong> (Oct 2018).</li>

        <li>Tech stack: <strong>React.js, Redux, Vanilla JS.</strong></li>
        </ul>
    `,
    logo: asset("youplus-logo.svg"),
    link: "https://web.archive.org/web/20190528064445/https://youplus.com"
  },
  {
    title: "Frontend Intern",
    company: "Scapic (Acquired by Flipkart)",
    duration: "January 2018 - May 2018",
    workDescription: `
        <ul>
        <li>
            Built <strong>Virtual Reality</strong> experiences for businesses
            like <strong>Walmart,
                Myntra, Puma</strong> using <strong>React
                A-frame</strong>
        </li>
        <li>
            Developed <strong>login screen, forgot password flow, error
                handling</strong>
            for multiple login options. </li>
        <li>
            Created <strong>end-to-end automation tests</strong> with Cypress, enabling early detection of regression bugs. <a
                href="https://web.archive.org/web/20190629135059/https://scapic.com/"
                target="_blank" rel="noopener noreferrer">[link]</a>
        </li>

    </ul>
    `,
    logo: asset("scapic-logo.svg"),
    link: "https://web.archive.org/web/20190629135059/https://scapic.com/"
  },
  {
    title: "Summer School Intern",
    company: "Indian Institute of Science",
    duration: "July 2017",
    workDescription: `
        <ul>
        <li>
        Selected from thousands of applicants to attend the <strong>Undergraduate Summer
                School </strong> program hosted by the Department of Computer Science and Automation at IISc.
           <a
                href="https://drive.google.com/file/d/1AGdIg2l5Tug_8rAp3PkATp-nTq3rFD6H/view"
                target="_blank" rel="noopener noreferrer">[Link]</a>.
        </li>
        <li>
           Gained exposure to cutting-edge research in <strong>Machine Learning, AI, NLP, Probability, and Theory of Computation</strong>.
        </li>
        <li>
            I was awarded a <strong>prize</strong> in the closing quiz competition.
        </li>
    </ul>
    `,
    logo: asset("iisc-logo.png"),
    link: "https://www.csa.iisc.ac.in/"
  },
];

const educations = [
  {
    institutionName: "The National Institute of Engineering, Mysuru, India",
    url: "https://nie.ac.in/",
    degree: "Bachelor of Engineering in Computer Science",
    scoreLabel: "CGPA",
    scoreValue: "8.59/10",
    period: "Aug 2014 - May 2018",
  },
  {
    institutionName: "Alva's PU College, Mudbidri, India",
    url: "https://alvaspucollege.org/",
    degree: "PCMC",
    scoreLabel: "Perc",
    scoreValue: "93.16/100",
    period: "June 2012 - May 2014",
  },
];

const skills = [
  {
    title: "Frontend",
    subtitle: "Javascript | React",
    items: [
      "HTML5, CSS3",
      "JavaScript",
      "Web components",
      "Lightning Web components",
      "React.js, Angular, Next.js, React Native",
      "Lit, PolymerJS",
      "Redux",
      "Bootstrap, Tailwind CSS",
      "Material UI, Ant Design",
      "Jest, Cypress",
    ],
  },
  {
    title: "Backend",
    subtitle: "Javascript | Salesforce",
    items: [
      "Apex",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Mongo DB",
      "Python Slack SDK",
    ],
  },
  {
    title: "Tools used",
    items: [
      "Vite, Webpack, Babel",
      "NPM, Yarn",
      "Git, Github",
      "Jira, Confluence",
      "Excalidraw, draw.io",
      "Github CI / CD, Vercel",
      "S3, CloudFront, Lambda, CloudWatch",
      "Jmeter, Postman",
    ],
  },
  {
    title: "AI Tools",
    items: [
      "Cursor, Claude, Gemini, ChatGPT",
      "NotebookLM, CursorAI",
      "Elements.cloud",
      "Agentforce for Developers",
    ],
  },
  {
    title: "Other skills",
    items: [
      "Mentoring",
      "Presentation skills",
      "Product demo",
      "Rapid prototype building",
    ],
  },
];

// Structured skills for the new Skills section UI - Salesforce first, then Frontend
const skillSections = [
  {
    title: "Salesforce & Platform",
    items: [
      { label: "Core", text: "Apex, SOQL, Visualforce, Lightning Web Components (LWC)" },
      { label: "OmniStudio & CPQ", text: "OmniStudio, CPQ, Experience Cloud, EPC, Web Components" },
      { label: "Integrations", text: "REST APIs, TMF APIs, Slack-SFDC, Design Patterns, Code Reviews" }
    ]
  },
  {
    title: "Frontend Development",
    items: [
      { label: "Languages", text: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
      { label: "Frameworks", text: "React, Angular, Next.js" },
      { label: "UI & Testing", text: "Web Components, LWC, Redux, Tailwind, Material UI, Jest, Cypress, React Testing Library" }
    ]
  },
  {
    title: "Backend & APIs",
    list: [
      "Apex, Node.js, Express.js, REST APIs, MongoDB, Python Slack SDK"
    ]
  },
  {
    title: "DevOps & Cloud",
    list: [
      "GitHub Actions, GitLab CI/CD, Vercel, Heroku, AWS (S3, CloudFront, Lambda, CloudWatch, DynamoDB)"
    ]
  },
  {
    title: "Testing & Collaboration",
    list: [
      "JMeter, Blazemeter, Postman, Webpack, Vite, Jira, Confluence, Draw.io, Excalidraw, Agile/Scrum"
    ]
  },
  {
    title: "AI & Emerging Tech",
    list: [
      "ChatGPT, Claude, CursorAI, Gemini, Agentforce, Elements.cloud"
    ]
  }
];

const certifications = [
  "Salesforce Certified Agentforce Specialist",
  "Salesforce Certified AI Associate",
  "Salesforce Certified Experience Cloud Consultant",
  "Salesforce Certified Omnistudio Developer",
  "Salesforce Certified Sales Cloud Consultant",
  "Salesforce Certified JavaScript Developer",
  "Salesforce Certified Platform Administrator",
  "Salesforce Certified Platform App Builder",
  "Salesforce Certified Platform Developer",
  "Salesforce Certified Platform Sharing and Visibility Architect",
  "Salesforce Certified Service Cloud Consultant",
];

export { projects, experiences, educations, skills, skillSections, certifications };
