export function home() {
  let home = document.createElement("div");
  home.className = "home";

  let presentacion = document.createElement("h1");
  presentacion.className = "presentacion";
  presentacion.textContent = "Hola, soy Brian Morales";
  home.appendChild(presentacion);

  let descipcion = document.createElement("p");
  descipcion.className = "descripcion";
  descipcion.textContent =
    "A passionate full-stack developer creating beautiful and functional web experiences";
  home.appendChild(descipcion);

  let botones_home = document.createElement("div");
  botones_home.className = "botones_home";
  home.appendChild(botones_home);

  let mi_trabajo = document.createElement("button");
  mi_trabajo.className = "mi_trabajo_btn";
  mi_trabajo.textContent = "Mira mí trabajo";
  botones_home.appendChild(mi_trabajo);

  let sobre_mi = document.createElement("button");
  sobre_mi.className = "sobre_mi_btn";
  sobre_mi.textContent = "sobre mí";
  botones_home.appendChild(sobre_mi);

  let container_redes = document.createElement("div");
  container_redes.className = "container_redes";
  home.appendChild(container_redes);

  let gitHub = document.createElement("a");
  gitHub.href = "";
  container_redes.appendChild(gitHub);

  let gitHub_logo = document.createElement("img");
  gitHub_logo.src = "";
  gitHub.appendChild(gitHub_logo);

  let linkendin = document.createElement("a");
  linkendin.href = "";
  container_redes.appendChild(linkendin);

  let linkendin_logo = document.createElement("img");
  linkendin_logo.src = "";
  linkendin.appendChild(linkendin_logo);

  let email = document.createElement("a");
  email.href = "";
  container_redes.appendChild(email);

  let email_logo = document.createElement("img");
  email_logo.src = "";
  email.appendChild(email_logo);

  let whatsapp = document.createElement("a");
  whatsapp.href = "";
  container_redes.appendChild(whatsapp);

  let whatsapp_logo = document.createElement("img");
  whatsapp_logo.src = "";
  whatsapp.appendChild(whatsapp_logo);

  return home;
}
