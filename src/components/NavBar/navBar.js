function introTemplate() {
  const coreTemplate = document.createElement("template");

  coreTemplate.innerHTML = `
<nav class="bg-slate-800 relative z-[3] sticky top-0 ">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#experience-timeline" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Work Experience</a>

            <a href="#skills" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
            
            <a href="#achievements" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Achievements</a>

            <a href="#education" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Education</a>

            <a href="#projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          </div>
        </div>
      </div>
     <div class="text-lg absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rajasimha-reddy" type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rajasimhared" type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="mailto:rajasimha5599@gmail.com" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-label="Email">
          <i class="fa-brands fa-google"></i>
        </a>
        <a href="tel:+918904455359" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-label="Phone">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#experience-timeline" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Work Experience</a>

      <a href="#skills" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>

      <a href="#achievements" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
      
      <a href="#education" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Education</a>

      <a href="#projects" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
    </div>
  </div>
</nav>
    `;
  return coreTemplate.content;
}

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(introTemplate());
    const btn = this.querySelector('#mobile-menu-button');
    const menu = this.querySelector('#mobile-menu');
    if (btn && menu) {
      const icons = btn.querySelectorAll('svg');
      const openIcon = icons[0];
      const closeIcon = icons[1];

      const toggleMenu = () => {
        menu.classList.toggle('hidden');
        if (openIcon && closeIcon) {
          openIcon.classList.toggle('hidden');
          openIcon.classList.toggle('block');
          closeIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('block');
        }
      };

      btn.addEventListener('click', toggleMenu);

      // Auto-close mobile menu when a link is tapped
      const menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            if (openIcon && closeIcon) {
              openIcon.classList.remove('hidden');
              openIcon.classList.add('block');
              closeIcon.classList.add('hidden');
              closeIcon.classList.remove('block');
            }
          }
        });
      });
    }
  }
}

customElements.define("c-nav-bar", NavBar);
