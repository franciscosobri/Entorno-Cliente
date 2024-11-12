// Ejercicio 1: Creación y Adición de Nodos
// 1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv.

let nuevoDiv = document.createElement('div');

// 1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo.

let textoNuevo = document.createTextNode('Nuevo elemento de lista');

// 1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.

nuevoDiv.appendChild(textoNuevo);
let elementLipsum = document.getElementById("lipsum");
elementLipsum.appendChild(nuevoDiv);

// 1.4. Añade a la página:

// Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita)

let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = 'Nuevo párrafo <strong>añadido</strong> por javascript';
elementLipsum.appendChild(nuevoParrafo);

// Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”

let dato1 = document.getElementById('dato1');

let nuevoLabel = document.createElement('label');
nuevoLabel.for = 'input1bis';
let textoLabel = document.createTextNode('Hola');
nuevoLabel.appendChild(textoLabel);
let nuevoInput = document.createElement('input');
nuevoInput.id = 'input1bis';
nuevoInput.type = 'text';
nuevoInput.value = 'Hola';

dato1.after(nuevoInput);
nuevoLabel.after(nuevoInput);

// Ejercicio 2: Inserción de Nodos
// 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Almacena este nodo en una variable llamada primerParrafo.

primerParrafo = document.querySelector('#lipsum p');

// 2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y almacénalo en una variable llamada nuevoParrafo.

let nuevoParrafo2 = document.createElement('p');

let nuevoNodo2 = document.createTextNode('Este es el nuevo segundo párrafo');

nuevoParrafo2.appendChild(nuevoNodo2);

// 2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo antes del primer párrafo dentro del div "lipsum".

nuevoParrafo.before(nuevoParrafo2);

// Ejercicio 3: Reemplazo y Eliminación de Nodos
// 3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en tu página web de ejemplo. Almacena este nodo en una variable llamada primerElemento.

let primerElemento2 = document.querySelector('li');

// 3.2. Crea un nuevo elemento <li> con el texto "Nuevo elemento de lista" y almacénalo en una variable llamada nuevoElemento.

let elementoLi = document.createElement('li');
let nodeLi = document.createTextNode('Reemplazo de Li');
elementoLi.appendChild(nodeLi);

// 3.3. Utiliza el método primerElemento.replaceWith(nuevoElemento) para reemplazar el primerElemento con el nuevoElemento dentro de la lista.

primerElemento2.replaceWith(elementoLi);

// 3.4. Utiliza el método nuevoElemento.remove() para eliminar el nuevoElemento de la página.

elementoLi.remove();

// Ejercicio 4: Atributos y Estilos
// 4.1. Utiliza document.querySelector() para obtener un elemento de tu página web que tenga un atributo id. Almacena este elemento en una variable.

let elementId = document.querySelector('#cuatro');

// 4.2. Usa el método elemento.setAttribute('nombreAtributo', 'valor') para agregar un atributo "data-nuevo" con el valor "123" al elemento obtenido en el ejercicio 4.1.

elementId.setAttribute('data-nuevo' , '123');

// 4.3. Utiliza el método elemento.removeAttribute('nombreAtributo') para eliminar el atributo "data-nuevo" del elemento.

elementId.removeAttribute('data-nuevo');

// 4.4. Cambia el color de fondo de un elemento de tu página web utilizando la propiedad style.backgroundColor. Asegúrate de que el cambio de estilo se realice mediante JavaScript.

let elementoColor = document.querySelector('body');

elementoColor.style.backgroundColor = 'lightblue';

// Ejercicio 5: Clases y ClassList
// 5.1. Utiliza document.querySelector() para obtener un elemento de tu página web y asigna una clase "destacado" a este elemento utilizando la propiedad elemento.className.

let clases = document.querySelector('#cuatro');
clases.className = 'destacado';

// 5.2. Utiliza la propiedad classList para agregar la clase "nuevo-estilo" al elemento obtenido en el ejercicio 5.1.

clases.classList.add('nuevo-estilo');

// 5.3. Emplea la propiedad classList para eliminar la clase "destacado" del elemento obtenido en el ejercicio 5.1.

clases.classList.remove('destacado');

// 5.4. Comprueba si el elemento obtenido en el ejercicio 5.1 tiene la clase "nuevo-estilo" utilizando el método classList.contains().

console.log(clases.classList.contains('nuevo-estilo'));
