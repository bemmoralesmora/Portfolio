export function proyecto({ nombre, descripcion, img, linkDemo, linkCodigo }) {
  let proyecto = document.createElement("div");
  proyecto.className = "proyecto";

  // Imagen
  let imagen_proyecto = document.createElement("div");
  imagen_proyecto.className = "imagen_proyecto";
  proyecto.appendChild(imagen_proyecto);

  let img_proyecto = document.createElement("img");
  img_proyecto.className = "img_proyecto";
  img_proyecto.src = img;
  img_proyecto.alt = `Imagen de ${nombre}`;
  imagen_proyecto.appendChild(img_proyecto);

  // Nombre
  let nombre_proyecto = document.createElement("h2");
  nombre_proyecto.className = "nombre_proyecto";
  nombre_proyecto.textContent = nombre;
  proyecto.appendChild(nombre_proyecto);

  // Descripción
  let descripcion_proyecto = document.createElement("p");
  descripcion_proyecto.className = "descripcion_proyecto";
  descripcion_proyecto.textContent = descripcion;
  proyecto.appendChild(descripcion_proyecto);

  // Botones
  let botones_proyecto = document.createElement("div");
  botones_proyecto.className = "botones_proyecto";
  proyecto.appendChild(botones_proyecto);

  // Ver Proyecto
  let btn_ver_proyecto = document.createElement("a");
  btn_ver_proyecto.className = "btn_ver_proyecto";
  btn_ver_proyecto.href = linkDemo || "#";
  btn_ver_proyecto.target = "_blank";
  btn_ver_proyecto.textContent = "Ver Proyecto";

  let img_ver_proyecto = document.createElement("img");
  img_ver_proyecto.className = "img_ver_proyecto";
  img_ver_proyecto.src =
    "https://images.vexels.com/media/users/3/140160/isolated/preview/2d4e09879b6f017f74ffaee0b0011c0a-icono-de-ojo.png";
  btn_ver_proyecto.appendChild(img_ver_proyecto);

  botones_proyecto.appendChild(btn_ver_proyecto);

  // Código Fuente
  let btn_codigo_fuente = document.createElement("a");
  btn_codigo_fuente.className = "btn_codigo_fuente";
  btn_codigo_fuente.href = linkCodigo || "#";
  btn_codigo_fuente.target = "_blank";
  btn_codigo_fuente.textContent = "Código Fuente";

  let img_codigo_fuente = document.createElement("img");
  img_codigo_fuente.className = "img_codigo_fuente";
  img_codigo_fuente.src = "./assets/GitHub.png";
  btn_codigo_fuente.appendChild(img_codigo_fuente);

  botones_proyecto.appendChild(btn_codigo_fuente);

  return proyecto;
}
