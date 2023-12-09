// Fases de la captura de los elementos del DOM
// Flujo de los eventos
// Fase de captura
//Fase objetivo
// Fase de bubugeo
//---- Tercer parámetro de addEventListner
const form = document.querySelector("form")
const div = document.querySelector("div")
const p = document.querySelector("p")

form.addEventListener("click", function(e){
  alert("form")
}, true)

div.addEventListener("click", function(e){
  alert("div")
}, true)

p.addEventListener("click", function(e){
  alert("p")
})
