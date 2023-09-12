import {cargarPagina, crearHeader} from "./load.js";
import "./menuStyle.css"
import ImgMenu from "./menu.png";
import ImgRamen1 from "./ramen-opcion1.png";
import ImgRamen2 from "./ramen-opcion2.png";
import ImgRamen3 from "./ramen-opcion3.png";
import ImgRamen4 from "./ramen-opcion4.png";
import ImgRamen5 from "./ramen-opcion5.png";
import ImgRamen6 from "./ramen-opcion6.png";

function cargarMenu(){
    const header = crearHeader();
    const contentWeb = document.querySelector("#content");

    const divTitulo = document.createElement("div");
    divTitulo.classList.add("titulo");
    const imgMenu = document.createElement("img");
    imgMenu.src = ImgMenu;
    divTitulo.appendChild(imgMenu);

    const divMenu = document.createElement("div");
    divMenu.classList.add("menu");

    //info del menu, opcion de ramen 1
    const divMenuOpcion = document.createElement("div");
    divMenuOpcion.classList.add("menu-opcion");
    const imgRamen1 = document.createElement("img");
    imgRamen1.src = ImgRamen1;
    const divInfoMenu = document.createElement("div");
    divInfoMenu.classList.add("info-menu");
    const pMenuTitulo = document.createElement("p");
    pMenuTitulo.textContent = "Oyakodon Ramen";
    const pIngredientes = document.createElement("p");
    pIngredientes.textContent = "Nuestra variante del ramen incluye un caldo de miso exquisito, elaborado con pasta de soja y una selección de ingredientes secretos que se combinan para crear ese característico sabor umami que todos aman.";
    
    divInfoMenu.appendChild(pMenuTitulo);
    divInfoMenu.appendChild(pIngredientes);
    divMenuOpcion.appendChild(imgRamen1);
    divMenuOpcion.appendChild(divInfoMenu);
    
    //info del menu, opcion de ramen 2

    const divMenuOpcion2 = document.createElement("div");
    divMenuOpcion2.classList.add("menu-opcion");
    const imgRamen2 = document.createElement("img");
    imgRamen2.src = ImgRamen2;
    const divInfoMenu2 = document.createElement("div");
    divInfoMenu2.classList.add("info-menu");
    const pMenuTitulo2 = document.createElement("p");
    pMenuTitulo2.textContent = "Ninniku Ramen";
    const pIngredientes2 = document.createElement("p");
    pIngredientes2.textContent = "Un toque especial en la preparación del caldo implica tostar las verduras aromáticas antes de incorporarlas al caldo. Este paso añade un sabor ahumado y una profundidad única a nuestro ramen.";
    
    divInfoMenu2.appendChild(pMenuTitulo2);
    divInfoMenu2.appendChild(pIngredientes2);
    divMenuOpcion2.appendChild(imgRamen2);
    divMenuOpcion2.appendChild(divInfoMenu2);

    //info del menu, opcion de ramen 3

    const divMenuOpcion3 = document.createElement("div");
    divMenuOpcion3.classList.add("menu-opcion");
    const imgRamen3 = document.createElement("img");
    imgRamen3.src = ImgRamen3;
    const divInfoMenu3 = document.createElement("div");
    divInfoMenu3.classList.add("info-menu");
    const pMenuTitulo3 = document.createElement("p");
    pMenuTitulo3.textContent = "Tonkotsu Ramen";
    const pIngredientes3 = document.createElement("p");
    pIngredientes3.textContent = "Si prefieres una opción más ligera pero igualmente deliciosa, te encantará nuestro ramen de pollo. Hacemos el caldo de pollo infusionándolo con hierbas frescas y especias selectas que añaden frescura y calidez al plato.";
    
    divInfoMenu3.appendChild(pMenuTitulo3);
    divInfoMenu3.appendChild(pIngredientes3);
    divMenuOpcion3.appendChild(imgRamen3);
    divMenuOpcion3.appendChild(divInfoMenu3);

    //info del menu, opcion de ramen 4

    const divMenuOpcion4 = document.createElement("div");
    divMenuOpcion4.classList.add("menu-opcion");
    const imgRamen4 = document.createElement("img");
    imgRamen4.src = ImgRamen4;
    const divInfoMenu4 = document.createElement("div");
    divInfoMenu4.classList.add("info-menu");
    const pMenuTitulo4 = document.createElement("p");
    pMenuTitulo4.textContent = "Spicy Ramen";
    const pIngredientes4 = document.createElement("p");
    pIngredientes4.textContent = "¿Buscas un ramen con un toque de sabor asiático auténtico? Nuestro caldo de miso es la elección perfecta. Utilizamos una receta tradicional que incluye pasta de soja, alga kombu y otros ingredientes que se mezclan en una sinfonía de sabores.";
    
    divInfoMenu4.appendChild(pMenuTitulo4);
    divInfoMenu4.appendChild(pIngredientes4);
    divMenuOpcion4.appendChild(imgRamen4);
    divMenuOpcion4.appendChild(divInfoMenu4);

     //info del menu, opcion de ramen 5

     const divMenuOpcion5 = document.createElement("div");
     divMenuOpcion5.classList.add("menu-opcion");
     const imgRamen5 = document.createElement("img");
     imgRamen5.src = ImgRamen5;
     const divInfoMenu5 = document.createElement("div");
     divInfoMenu5.classList.add("info-menu");
     const pMenuTitulo5 = document.createElement("p");
     pMenuTitulo5.textContent = "Tsukemen";
     const pIngredientes5 = document.createElement("p");
     pIngredientes5.textContent = "No hay nada como el clásico ramen de salsa de soja. Combinamos fideos de trigo perfectamente cocidos con una salsa de soja cuidadosamente equilibrada y un toque de aceite de sésamo tostado para lograr un plato de ramen que te reconfortará con cada bocado.";
     
     divInfoMenu5.appendChild(pMenuTitulo5);
     divInfoMenu5.appendChild(pIngredientes5);
     divMenuOpcion5.appendChild(imgRamen5);
     divMenuOpcion5.appendChild(divInfoMenu5);

     //info del menu, opcion de ramen 6

     const divMenuOpcion6 = document.createElement("div");
     divMenuOpcion6.classList.add("menu-opcion");
     const imgRamen6 = document.createElement("img");
     imgRamen6.src = ImgRamen6;
     const divInfoMenu6 = document.createElement("div");
     divInfoMenu6.classList.add("info-menu");
     const pMenuTitulo6 = document.createElement("p");
     pMenuTitulo6.textContent = "Miso Butter Ramen";
     const pIngredientes6 = document.createElement("p");
     pIngredientes6.textContent = "Para crear el caldo tonkotsu perfecto, comenzamos cocinando a fuego lento los huesos de cerdo durante horas, luego los enjuagamos minuciosamente para eliminar cualquier coágulo de sangre u otras impurezas. Este proceso asegura que el caldo final tenga un tono pálido en lugar de un marrón oscuro.";
     
     divInfoMenu6.appendChild(pMenuTitulo6);
     divInfoMenu6.appendChild(pIngredientes6);
     divMenuOpcion6.appendChild(imgRamen6);
     divMenuOpcion6.appendChild(divInfoMenu6);

    divMenu.appendChild(divMenuOpcion);
    divMenu.appendChild(divMenuOpcion2);
    divMenu.appendChild(divMenuOpcion3);
    divMenu.appendChild(divMenuOpcion4);
    divMenu.appendChild(divMenuOpcion5);
    divMenu.appendChild(divMenuOpcion6);

    contentWeb.appendChild(header);
    contentWeb.appendChild(divTitulo);
    contentWeb.appendChild(divMenu);
}

export {cargarMenu};