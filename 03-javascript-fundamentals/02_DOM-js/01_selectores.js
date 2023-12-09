// DOM - Document Objec Model
console.log("--- DOM -----")

// Selectores: Permite atrapar elemtos del documento html
console.log("---- Selectores -----")

console.log("%O", document)
document.querySelector("body").style.color = "orangered"

console.log("%O", document.getElementById("ul"))


console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li").forEach(
  function(li){
    console.log(li)
  }
))

// Selectores relativos: 
console.log("--- Selectores Relativos ---")
let variable = document.querySelector("ul").lastChild
console.log(variable)

let variable1 = document.querySelector("ul").lastElementChild
console.log(variable1)

let variable2 = document.querySelector("ul").firstElementChild
console.log(variable2)

let variable3 = document.querySelector("ul").firstElementChild