import { proyecto } from "../../modules/proyectos/proyectos.js";

export function proyectosView() {
  let proyectosView = document.createElement("div");
  proyectosView.className = "proyectos_container";
  return proyectosView;
}
