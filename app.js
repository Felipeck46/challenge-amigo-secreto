// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let entradaAmigo = document.getElementById('amigo');
    let nombreAmigo = entradaAmigo.value.trim(); // Usamos trim() para eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

 // Agregar el nombre al arreglo de amigos
 amigos.push(nombreAmigo);

 // Limpiar el campo de entrada
 entradaAmigo.value = "";

 // Mostrar la lista actualizada de amigos
 mostrarAmigos();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
 // Obtener el elemento <ul> donde se mostrarán los amigos
 let listaAmigos = document.getElementById('listaAmigos');

 // Limpiar la lista antes de agregar los elementos (para evitar duplicados)
 listaAmigos.innerHTML = "";

 // Recorrer el arreglo amigos con un bucle for
 for (let i = 0; i < amigos.length; i++) {
     // Crear un nuevo elemento <li>
     let elementoLista = document.createElement('li');

     // Asignar el nombre del amigo como contenido del <li>
     elementoLista.textContent = amigos[i];

     // Agregar el <li> a la lista <ul>
     listaAmigos.appendChild(elementoLista);
 }
   
}
//Función para sortear a los amigos

function sortearAmigo() {
    // Verificar si el arreglo de amigos está vacío
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega tus amigos para el sorteo.");
        return; // Detener la ejecución si no hay amigos
    }

    // Obtener un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con ID "resultado"
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}

    