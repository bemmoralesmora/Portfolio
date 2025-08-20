// modules/habilidades/habilidades.js

export function habilidad(nombre, herramientasData) {
  let habilidad = document.createElement("div");
  habilidad.className = "habilidad";

  // Header
  let headerHabilidad = document.createElement("h2");
  headerHabilidad.className = "header_habilidad";
  habilidad.appendChild(headerHabilidad);

  let container_cirulos = document.createElement("div");
  container_cirulos.className = "container_circulos";
  headerHabilidad.appendChild(container_cirulos);

  ["circulo1", "circulo2", "circulo3"].forEach((cls) => {
    let circulo = document.createElement("div");
    circulo.className = cls;
    container_cirulos.appendChild(circulo);
  });

  let tituloHabilidad = document.createElement("p");
  tituloHabilidad.className = "titulo_habilidad";
  tituloHabilidad.textContent = nombre;
  headerHabilidad.appendChild(tituloHabilidad);

  // Contenedor de herramientas
  let herramientas = document.createElement("div");
  herramientas.className = "herramientas";
  habilidad.appendChild(herramientas);

  // Agregar cada herramienta pasada en el array
  herramientasData.forEach((tool) => {
    let herramienta_modulo = document.createElement("div");
    herramienta_modulo.className = "herramienta_modulo";

    let herramienta_imagen = document.createElement("div");
    herramienta_imagen.className = "herramienta_imagen";

    let herramienta_img = document.createElement("img");
    herramienta_img.src = tool.img; // ruta de la imagen
    herramienta_img.alt = tool.nombre;
    herramienta_imagen.appendChild(herramienta_img);

    let herramienta_nombre = document.createElement("div");
    herramienta_nombre.className = "herramienta_nombre";
    herramienta_nombre.textContent = tool.nombre;

    herramienta_modulo.appendChild(herramienta_imagen);
    herramienta_modulo.appendChild(herramienta_nombre);

    herramientas.appendChild(herramienta_modulo);
  });

  return habilidad;
}
