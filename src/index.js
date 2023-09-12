import {cargarPagina, crearHeader} from "./load.js";
import {cargarMenu} from "./menu.js";
import {cargarNosotros} from "./nosotros.js";
import './style.css';

cargarPagina();

const menu = document.querySelector("#menu");
const nosotros = document.querySelector("#nosotros");

menu.addEventListener("click", function() {
    limpiarContenidoActual();
    cargarMenu();
});

nosotros.addEventListener("click", function() {
    cargarNosotros();
});

function limpiarContenidoActual() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
}