import {cargarPagina, crearHeader} from "./load.js";
import {cargarMenu} from "./menu.js";
import {cargarNosotros} from "./nosotros.js";
import './style.css';

cargarPagina(); //cargar pagina coloca todo el contenido html en la web, y con el import del css de arriba lo estiliza, los demas css estan en los otros js

const menu = document.querySelector("#menu");
const nosotros = document.querySelector("#nosotros");

menu.addEventListener("click", function() {
    limpiarContenidoActual();
    cargarMenu();
});

nosotros.addEventListener("click", function() {
    limpiarContenidoActual();
    cargarNosotros();
});

function limpiarContenidoActual() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
}