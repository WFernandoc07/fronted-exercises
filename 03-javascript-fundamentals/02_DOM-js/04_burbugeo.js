// Burbugeo
console.log("------ burbugeo ----")
/**
 * Significa que cuando tengamos eventos anidados el hijo va
 * a ejecutar el evento del padre.
 */
const form = document.querySelector("form")
const div = document.querySelector("div")
const p = document.querySelector("p")

form.addEventListener("click", function(e){
  alert("form")
})

div.addEventListener("click", function(e){
  e.stopPropagation() // Se utiliza para evitar el burbugeo
  alert("div")
})

p.addEventListener("click", function(e){
  e.stopPropagation()
  alert("p")
})

// Para evitar el burbugeo se usa el método
// stopPropagation
