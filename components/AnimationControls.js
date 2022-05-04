function createTemplate() {
    const coreTemplate = document.createElement('template');

    coreTemplate.innerHTML = `
        <style>
           button {
               background: rgba(0, 0, 0, 0.1);
               border-radius: 1rem;
               padding: 0.75rem;
               border-style: none;
               font-size: 3rem;
               cursor: pointer;
               margin-left: 1rem;
               width: 60px;
           }
           button: hover {
                box-shadow: 0 1.5rem 2.5rem 0 #040c21;
                transform: translateY(-0.25rem);
            }
            .controls-wrapper {
                z-index: 2;
                position: fixed;
                right: 2rem;
                bottom: 3rem;
            }
        </style>
        <div class="controls-wrapper">
            <button title="Animate" id="animate">
                <i class="fa fa-rotate"></i>
            </button>
            <button title="Toggle Audio" id="audio">
                <i class="fa fa-volume-high"></i>
            </button>
        </div>
    `;
    return coreTemplate.content;
}


class AnimationControls extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(createTemplate());

        const animate = document.querySelector('#animate');
        animate.addEventListener('click', () => {
            const event = new CustomEvent('animate', {});
            document.dispatchEvent(event);
        })

        const audio = document.querySelector('#audio');
        audio.addEventListener('click', (e) => {
            let audioIcon = e.currentTarget.querySelector('i');
            audioIcon.classList.toggle('fa-volume-high');
            audioIcon.classList.toggle('fa-volume-xmark');
            const event = new CustomEvent('audio', {});
            document.dispatchEvent(event);
        })

    }
}

customElements.define('c-animation-controls', AnimationControls);