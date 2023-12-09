// Objetos globales y métodos
console.log("Objetos gloabales y métodos")

// Primitivos
/*
* String
* Number
* Boolean
* Undefined
* Null
* Symbol
* BigInt

--- Javascript enuelve a los primitivos automáticamente
y los convierte en objeto.
*/
let persona = {
  nombre: "akanji",
  saludar() {
    console.log("Te saluda", this.nombre)
  }
}

console.log(persona.nombre)
persona.saludar()


// ----------------
let nombre = "Kyle"
console.log(nombre.length)

console.log(nombre.toUpperCase()) // Hacer en mayúsculas
console.log(nombre.toLocaleLowerCase()) // Hacer en minúsculas

let nombreSplit = nombre.split("")
console.log(nombreSplit)


// Objetos
/*
 * Todo lo demás
 * Como los arreglos ...
 * y las funciones
 * también 
*/
console.log(Math.E)
console.log(Math.PI)
console.log(Math.random()) // Da un valor aleatorio en 0 y 1
console.log(Math.round(10.3)) // Redondea un valor decimal
console.log(Math.ceil(7.1)) //Redondea al mayor
console.log(Math.floor(4.999)) //Redondea al menor

let hoy = new Date()
console.log(hoy)

console.log(hoy.getDate()) // Se obtiene el día (06)
console.log(hoy.getMonth()) // Se obtiene el mes - 0 Enero y 11 diciembre
console.log(hoy.getFullYear()) // Se obtiene el año

// Time estamp - Media noche del 01 de enero de 1970
// https://date-fns.org/
console.log(hoy.getTime())

// Métodos asociados a arreglos

let arr = [
  "kiwi",
  "naranja",
  "manzana",
  "piña"
]
console.log("----- métodos asociados a arreglos ------")
console.log(arr.length)
arr.forEach(function(item, indice) {
  console.log(`${indice} - ${item}`)
})


console.log("---- Map ---")
let arrConvert = arr.map(function(item, indice){
  // el método map siempre retorna algo
  return `<p data-id="${indice}">${item}</p>` //Se convierte a elemento HTML
})
console.log(arrConvert.join())


let filtrado = arr.filter(function(item, indice){
  return item.length < 5

})

console.log(filtrado)

