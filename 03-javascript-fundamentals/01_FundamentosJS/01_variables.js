

// Imprimir una alerta con JS
document.querySelector("button")
.onclick = function() {
  alert('Hola Mundo')
}

// Imprimir valores en la consola
console.log("Mensaje: ", 2, [], {})

// Variables e imprimir en la consola
let nombre = "Erlin Haaland"

console.log("Nombre: ", nombre)
console.error("error!!");
console.warn("warnings!!")
console.dir(document)

// Definir variable
let nombre_apellido = "Phil Foden"
let edad = 26

console.log(nombre_apellido, edad)

let sumaEdad2 = edad + 2
let sumaEdad3 = edad + 3 // Con let se pueden sobreescribir la variable edad

edad = 28
console.log(edad)

const pi = 3.14 // Con const no se pueden sobreescribir las variables
//pi = 2

// Tipos de datos que maneja JS
let nombres = "string"
let age = 26
let bool = true // false
let indefinido
let nulo = null
let simbolo = Symbol("abc")
let objeto = {}

console.log("nombre: ", typeof nombres)
console.log("age: ", typeof age)
console.log("bool: ", typeof bool)
console.log("indefinido: ", typeof indefinido)
console.log("nulo: ", typeof nulo)
console.log("simbolo: ", typeof simbolo)
console.log("objeto: ", typeof objeto)

// Cambiar tipos de datos
console.log("uno" + "dos")

let numero1= "1.5"
let numero2= "25.54"

let total = numero1 + numero2

let total2 = parseInt(numero1) + parseInt(numero2)
let total3 = parseFloat(numero1) + parseFloat(numero2)

let catorce = 14
let catorceStr = catorce.toString()

console.log(total, total2, total3)
console.log(catorce.toString(), typeof(catorceStr))

// SCOPE o Alcance, acceso a una variable
// Alcance global
let nombreE = "Erling"
console.log(nombreE)
// Alcance local: vivirá en los bloques
{
  let nombreF = "Phil"
  console.log("nombreF: ", nombreF)
  console.log(nombreE) // desde el scope local podemos acceder al scope global
}

// console.log(nombreF) -- No se puede acceder porque está en alcance local

