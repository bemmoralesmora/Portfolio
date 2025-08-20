import { header } from "./views/headerView/headerView.js";
import { footer } from "./views/footerView/footerView.js";
import { about_me } from "./views/about_me/about_me.js";
import { habilidadesView } from "./views/habilidadesView/habilidadesView.js";
import { proyectosView } from "./views/proyectosView/proyectosView.js";
import { home } from "./views/home/home.js";

export function Dom() {
  let dom = document.querySelector("#root");
  dom.className = "container";

  dom.appendChild(header());
  dom.appendChild(home());
  dom.appendChild(about_me());
  dom.appendChild(habilidadesView());
  dom.appendChild(proyectosView());
  dom.appendChild(footer());
  return dom;
}

Dom();
