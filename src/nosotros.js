import {cargarPagina, crearHeader} from "./load.js";
import "./nosotros.css";

function cargarNosotros(){
    const header = crearHeader();
    const contentWeb = document.querySelector("#content");
    const nosotros = crearNosotros();

    contentWeb.appendChild(header);
    contentWeb.appendChild(nosotros);
}

function crearNosotros(){
    const main = document.createElement("main");

    const h1 = document.createElement("h1");
    h1.textContent = "Encuéntranos";
    
    const divGoogleMap = document.createElement("div");
    divGoogleMap.classList.add("google-map");
    const iframeMap = document.createElement("iframe");
    iframeMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3127.2737138226676!2d-0.41268152342660885!3d38.388919876545216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1694592629054!5m2!1ses!2ses";
    iframeMap.style.border = "0";
    iframeMap.allowFullscreen = true;
    iframeMap.loading = "lazy";
    iframeMap.referrerpolicy = "no-referrer-when-downgrade";
    divGoogleMap.appendChild(iframeMap);
    

    const divFormulario = document.createElement("div");
    divFormulario.classList.add("formulario");
    const h2 = document.createElement("h2");
    

    const form = document.createElement("form");

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Nombre";

    const inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.placeholder = "Correo electrónico";

    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Cuéntanos algo sobre ti";

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.value = "Enviar";
    
    form.appendChild(inputName);
    form.appendChild(inputMail);
    form.appendChild(inputText);
    form.appendChild(inputSubmit);

    divFormulario.appendChild(h2);
    divFormulario.appendChild(form);

    main.appendChild(h1);
    main.appendChild(divGoogleMap);
    main.appendChild(divFormulario);

    return main;
}

export {cargarNosotros};
