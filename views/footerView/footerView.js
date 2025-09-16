export function footer() {
  let footer = document.createElement("footer");
  footer.className = "footer";

  let info_footer = document.createElement("div");
  info_footer.className = "info_footer";
  info_footer.textContent = "Hecho con ❤️ por Brian";
  footer.appendChild(info_footer);

  let img_footer = document.createElement("div");
  img_footer.className = "img_footer";
  footer.appendChild(img_footer);

  let img = document.createElement("img");
  img.src = "../assets/catnap.webp";
  img.alt = "logo";
  img_footer.appendChild(img);

  let container_redes = document.createElement("div");
  container_redes.className = "container_redes";
  footer.appendChild(container_redes);

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
  linkendin.href = "linkedin.com/in/brian-morales-312554337/";
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

  let linea = document.createElement("div");
  linea.className = "linea";
  footer.appendChild(linea);

  let derechos = document.createElement("div");
  derechos.className = "derechos";
  derechos.textContent = "© 2025 Todos los derechos reservados";
  footer.appendChild(derechos);

  return footer;
}
