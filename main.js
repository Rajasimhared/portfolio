import "./style.css";
import "./components/AnimationControls";
import "./components/ProjectItems";
import "./components/WorkExperience";
import "./components/MyIntro/myIntro.js";
import "./components/LandingPage/landingPage.js";
import "./components/MainContent/mainContent.js";
import "./components/NavBar/navBar.js";

// Init function

export function enterExperience(e) {
  e.target.style.display = "none";
  loadCustomElement("c-main-content");
  loadCustomElement("c-nav-bar", null, "first");

  let mainContent = document.querySelector("c-main-content");

  mainContent.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });

  audio = new Audio("./music.mp3");
  audio.currentTime = 15;
  audio.play();
  audio.loop = true;

  toggleAnimation();
  loadCustomElement(
    "c-animation-controls",
    null,
    null,
    document.querySelector("main")
  );
}

// Used to remove the custom element from DOM
function removeCustomElement(name, container = document.body) {
  const element = container.getElementsByTagName(name)[0];
  element.remove();
}

// Toggle controls

const toggleAnimation = () =>
  animationId
    ? (cancelAnimationFrame(animationId), (animationId = null))
    : animate();

const toggleAudio = () => (audio.paused ? audio.play() : audio.pause());

// Used to load any defined custom html element. Takes two params name, container to query upon

function loadCustomElement(
  name,
  attributes,
  position,
  container = document.body
) {
  const game = document.createElement(name);
  attributes?.forEach((attribute) => {
    game.setAttribute(attribute.key, attribute.value);
  });
  if (position == "first") {
    // Get the parent's first child
    let theFirstChild = container.firstChild;

    // Insert the new element before the first child
    container.insertBefore(game, theFirstChild);
  } else {
    container.appendChild(game);
  }
}

// Event Listeners

document.addEventListener("animate", () => toggleAnimation());
document.addEventListener("audio", () => toggleAudio());

// Show/Hide Projects Logic
