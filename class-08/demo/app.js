function hacerPreguntas(numero) {
	let respuesta = prompt("Pregunta " + numero);
	document.write(respuesta);
}

// for: es una estructura de control de flujo para repetir un bloque de código una cantidad de veces DETERMINADA.
// while: es una estructura de control de flujo para repetir un bloque de código una cantidad de veces DETERMINADA por una condición.

// for: necesita 3 parametros:
// - variable que va a iterar,
// - hasta cuánto va a iterar,
// - cuánto va a (crecer/decrecer) en cada iteración.

for (let index = 1; index <= 6; index = index + 1) {
	hacerPreguntas(index);
}

let x = 5;
x = x + 1; // x = 6
x = x + 1; // x = 7
x++; // x = 8

// while: SOLO necesita 1 parametro, que es la condicion:
let iterador = 1;
while (iterador <= 6) {
	hacerPreguntas(iterador);
	iterador++;
}
