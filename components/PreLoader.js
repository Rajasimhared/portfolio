function createTemplate(work) {
    const coreTemplate = document.createElement('template');

    coreTemplate.innerHTML = `
    <style>
   .preloader-container {
   background: #03a9f4;
   width: 100vw;
   position: relative;
   height: 100vh;
   border: 1px solid silver;
   margin: 0 auto;
   overflow: hidden;
   }
   @keyframes vibrate-1 {
   0% {
   transform: translate3d(0, 0, 0);
   }
   50% {
   transform: translate3d(-0.1rem, 0, 0);
   }
   100% {
   transform: translate3d(0.1rem, 0, 0);
   }
   }
   @keyframes vibrate-2 {
   0% {
   transform: translate3d(0, 0, 0);
   }
   50% {
   transform: translate3d(-0.3rem, 0, 0);
   }
   100% {
   transform: translate3d(0.3rem, 0, 0);
   }
   }
   @keyframes takeoff {
   0% {
   transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
   }
   20% {
   transform: translate3d(0, -30%, 0) rotateX(0deg) scale(1);
   }
   100% {
   transform: translate3d(0, -300%, 0) rotateX(30deg) scale(0.25);
   }
   }
  
   .rocket-takeoff-container {
   position: absolute;
   left: 50%;
   bottom: 0;
   margin: 0 0 0 -5rem;
   }

   .play .rocket-takeoff-container{
        animation: takeoff 8s 1s linear forwards;
   }
   .play .rocket-takeoff{
   animation: vibrate-1 0.1s 0s 50 linear, vibrate-2 0.1s 0.5s 150 linear, vibrate-1 0.1s 4s infinite linear;
   }

   .launch{
    position: absolute;
    left: 50%;
    top: 50%;
   }
</style>
<div class="preloader-container">
   <div class="rocket-takeoff-container">
      <img src="rocket.svg" class="rocket-takeoff" width="300"/>
   </div>
   <div class="launch">Click to launch</div>
</div>
    `;
    return coreTemplate.content
}

class PreLoader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(createTemplate());
        let button = document.querySelector('.launch');
        button.addEventListener('click', (e) => {
            this.querySelector('.preloader-container').classList.add('play');
            setTimeout(() => {
                let preloader = document.querySelector('.preloader');
                preloader.style.display = 'none';
            }, 8000)
        })
    }
}

customElements.define('c-pre-loader', PreLoader);