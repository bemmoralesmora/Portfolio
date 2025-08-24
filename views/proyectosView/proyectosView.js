import { proyecto } from "../../modules/proyectos/proyectos.js";

export function proyectosView() {
  let proyectosView = document.createElement("div");
  proyectosView.className = "proyectos_container";
  proyectosView.id = "projects";

  let titulo = document.createElement("h1");
  titulo.className = "titulo_skill";
  titulo.textContent = "Proyectos";
  proyectosView.appendChild(titulo);

  let linea_morada = document.createElement("div");
  linea_morada.className = "proyectos_linea_morada";
  proyectosView.appendChild(linea_morada);

  let proyectos_container = document.createElement("div");
  proyectos_container.className = "proyectos_subcontainer";
  proyectosView.appendChild(proyectos_container);

  // 📌 Tus proyectos
  const proyectosData = [
    {
      nombre: "Todo_list",
      descripcion:
        "Aplicación web de tareas con HTML, CSS y JavaScript; permite agregar, eliminar y marcar tareas completadas.",
      img: "./assets/todo_list.png",
      linkDemo: "https://todo-list-six-nu-77.vercel.app/pages/dashboard.html",
      linkCodigo:
        "https://github.com/bemmoralesmora/Todo_list?tab=readme-ov-file",
    },
    {
      nombre: "Puzzle_Playground",
      descripcion:
        "Aplicación web de juegos multijugador con HTML, CSS y JavaScript; Icluye backend con Node.js y Socket.io para comunicación en tiempo real.",
      img: "./assets/juego.png",
      linkDemo: "https://puzzle-playground.vercel.app",
      linkCodigo: "https://github.com/bemmoralesmora/Puzzle_Playground",
    },
    {
      nombre: "Listado_scl",
      descripcion:
        "Aplicación fullstack; permite listar, agregar y administrar registros de manera dinámica.",
      img: "./assets/listado.png",
      linkDemo: "https://listado-scl.vercel.app",
      linkCodigo: "https://github.com/bemmoralesmora/Listado_scl",
    },
    {
      nombre: "TILAPIAS360",
      descripcion:
        "Pagina web interactiva sobre la cría de tilapias, creada con HTML, CSS y JavaScript;Hecha para la competencia de robotica FIRST LEGO League.",
      img: "./assets/tilapias2.png",
      linkDemo: "https://bemmoralesmora.github.io/Tilapias360_Frontend",
      linkCodigo:
        "https://github.com/bemmoralesmora/Tilapias360_Frontend?tab=readme-ov-file",
    },
    {
      nombre: "Darwin-evolucion",
      descripcion:
        "Simulación interactiva de la evolución de especies usando HTML, CSS y JavaScript; incluye selección natural y adaptación.",
      img: "./assets/darwin.png",
      linkDemo: "https://rockemma.github.io/Darwin-evolucion",
      linkCodigo: "https://github.com/bemmoralesmora/Darwin-evolucion",
    },
    {
      nombre: "APP-Tareas",
      descripcion:
        "Aplicación de gestión de tareas con HTML, CSS y JavaScript; permite crear, editar y eliminar tareas de manera sencilla.",
      img: "./assets/app_tareas.png",
      linkDemo: "https://bemmoralesmora.github.io/APP-Tareas",
      linkCodigo: "https://github.com/bemmoralesmora/APP-Tareas",
    },
    {
      nombre: "POTAFOLIO-COMPLETO",
      descripcion:
        "Portafolio personal desarrollado con HTML, CSS y JavaScript; presenta proyectos, habilidades y experiencia de manera profesional.",
      img: "./assets/portfolio.png",
      linkDemo: "https://bemmoralesmora.github.io/POTAFOLIO-COMPLETO",
      linkCodigo: "https://github.com/bemmoralesmora/POTAFOLIO-COMPLETO",
    },
    {
      nombre: "Diseño-Web",
      descripcion:
        "Página web estática creada con HTML, CSS y JavaScript; muestra diseño moderno y responsivo para presentación de contenidos.",
      img: "./assets/diseño_web.png",
      linkDemo: "https://bemmoralesmora.github.io/PAGINA-WEB-1",
      linkCodigo: "https://github.com/bemmoralesmora/PAGINA-WEB-1",
    },
    {
      nombre: "Galeria_productos",
      descripcion:
        "Galería interactiva de productos con HTML, CSS y JavaScript; permite visualizar imágenes y detalles de manera dinámica.",
      img: "./assets/galeria.png",
      linkDemo: "https://bemmoralesmora.github.io/Galeria_productos",
      linkCodigo: "https://github.com/bemmoralesmora/Galeria_productos",
    },
  ];

  proyectosData.forEach((p) => proyectos_container.appendChild(proyecto(p)));

  return proyectosView;
}
