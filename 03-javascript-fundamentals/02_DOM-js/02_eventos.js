// Eventos
console.log("----- Eventos -----")
// Eventos por atributos
console.log("----- Eventos por atributos y propiedades -----")

function hello() {
  alert('Hello World!!!')
}


function bye() {
  alert("Good bye world!!")
}



// Eventos por propiedades
const button = document.querySelector("button")
console.log("button %O", button)
// button.onclick = hello
button.onmouseover = hello
button.onmouseout = bye

/**
 * Fases de la captura
 * - Fases de captura
 * - Fase objetivo
 * - Fase burbugeo
 */