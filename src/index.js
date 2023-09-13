import {cargarPagina, crearHeader} from "./load.js";
import {cargarMenu} from "./menu.js";
import {cargarNosotros} from "./nosotros.js";
import './style.css';

cargarPagina(); //cargar pagina coloca todo el contenido html en la web, y con el import del css de arriba lo estiliza, los demas css estan en los otros js

const menu = document.querySelector("#menu");
const nosotros = document.querySelector("#nosotros");
const inicio = document.querySelector("#inicio");

menu.addEventListener("click", function() {
    limpiarContenidoActual();
    cargarMenu();
    agregarEventListeners();

});

nosotros.addEventListener("click", function() {
    limpiarContenidoActual();
    agregarEventListeners();
    cargarNosotros();
});

inicio.addEventListener("click", function() {
    limpiarContenidoActual();
    cargarPagina();
    agregarEventListeners();

});

function limpiarContenidoActual() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
}

function agregarEventListeners() {
    // Vuelve a adjuntar los event listeners a las pestañas después de cargar una nueva página
    const menu = document.querySelector("#menu");
    const nosotros = document.querySelector("#nosotros");
    const inicio = document.querySelector("#inicio");
  
    menu.addEventListener("click", function () {
      limpiarContenidoActual();
      cargarMenu();
      agregarEventListeners();
    });
  
    nosotros.addEventListener("click", function () {
      limpiarContenidoActual();
      cargarNosotros();
      agregarEventListeners();
    });

    inicio.addEventListener("click", function() {
      limpiarContenidoActual();
      cargarPagina();
      agregarEventListeners();
  
  });
  }