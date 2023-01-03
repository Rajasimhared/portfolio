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
    duration: "Since January 2020",
    workDescription: `
    <ul>
        <li><strong>Buy Journeys:</strong>
            Built multiple anonymous user flow where user can choose and
            configure telecom offers. [
            <a href="https://m1-heroku.herokuapp.com/"
                target="_blank">link1</a>] [
            <a href="https://bt-nextgen-buy.herokuapp.com/"
                target="_blank">link2</a>] [ <a
                href="https://order-tracker.surge.sh/"
                target="_blank">link3</a>].
        </li>
        <li>
        <strong>OmniOut/OffPlatform:</strong> Designed, developed, and integrated application that 
        uses the OmniScripts/FlexCards outside Salesforce like in react, AEM, Sitecore, 
        etc. Bootstrapped a project using <strong>Vlocity Web Components, Webpack, Node.js</strong>
        for a buy journey.
        </li>
         <li>  <strong>Catalog Publishing: </strong>Designed and developed a solution to publish the
          product catalog from Salesforce to other systems. It allows project manager to either do 
          <strong>bulk or incremental</strong> publish from the UI.</li>
 <li>
            <strong>Scalability:</strong>Built connected apps with <strong>JWT OAuth2.0</strong>
            nodejs(cluster) server
            architecture which can handle <strong>thousands of requests</strong>
            to authenticate
            salesforce endpoints
        </li>

         <li>
         <strong>Optimizations:</strong>
            Performance optimizations on Vlocity Web Components using Webpack 
            bundler which reduced bundle size by <strong>300%</strong>, 
            reduced build time from  <strong>120 sec</strong> to <strong>6 sec</strong>, 
            improving performance by <strong>100%</strong>.
        </li>
<li>
         <strong>Reusability:</strong>
           Created reusable <strong>custom Web Components</strong>, leveraged on 3 other projects. 
           Developed <strong>reusable</strong> OmniScripts architecture that was used across 
           multiple projects hence reducing the development time to <strong>30%</strong> to the customer.
        </li>
        <li>
        <strong>POCs:</strong>
          Worked on multiple POCs that have helped <strong>acquire</strong> 
          multiple customers, and also in project solutions.
        </li>
<li>
         <strong>Tech Stack:</strong>
        Polymerjs, lit-element, web components , nodejs, expressjs, reactjs and lightning web components.
        </li>
       
    </ul>
    `,
    logo: "salesforce-logo.svg",
  },
  {
    title: "Software Development Engineer",
    company: "Youplus, Inc.",
    duration: "June 2018 - December 2019",
    workDescription: `
        <ul>
        <li>
            <strong>VIEW Configuration Portal:</strong> Youplus is the world’s
            first Video
            Opinion Search Engine. These video opinions combined are put up on a
            webpage as a <strong>widget</strong>. Built this portal end to end
            where client can
            <strong>order videos</strong> (review & ads), <strong>theme
                widget</strong>, make
            <strong>live/pause</strong>.
            New flow made easy to manage <strong>thousands of pages</strong>
            instead of tens
            previously.
        </li>
        <li>
            <strong>Optimizations:</strong> Since widgets used common modules, I
            designed
            &
            implemented a process to share common modules across projects using
            bit.dev. Reduced bundle size by <strong>50%</strong> & every widget
            is in the range
            of <strong>50KB - 120KB</strong>.
        </li>
        <li>
            <strong>Analytics</strong>: Created in-house analytics for widgets
            by creating a HOC
            to track user interactions like play, pause, clicks etc.
        </li>
        <li>
            <strong>Operation Portal</strong>: Internal portal used to manually
            correct results
            generated by AI. Developed flows which had a major impact on
            <strong>improving accuracy of models</strong> as the corrected data
            is given as
            feedback to models.
        </li>
        <li>
            Member of <strong>SWAT</strong> team where POC’s for new ideas need
            to be delivered
            quickly. </li>
        <li>
            <a href="https://drive.google.com/file/d/1RuTu6w0tLk7E-7UfRzHTp3dCUYKPzJqq/view"
                target="_blank">Excellence
                award</a> for the month Oct 2018.
        </li>
        <li>Used <strong>reactjs, redux, vanilla JS</strong> to build these
            applications.
        </li>
    </ul>
    `,
    logo: "youplus-logo.svg",
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
                Myntra, Puma</strong> [link] using <strong>React
                A-frame</strong>
        </li>
        <li>
            Developed login screen, forgot password flow, <strong>error
                handler</strong>
            for all
            login options. </li>
        <li>
            eveloped end-to-end automation tests for the tool using
            <strong>cypress</strong>
            which helped in catching regression bugs for the devs. <a
                href="https://scapic.com/create/login"
                target="_blank">[link]</a>
        </li>

    </ul>
    `,
    logo: "scapic-logo.svg",
  },
  {
    title: "Summer School Intern",
    company: "Indian Institute of Science",
    duration: "July 2017",
    workDescription: `
        <ul>
        <li>
            Chosen to be the student amongst thousands who applied for
            <strong>Undergraduate Summer
                School</strong> hosted by
            the Department of Computer Science and Automation, IISc during July
            2017 <a
                href="https://drive.google.com/file/d/1AGdIg2l5Tug_8rAp3PkATp-nTq3rFD6H/view"
                target="_blank">[Link]</a>.
        </li>
        <li>
            I was exposed to several contemporary research work going on in &
            around IISc and of course world in the field of Machine Learning,
            AI, NLP, Probability, Theory of Computation and various others.
        </li>
        <li>
            I also won a prize in the quiz on the final day. </li>
    </ul>
    `,
    logo: "iisc-logo.png",
  },
];

export { projects, experiences };
