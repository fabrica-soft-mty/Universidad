//Eliminar de Local Storage
localStorage.clear();
//scripts DOM
let elemento;
elemento = document.scripts;
elemento = document.images;
let imagenesarray = Array.from(elemento);
console.log(imagenesarray.length);
//-------------------------get element
let elemento;
elemento = document.getElementById('encabezado').className;
elemento = document.getElementById('encabezado').id;
elemento = document.getElementById('encabezado').textContent;
elemento = document.getElementById('encabezado');
elemento.style.backgroundColor = '#333';
elemento.style.color = '#fff';
elemento.textContent = 'Los mejores cursos';
console.log(elemento);
//---------------------------querySelector
let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:last-child');
enlace = document.querySelector('#principal a:nth-child(3)');
console.log(enlace);
//-----------------------------seleccionando varios elementos
let enlaces = document.getElementsByClassName('enlace');
enlaces = document.getElementsByClassName('enlace')[2];

console.log(enlaces);
//---------------------------------combinados
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces);
const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
let enlaces = Array.from(links);
enlaces.forEach(function(enlce) {
    console.log(enlce.textContent);
});
console.log(enlaces);
//---------------------------------------------------QuerySelectorAll
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');
enlaces.forEach(function(impares) {
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
});

console.log(enlaces);
//-----------------------------------------------------------------------Traversing 
const navegacion = document.querySelector('#principal');

console.log(navegacion.children[0].nodeType);

//1 elementos
// 2 atributos
// 3 texto
// 8 comentarios 
// 9 documentos
// 10 doctype
//----------------------------------------
const curso = document.querySelectorAll('.card');
console.log(curso[0].lastElementChild);
const cursos = document.querySelectorAll('.card');
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'hola desde trversing');
//----------------------------------------
const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].nextElementSibling.parentElement.children);
//---------------------------------------------------------------------------creando elementos
const enlace = document.createElement('a');

enlace.className = 'enlace';
enlace.id = 'nuevo-id';
enlace.setAttribute('href', '#');
enlace.textContent = 'Nuevo Enlace'

document.querySelector('#secundaria').appendChild(enlace);
//---------------------------------------------------------------------Agregando Elementos con JS
const nuevoEncabezado = document.createElement('h2');

nuevoEncabezado.id = 'encabezado';

nuevoEncabezado.textContent = 'Los mejores Cursos';
//nuevoEncabezado.appendChild(docuent.createTextNode('Los Mejores Cursos'));

const anterior = document.querySelector('#encabezado');

const elementoPadre = document.querySelector('#lista-cursos');

//Remplazar
elementoPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior.parentElement);
//---------------------------------------------------------------------Eliminando Elementos con JS
const primerLi = document.querySelector('.enlace');

let elemento;
//agregar clases CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
//leer atributos
elemento = primerLi.getAttribute('href');
elemento = primerLi.setAttribute('href', 'https://facebook.com');
elemento = primerLi.setAttribute('data-id', 20);
elemento = primerLi.hasAttribute('data-id');
primerLi.removeAttribute('data-id');

console.log(elemento);
//------------------------------------------------------------------------------Event listener click
// una forma
// document.querySelector('#submit-buscador').addEventListener('click', function(e) {
//     e.preventDefault();
//     alert('buscador de cursos')
// });
//otra forma
document.querySelector('#submit-buscador').addEventListener('click', ejecutarboton);

function ejecutarboton(e) {
    e.preventDefault();
    let evento;
    evento = e;
    evento = e.target;
    evento = e.target.id;
    evento = e.target.className;
    console.log(evento);

}
document.querySelector('#encabezado').addEventListener('click', function(e) {
    e.target.innerText = 2 + 2;
});
//-----------------------------------------------------------------------------------------Mas eventos
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('enlace');
const boton = document.querySelector('#vaciar-carrito');

//boton.addEventListener('click', obtenerEvento);
// boton.addEventListener('dblclick', obtenerEvento);
// boton.addEventListener('mouseenter', obtenerEvento);
// boton.addEventListener('mouseleave', obtenerEvento);
// boton.addEventListener('mouseover', obtenerEvento);
// boton.addEventListener('mouseout', obtenerEvento);
// boton.addEventListener('mousedown', obtenerEvento);
// boton.addEventListener('mouseup', obtenerEvento);
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    e.preventDefault();
    console.log(`Evento: ${e.type}`);

}
//----------------------------------------------------------------------------------event lisetener inputs
const busqueda = document.querySelector('#buscador');
busqueda.addEventListener('keydown', obtenerEvento);

function obtenerEvento(e) {
    console.log(busqueda.value);
    console.log(`EVENTO: ${e.type}`);
}
//------------------------------------------------------------------Bubbling
const card = document.querySelector('.card');
const infoCard = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Click en Card');
    e.stopPropagation();

    // e.stopImmediatePropagation();
});

infoCard.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Click en infoCard');
    e.stopPropagation();
    // e.stopImmediatePropagation();
});
agregarCarrito.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Click en agregarCarrito');
    e.stopPropagation();
    // e.stopImmediatePropagation();
});
//------------------------------------------------------------------------------Delegation

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();
    // console.log('Click');
    // console.log(e.target.classList);
    if (e.target.classList.contains('borrar-curso')) {
        console.log(e.target.parentElement.parentElement.remove());

    }
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Curso Agregado');
    }
}
//----------------------------------------------------------------------Local Storage
localStorage.setItem('nombre', 'Gabriel');
// localStorage.removeItem('nombre');
sessionStorage.setItem('nombre', 'Gabriel');
const nombre = localStorage.getItem('nombre');
console.log(nombre);
localStorage.clear();