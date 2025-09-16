export function home() {
  let home = document.createElement("div");
  home.className = "home";
  home.id = "home";

  let presentacion = document.createElement("h1");
  presentacion.className = "presentacion";
  presentacion.textContent = "Hola, soy Brian Morales";
  home.appendChild(presentacion);

  let descripcion = document.createElement("p");
  descripcion.className = "descripcion";
  descripcion.textContent =
    "Full-stack y amante de la tecnología, con proyectos de robótica y energía que combinan creatividad, constancia e innovación.";
  home.appendChild(descripcion);

  // BOTONES
  let botones_home = document.createElement("div");
  botones_home.className = "botones_home";
  home.appendChild(botones_home);

  let mi_trabajo = document.createElement("button");
  mi_trabajo.className = "mi_trabajo_btn";
  mi_trabajo.textContent = "Mira mí trabajo";
  botones_home.appendChild(mi_trabajo);

  let sobre_mi = document.createElement("button");
  sobre_mi.className = "sobre_mi_btn";
  sobre_mi.textContent = "Sobre mí";
  botones_home.appendChild(sobre_mi);

  // Eventos scroll
  function scrollToSection(id) {
    const section = document.querySelector(id);
    const headerHeight = document.querySelector(".header").offsetHeight;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  mi_trabajo.addEventListener("click", () => scrollToSection("#projects"));
  sobre_mi.addEventListener("click", () => scrollToSection("#about"));

  // REDES SOCIALES
  let container_redes = document.createElement("div");
  container_redes.className = "container_redes";
  home.appendChild(container_redes);

  // GitHub
  let gitHub = document.createElement("a");
  gitHub.href = "https://github.com/bemmoralesmora";
  gitHub.target = "_blank";
  container_redes.appendChild(gitHub);

  let gitHub_logo = document.createElement("img");
  gitHub_logo.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
  gitHub_logo.alt = "GitHub";
  gitHub.appendChild(gitHub_logo);

  // LinkedIn
  let linkendin = document.createElement("a");
  linkendin.href = "http://linkedin.com/in/brian-morales-312554337/";
  linkendin.target = "_blank";
  container_redes.appendChild(linkendin);

  let linkendin_logo = document.createElement("img");
  linkendin_logo.src = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
  linkendin_logo.alt = "LinkedIn";
  linkendin.appendChild(linkendin_logo);

  // Email
  let email = document.createElement("a");
  email.href = "mailto:moramorales4477@gmail.com";
  container_redes.appendChild(email);

  let email_logo = document.createElement("img");
  email_logo.src = "https://cdn-icons-png.flaticon.com/512/732/732200.png";
  email_logo.alt = "Email";
  email.appendChild(email_logo);

  // WhatsApp
  let whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/50238345017"; // tu número
  whatsapp.target = "_blank";
  container_redes.appendChild(whatsapp);

  let whatsapp_logo = document.createElement("img");
  whatsapp_logo.src = "https://cdn-icons-png.flaticon.com/512/733/733585.png";
  whatsapp_logo.alt = "WhatsApp";
  whatsapp.appendChild(whatsapp_logo);

  return home;
}
