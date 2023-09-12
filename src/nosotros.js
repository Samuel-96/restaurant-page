import {cargarPagina, crearHeader} from "./load.js";

function cargarNosotros(){
    const header = crearHeader();
    const contentWeb = document.querySelector("#content");

    contentWeb.appendChild(header);
}

export {cargarNosotros};
