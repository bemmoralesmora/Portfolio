// views/habilidadesView.js

import { habilidad } from "../../modules/habilidades/habilidades.js";

export function habilidadesView() {
  let habilidadesView = document.createElement("div");
  habilidadesView.className = "habilidades_container";
  habilidadesView.id = "skills";

  let titulo = document.createElement("h1");
  titulo.className = "titulo_skill";
  titulo.textContent = "Habilidades";
  habilidadesView.appendChild(titulo);

  let linea_morada = document.createElement("div");
  linea_morada.className = "linea_morada_habilidad";
  habilidadesView.appendChild(linea_morada);

  let habilidadesContainer = document.createElement("div");
  habilidadesContainer.className = "habilidades_container_modules";
  habilidadesView.appendChild(habilidadesContainer);

  // 📌 Aquí defines tus habilidades con herramientas
  const habilidadesData = [
    {
      nombre: "Frontend",
      herramientas: [
        {
          nombre: "HTML",
          img: "./assets/HTML5.png",
        },
        { nombre: "CSS", img: "./assets/CSS3.png" },
        {
          nombre: "JavaScript",
          img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
        { nombre: "React", img: "./assets/React.png" },
      ],
    },
    {
      nombre: "Backend",
      herramientas: [
        { nombre: "Node.js", img: "./assets/Node.js.png" },
        { nombre: "Express", img: "./assets/Express.png" },
        {
          nombre: "Python",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
        },
      ],
    },
    {
      nombre: "Base de Datos",
      herramientas: [
        {
          nombre: "MySQL",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
        },
        { nombre: "MongoDB", img: "./assets/MongoDB.png" },
      ],
    },
    {
      nombre: "Herramientas",
      herramientas: [
        { nombre: "Git", img: "./assets/Git.png" },
        { nombre: "GitHub", img: "./assets/GitHub.png" },
        { nombre: "VS Code", img: "./assets/Visual.png" },
      ],
    },
  ];

  // Renderizar todas las habilidades
  habilidadesData.forEach((h) =>
    habilidadesContainer.appendChild(habilidad(h.nombre, h.herramientas))
  );

  return habilidadesView;
}
