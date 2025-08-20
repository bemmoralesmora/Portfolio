// views/habilidadesView.js

import { habilidad } from "../../modules/habilidades/habilidades.js";

export function habilidadesView() {
  let habilidadesView = document.createElement("div");
  habilidadesView.className = "habilidades_container";

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
          img: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png?f=webp",
        },
        { nombre: "CSS", img: "img/css.png" },
        { nombre: "JavaScript", img: "img/js.png" },
        { nombre: "React", img: "img/react.png" },
      ],
    },
    {
      nombre: "Backend",
      herramientas: [
        { nombre: "Node.js", img: "img/node.png" },
        { nombre: "Express", img: "img/express.png" },
        { nombre: "Python", img: "img/python.png" },
      ],
    },
    {
      nombre: "Base de Datos",
      herramientas: [
        { nombre: "MySQL", img: "img/mysql.png" },
        { nombre: "MongoDB", img: "img/mongo.png" },
      ],
    },
    {
      nombre: "Herramientas",
      herramientas: [
        { nombre: "Git", img: "img/git.png" },
        { nombre: "GitHub", img: "img/github.png" },
        { nombre: "VS Code", img: "img/vscode.png" },
      ],
    },
  ];

  // Renderizar todas las habilidades
  habilidadesData.forEach((h) =>
    habilidadesContainer.appendChild(habilidad(h.nombre, h.herramientas))
  );

  return habilidadesView;
}
