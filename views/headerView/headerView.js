export function header() {
  let header = document.createElement("header");
  header.className = "header";

  window.addEventListener("scroll", () => {
    const headerEl = document.querySelector(".header");
    if (window.scrollY > 0) {
      headerEl.classList.add("scrolled");
    } else {
      headerEl.classList.remove("scrolled");
    }
  });

  let namePorfolio = document.createElement("h1");
  namePorfolio.className = "name-portfolio";
  namePorfolio.textContent = "Portfolio";
  header.appendChild(namePorfolio);

  let nav = document.createElement("div");
  nav.className = "nav";
  header.appendChild(nav);

  // Botones
  let homeBtn = document.createElement("button");
  homeBtn.className = "home";
  homeBtn.textContent = "Home";
  nav.appendChild(homeBtn);

  let about = document.createElement("button");
  about.className = "about";
  about.textContent = "Sobre mí";
  nav.appendChild(about);

  let skills = document.createElement("button");
  skills.className = "skills";
  skills.textContent = "Habilidades";
  nav.appendChild(skills);

  let projects = document.createElement("button");
  projects.className = "projects";
  projects.textContent = "Proyectos";
  nav.appendChild(projects);

  function scrollToSection(id) {
    const section = document.querySelector(id);
    const headerHeight = document.querySelector(".header").offsetHeight; // altura del header
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  homeBtn.addEventListener("click", () => scrollToSection("#home"));
  about.addEventListener("click", () => scrollToSection("#about"));
  skills.addEventListener("click", () => scrollToSection("#skills"));
  projects.addEventListener("click", () => scrollToSection("#projects"));

  return header;
}
