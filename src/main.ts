import "./components/ProjectItems";
import "./components/WorkExperience";
import "./components/MyIntro/myIntro.js";
import "./components/LandingPage/landingPage.js";
import "./components/MainContent/mainContent.js";
import "./components/NavBar/navBar.js";
import "./style.css";

// Used to load any defined custom html element. Takes two params name, container to query upon

function loadCustomElement(
  name: string,
  attributes: Array<{ key: string; value: string }> | null = null,
  position: "first" | null = null,
  container: HTMLElement = document.body
) {
  const element = document.createElement(name);
  attributes?.forEach((attribute) => {
    element.setAttribute(attribute.key, attribute.value);
  });
  if (position === "first") {
    const firstChild = container.firstChild;
    container.insertBefore(element, firstChild);
  } else {
    container.appendChild(element);
  }
}



// Init function

export function enterExperience(e: Event) {
  const target = e.target as HTMLElement | null;
  if (target) target.style.display = "none";
  loadCustomElement("c-main-content");
  loadCustomElement("c-nav-bar", null, "first");

  const mainContent = document.querySelector("c-main-content");
  if (mainContent) {
    mainContent.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}