// *************60. WEB APIS*************
// console.log(window);
// let texto = 'hola, soy tu amigo Carlos programando desde Javascript'
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
// hablar(texto)

// *************61. DOM: INTRODUCCIÓN*************
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);
// document.write("<h1>Hola mundo</h1>")




// *************62. DOM: Nodos, Elementos y Selectores*************
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));

// // Con querySelector se coloca # para buscar id, . para buscar clase, o nombres de etiquetas 
// // querySelector es mas lento que getElementById
// console.log(document.querySelector('#menu'));

// // Trae el primero
// console.log(document.querySelector('a'));

// console.log(document.querySelectorAll('a'));
// console.log(document.querySelectorAll('a').length);
// document.querySelectorAll('a').forEach(el => console.log(el))

// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));




// *************63. DOM: Atributos y Data-Attributes*************
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = 'es'
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX")
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom")
// $linkDOM.setAttribute("target", "_blank")
// $linkDOM.setAttribute("rel", "noopener")
// $linkDOM.setAttribute("href", "https://www.google.com")
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel")
// console.log($linkDOM.hasAttribute("rel"));

// //Data Attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Visita Google"
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// $linkDOM.removeAttribute("data-id")
// console.log($linkDOM.hasAttribute("data-id"));




// *************64. DOM: Estilos y Variables CSS*************
// const $linkDOM = document.querySelector(".link-dom")
// // console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));

// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// // console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration", "none")
// $linkDOM.style.setProperty("display", "block")
// $linkDOM.style.width = "50%"
// $linkDOM.style.textAlign = "center"
// $linkDOM.style.marginLeft = "auto"
// $linkDOM.style.marginRight = "auto"
// $linkDOM.style.padding = "1rem"
// $linkDOM.style.borderRadius = ".5rem"

// console.log("------------");
// // console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// // console.log(getComputedStyle($linkDOM));

// //Variables CSS - Custom Properties CSS
// const $html = document.documentElement,
//   $body = document.body

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor
// $body.style.color = varYellowColor

// $html.style.setProperty("--dark-color", "#000")
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

// $body.style.setProperty("background-color", varDarkColor)

// // console.log(getComputedStyle($html));




// *************65. DOM: Clases CSS *************
// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45")
// $card.classList.remove("rotate-45")
// $card.classList.toggle("rotate-45")
// $card.classList.toggle("rotate-45")
// $card.classList.toggle("rotate-45")
// $card.classList.replace("rotate-45", "rotate-135")
// $card.classList.add("opacity-80", "sepia")
// $card.classList.remove("opacity-80", "sepia")
// $card.classList.toggle("opacity-80", "sepia")




// *************66. DOM: Texto y HTML *************
// const $whatIsDOM = document.getElementById('que-es')
// console.log($whatIsDOM);

// let text = `
//   <p>Hola hola</p>
//   <p>Adios adios</p>
//   <p>Que tal que tal</p>
// `

// // $whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;




// *************67. DOM Traversing: Recorriendo el DOM *************
// const $cards = document.querySelector('.cards')
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.children[3].closest("section"));




// *************68. DOM: Creando Elementos y Fragmentos *************
// const $figure = document.createElement("figure"),
//       $img = document.createElement("img"),
//       $figcaption = document.createElement("figcaption"),
//       $figcaptionText = document.createTextNode("Animals"),
//       $cards = document.querySelector(".cards"),
//       $figure2 = document.createElement("figure")

// $img.setAttribute("src", "https://picsum.photos/id/280/200/200");
// $img.setAttribute("alt", "Animals")

// $figure.classList.add("card")
// $figcaption.appendChild($figcaptionText)
// $figure.appendChild($img)
// $figure.appendChild($figcaption)

// $cards.appendChild($figure)

// $figure2.innerHTML = `
//   <img src="https://picsum.photos/id/380/200/200" alt="People">
//   <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card")
// $cards.appendChild($figure2)

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
// const $ul = document.createElement("ul")

// document.write("<h3>Estaciones del Año</h3>")
// document.body.appendChild($ul)

// //With createTextNode
// estaciones.forEach(el => {
//   const $li = document.createElement("li");
//   const $liText = document.createTextNode(el);
//   $li.appendChild($liText);
//   $ul.appendChild($li)
// })

// //With textContent
// estaciones.forEach(el => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li)
// })

// //With innerHTML
// const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"]
// const $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = ""
// continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

