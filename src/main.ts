import "./components/ProjectItems";
import "./components/WorkExperience";
import "./components/MyIntro/myIntro.js";
import "./components/LandingPage/landingPage.js";
import "./components/MainContent/mainContent.js";
import "./components/NavBar/navBar.js";
import "./style.css";

// Used to load any defined custom html element. Takes two params name, container to query upon

function loadCustomElement(
  name:any,
  attributes:any,
  position:any,
  container = document.body
) {
  const game = document.createElement(name);
  attributes?.forEach((attribute:any) => {
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



// Init function

export function enterExperience(e:any) {
  e.target.style.display = "none";
  loadCustomElement("c-main-content",undefined,undefined,undefined);
  loadCustomElement("c-nav-bar", null, "first");

  let mainContent = document.querySelector("c-main-content");

  mainContent && mainContent.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });

//   audio = new Audio("./music.mp3");
//   audio.currentTime = 15;
//   audio.play();
//   audio.loop = true;

//   toggleAnimation();
//   loadCustomElement(
//     "c-animation-controls",
//     null,
//     null,
//     document.querySelector("main")
//   );
}