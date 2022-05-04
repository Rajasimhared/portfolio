class AnimationControls extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: "open"
        });

        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
        this.shadowRoot.appendChild(link);

        const wrapper = document.createElement("div");
        wrapper.classList.add('controls-wrapper');

        const animate = document.createElement('button');
        animate.title = 'Animate';
        const animateIcon = document.createElement('i');
        animateIcon.classList.add('fa', 'fa-rotate');
        animate.appendChild(animateIcon);
        wrapper.appendChild(animate);

        animate.addEventListener('click', () => {
            console.log('sdaf')
            const event = new CustomEvent('animate', {});
            document.dispatchEvent(event);
        })

        const audio = document.createElement('button');
        audio.title = 'Toggle Audio';
        const audioIcon = document.createElement('i');
        audioIcon.classList.add('fa', 'fa-volume-high');
        audio.appendChild(audioIcon);
        wrapper.appendChild(audio);

        audio.addEventListener('click', () => {
            audioIcon.classList.toggle('fa-volume-high');
            audioIcon.classList.toggle('fa-volume-xmark');
            const event = new CustomEvent('audio', {});
            document.dispatchEvent(event);
        })

        shadowRoot.appendChild(wrapper);
        let style = document.createElement('style');
        style.textContent = `
        button {
               background: rgba(0, 0, 0,0.1);
               border-radius: 1rem;
               padding: 0.75rem;
               border-style: none;
               font-size: 3rem;
               cursor:pointer;
               margin-left: 1rem;
            }
        button:hover {
                box-shadow: 0 1.5rem 2.5rem 0 #040c21;
                transform: translateY(-0.25rem);
            }
        .controls-wrapper {
            z-index: 2;
            position: fixed;
            right: 2rem;
            bottom: 3rem;
        }
            `;
        shadowRoot.appendChild(style);
    }
}

customElements.define('animation-controls', AnimationControls);