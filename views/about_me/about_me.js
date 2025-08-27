export function about_me() {
  let about_me = document.createElement("div");
  about_me.className = "about_me";
  about_me.id = "about";

  let titulo = document.createElement("h1");
  titulo.className = "titulo_about";
  titulo.textContent = "Sobre mí";
  about_me.appendChild(titulo);

  let linea_morada = document.createElement("div");
  linea_morada.className = "linea_morada";
  about_me.appendChild(linea_morada);

  // Carrusel
  let carrusel_imagenes = document.createElement("div");
  carrusel_imagenes.className = "carrusel";
  about_me.appendChild(carrusel_imagenes);

  let imagenes = [
    "./assets/gentebuena.webp", // 👉 tus imágenes
    "../assets/gentebuena2.jpeg",
    "../assets/amigos_forever.jpeg",
  ];

  let img = document.createElement("img");
  img.src = imagenes[0];
  img.className = "carrusel_img";
  carrusel_imagenes.appendChild(img);

  let index = 0;
  setInterval(() => {
    index = (index + 1) % imagenes.length;

    // añadir animación fade-out
    img.classList.remove("fade-in");
    img.classList.add("fade-out");

    setTimeout(() => {
      img.src = imagenes[index];
      img.classList.remove("fade-out");
      img.classList.add("fade-in");
    }, 500); // tiempo del fade-out antes de cambiar
  }, 5000);

  // Info
  let infomacion_me = document.createElement("div");
  infomacion_me.className = "informacion_me";
  about_me.appendChild(infomacion_me);

  let quien_soy = document.createElement("h2");
  quien_soy.className = "quien_soy";
  quien_soy.textContent = "¿Quien soy?";
  infomacion_me.appendChild(quien_soy);

  let texto1 = document.createElement("p");
  texto1.textContent =
    "Soy un desarrollador full-stack apasionado, con experiencia en tecnologías web modernas. Me enfoco en crear aplicaciones web responsivas, accesibles y de alto rendimiento que brinden experiencias excepcionales a los usuarios.";
  infomacion_me.appendChild(texto1);

  let texto2 = document.createElement("p");
  texto2.textContent =
    "Gracias a mi experiencia tanto en front-end como en back-end, aplico un enfoque integral para resolver problemas complejos y construir soluciones escalables.";
  infomacion_me.appendChild(texto2);

  let stats = document.createElement("div");
  stats.className = "stats";

  // Imagen de estadísticas principales
  let statsImage = document.createElement("img");
  statsImage.src =
    "https://github-readme-stats.vercel.app/api?username=bemmoralesmora&show_icons=true&theme=tokyonight";
  statsImage.alt = "GitHub Stats";
  statsImage.style.width = "100%";
  statsImage.style.maxWidth = "500px";
  statsImage.style.borderRadius = "10px";

  stats.appendChild(statsImage);

  infomacion_me.appendChild(stats);
  // Botón CV
  let descarga_cv = document.createElement("a");
  descarga_cv.className = "cv";
  descarga_cv.textContent = "Descargar CV";
  descarga_cv.href = "./assets/cv.pdf"; // 👉 tu archivo CV
  descarga_cv.download = "Brian_Morales_CV.pdf"; // nombre al descargar
  infomacion_me.appendChild(descarga_cv);

  return about_me;
}