// //With fragmentation
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// const $ul3 = document.createElement('ul');
// const $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//   const $li = document.createElement('li');
//         $li.textContent = el;
//         $fragment.appendChild($li);
// })

// document.write("<h3>Meses del año</h3>");
// $ul3.appendChild($fragment)
// document.body.appendChild($ul3)




// *************69. DOM: Templates HTML  *************
// const $cards = document.querySelector(".cards"),
//   // no quiero apuntar a la referencia del elemento template, sino su contenido
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnologia",
//       img: "https://picsum.photos/id/1/200/200",
//     },
//     {
//       title: "Animales",
//       img: "https://picsum.photos/id/1/200/200",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://picsum.photos/id/1/200/200",
//     },
//     {
//       title: "Gente",
//       img: "https://picsum.photos/id/1/200/200",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://picsum.photos/id/1/200/200",
//     },
//   ];

//   cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img)
//     $template.querySelector("img").setAttribute("alt", el.title)
//     $template.querySelector("figcaption").textContent = el.title

//     console.log($template);
//     let $clone = document.importNode($template, true) //copia todo 
//     $fragment.appendChild($clone)
//   })

//   $cards.appendChild($fragment)




// ************* 70. DOM: Modificando Elementos (Old Style) *************
// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCards = $cards.cloneNode(true)

// $newCard.innerHTML = `
//   <img src="https://picsum.photos/id/222/200/200" alt="Any" />
//   <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card")

// // $cards.replaceChild($newCard, $cards.children[2])
// // $cards.removeChild($cards.lastElementChild)
// // $cards.insertBefore($newCard, $cards.firstElementChild)

// document.body.appendChild($cloneCards)




// ************* 71. DOM: Modificando Elementos (Cool Style) *************
/*
// .insertAdjacent...
//   .insertAdjacentElement(position, el) NODO de tipo elemento
//   .insertAdjacentHTML(position, html) TEXTO en formato html
//   .insertAdjacentText(position, text) TEXTO

// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)
// */
// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// // NO generar con innerHTML
// // $newCard.innerHTML = `
// //   <img src="https://picsum.photos/id/222/200/200" alt="Any" />
// //   <figcaption>Any</figcaption>
// // `;

// let $contentCard = `
// <img src="https://picsum.photos/id/222/200/200" alt="Any" />
// <figcaption></figcaption>
// `;

// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("beforeend", $contentCard)
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "ANY")
// // $cards.insertAdjacentElement("afterbegin", $newCard)

// $cards.prepend($newCard) //primer hijo
// $cards.append($newCard) // ultimo hijo
// $cards.before($newCard) // hermano anterior
// $cards.after($newCard) // hermano siguiente




// ************* 72. DOM: Manejadores de Eventos *************
// function holaMundo() {
//   alert("Hola mundo")
//   console.log("hola mundo 1", event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple")

// //esto es como asignar la funcion a la propiedad onClick del boton
// //Agregando el segundo onclick reemplaza la primera
// $eventoSemantico.onclick = holaMundo; //sin parentesis
// $eventoSemantico.onclick = function (e) { //las funciones de event handler no pueden recibir parametros
//   alert("Hola mundo manejador de eventos semanticos");
//   console.log(e);
//   console.log(event);
// }

// //con evento multiple se quita la palabra on
// //funcion sin parentesis porque si no lo ejecuta inmediatamente
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Manejador de eventos multiples");
//   console.log("segundo", e);
//   console.log(e.type);
//   console.log(e.target);
// });




// ************* 73. DOM: Eventos con Parámetros y Remover Eventos *************
// function holaMundo() {
//   alert("Hola mundo")
//   console.log("hola mundo 1", event);
// }

// function saludar(nombre = "Desconocid@") {
//   alert(`Hola ${nombre}`)
//   console.log(event);
// }

// const $eventoMultiple = document.getElementById("evento-multiple");

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Manejador de eventos multiples");
//   console.log("segundo", e);
//   console.log(e.type);
//   console.log(e.target);
// });
// //Para mandar parametros hay que hacerlo con una funcion anonima o arrow function anonima
// //
// $eventoMultiple.addEventListener("click", () => {
//   saludar()
//   saludar("Carlos")
// });

// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`)
//   console.log("AAA", e);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick)
//   $eventoRemover.disabled = true;
// }

// // Para remover solo es con manejadores multiples
// const $eventoRemover = document.getElementById("evento-remover");
// //como aqui ya no se ejecuta con arrow function, la funcion removerDobleClick va sin parentesis
// $eventoRemover.addEventListener("dblclick", removerDobleClick)
