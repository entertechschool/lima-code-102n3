"use strict"; // Habilitar el Modo Estricto.
// let x = 5;
// console.log(x);

// Funciones:
// - Codigo que ejecuta una tarea específica.
// - Se pueden llamar desde multiples.
// - Un conjunto de instrucciones que ejecutan una tarea específica.
// - Hay que definirla, y LLAMARLA.
// - Realiza una tarea.
// - Agrupa líneas de código con instrucciones relacionadas.
// - Las funciones al igual que las variables, deben tener un nombre descriptivo.
// - Las funciones pueden recibir parámetros.

function factorial(numero) {
	if (numero === 0 || numero === 1) {
		return 1;
	}
	return factorial(numero - 1) * numero;
}

// Definimos
function saludar() {
	console.log("Hola alumnos del 102");
}
// Llamamos
saludar();

console.log(factorial(8));
