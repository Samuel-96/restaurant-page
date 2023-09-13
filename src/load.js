import Kanji from "./kanji.png";
import Ramen1 from "./ramen1.jpg";
import Ramen2 from "./ramen2.jpg";
import Ramen3 from "./ramen3.jpg";
import Ramen4 from "./ramen4.jpg";
import Location from "./location.png";
import Schedule from "./schedule.png";

function cargarPagina() {
    const content = document.querySelector("#content");
    const header = crearHeader();
    const main = crearMain();

    content.appendChild(header);
    content.appendChild(main);
}

function crearHeader() {
    const header = document.createElement("header");

    //creo el contenedor
    const divContainerImage = document.createElement("div");
    divContainerImage.classList.add('container-image');
    //creo la imagen y la meto en el contenedor
    const img = document.createElement("img");
    img.src = Kanji;
    divContainerImage.appendChild(img);

    //creo el contenedor
    const divContainerTabs = document.createElement("div");
    divContainerTabs.classList.add('container-tabs');
    //creo los eleemntos y los meto en el contenedor
    const a1 = document.createElement("a");
    a1.textContent = "Menú";
    a1.id = "menu";
    const a2 = document.createElement("a");
    a2.textContent = "Nosotros";
    a2.id = "nosotros";
    const a3 = document.createElement("a");
    a3.textContent = "Inicio";
    a3.id = "inicio";
    divContainerTabs.appendChild(a1);
    divContainerTabs.appendChild(a2);
    divContainerTabs.appendChild(a3);

    header.appendChild(divContainerImage);
    header.appendChild(divContainerTabs);

    return header;
}

function crearMain() {
    const main = document.createElement("main");

    //divTitulo y sus componentes
    const divTitulo = document.createElement("titulo");
    divTitulo.classList.add("titulo");

    const h1 = document.createElement("h1");
    h1.textContent = "RAMEN DON";
    divTitulo.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "El mejor ramen de Shibuya";
    divTitulo.appendChild(p);

    //div contenedor de imagenes de ramen
    const divContainerRamen = document.createElement("div");
    divContainerRamen.classList.add("container-ramen");
    const imgRamen1 = document.createElement("img");
    imgRamen1.src = Ramen1;
    const imgRamen2 = document.createElement("img");
    imgRamen2.src = Ramen2;
    const imgRamen3 = document.createElement("img");
    imgRamen3.src = Ramen3;
    const imgRamen4 = document.createElement("img");
    imgRamen4.src = Ramen4;
    divContainerRamen.appendChild(imgRamen1);
    divContainerRamen.appendChild(imgRamen2);
    divContainerRamen.appendChild(imgRamen3);
    divContainerRamen.appendChild(imgRamen4);

    const divContainerInfo = document.createElement("div");
    divContainerInfo.classList.add("container-info");

    const divContainerTop = document.createElement("div");
    divContainerTop.classList.add("container-top");
    const imgLocation = document.createElement("img");
    imgLocation.src = Location;
    const pLocation = document.createElement("p");
    pLocation.textContent = "123 Calle Sakura, Shibuya-ku, Tokio 150-0002, Japón";
    divContainerTop.appendChild(imgLocation);
    divContainerTop.appendChild(pLocation);
    divContainerInfo.appendChild(divContainerTop);


    const divContainerBottom = document.createElement("div");
    divContainerBottom.classList.add("container-bottom");
    const imgSchedule = document.createElement("img");
    imgSchedule.src = Schedule;
    const pSchedule = document.createElement("p");
    pSchedule.textContent = "Viernes - Domingo: 8:00 am - 11:00 pm"
    divContainerBottom.appendChild(imgSchedule);
    divContainerBottom.appendChild(pSchedule);
    divContainerInfo.appendChild(divContainerBottom);

    main.appendChild(divTitulo);
    main.appendChild(divContainerRamen);
    main.appendChild(divContainerInfo);
    
    return main;
}

export {cargarPagina, crearHeader};

