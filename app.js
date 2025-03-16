// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim(); // Usamos trim() para eliminar espacios en blanco al inicio y al final

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Opcional: Mostrar el array en la consola para verificar
    console.log(amigos);
}