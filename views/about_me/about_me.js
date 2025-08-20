export function about_me() {
  let about_me = document.createElement("div");
  about_me.className = "about_me";

  let titulo = document.createElement("h1");
  titulo.className = "titulo_about";
  titulo.textContent = "Sobre mí";
  about_me.appendChild(titulo);

  let linea_morada = document.createElement("div");
  linea_morada.className = "linea_morada";
  about_me.appendChild(linea_morada);

  let carrusel_imagenes = document.createElement("div");
  carrusel_imagenes.className = "carrusel";
  about_me.appendChild(carrusel_imagenes);

  let infomacion_me = document.createElement("div");
  infomacion_me.className = "informacion_me";
  about_me.appendChild(infomacion_me);

  let quien_soy = document.createElement("h2");
  quien_soy.className = "quien_soy";
  quien_soy.textContent = "¿Quien soy?";
  infomacion_me.appendChild(quien_soy);

  let texto1 = document.createElement("p");
  texto1.textContent =
    "I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in creating responsive, accessible, and performant web applications that deliver exceptional user experiences.";
  infomacion_me.appendChild(texto1);

  let texto2 = document.createElement("p");
  texto2.textContent =
    "With a background in both front-end and back-end development, I bring a holistic approach to solving complex problems and building scalable solutions.";
  infomacion_me.appendChild(texto2);

  let stats = document.createElement("div");
  stats.className = "stats";
  infomacion_me.appendChild(stats);

  let descarga_cv = document.createElement("button");
  descarga_cv.className = "cv";
  descarga_cv.textContent = "Descarga mi CV";
  infomacion_me.appendChild(descarga_cv);
  return about_me;
}
