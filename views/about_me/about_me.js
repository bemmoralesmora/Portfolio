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
  quien_soy.textContent = "¿Quién soy?";
  infomacion_me.appendChild(quien_soy);

  let texto1 = document.createElement("p");
  texto1.textContent =
    "Apasionado por la tecnología y la electrónica, motivado por la curiosidad y el deseo de crear soluciones innovadoras que aporten a un mundo mejor.";
  infomacion_me.appendChild(texto1);

  let texto2 = document.createElement("p");
  texto2.textContent =
    "Constancia, creatividad y determinación han guiado mi camino desde pequeño, enfrentando desafíos y persiguiendo metas ambiciosas, convencido de que con esfuerzo y conocimiento es posible lograr grandes cosas.";
  infomacion_me.appendChild(texto2);

  let texto3 = document.createElement("p");
  texto3.textContent =
    "Esta pasión me impulsa a aprovechar cada oportunidad de aprendizaje, con la meta de marcar una diferencia positiva y demostrar que los sueños se pueden alcanzar, sin importar los obstáculos.";
  infomacion_me.appendChild(texto3);

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
