export function header() {
  let header = document.createElement("header");
  header.className = "header";

  let namePorfolio = document.createElement("h1");
  namePorfolio.className = "name-portfolio";
  namePorfolio.textContent = "Portfolio";
  header.appendChild(namePorfolio);

  let nav = document.createElement("div");
  nav.className = "nav";
  header.appendChild(nav);

  let home = document.createElement("button");
  home.className = "home";
  home.textContent = "Home";
  nav.appendChild(home);

  let about = document.createElement("button");
  about.className = "about";
  about.textContent = "About Me";
  nav.appendChild(about);

  let skills = document.createElement("button");
  skills.className = "skills";
  skills.textContent = "Skills";
  nav.appendChild(skills);

  let projects = document.createElement("button");
  projects.className = "projects";
  projects.textContent = "Projects";
  nav.appendChild(projects);

  let certifications = document.createElement("button");
  certifications.className = "certifications";
  certifications.textContent = "Certifications";
  nav.appendChild(certifications);

  return header;
}
