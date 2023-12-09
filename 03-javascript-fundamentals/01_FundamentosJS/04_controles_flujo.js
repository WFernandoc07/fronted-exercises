// Controles de flujo
console.log("------- Controles de flujo ---------")

// if else
// let edad = prompt("Ingresa tu edad")

let edad = 20

if (edad > 18) {
  console.log("Tienes acceso")
} else {
  console.log("No tienes acceso")
}

// if else if
// let edad1 = prompt("Ingresa tu edad")
let edad1 = 20

if (edad1 > 21) {
  console.log("Tienes acceso")
} else if (edad1 == 20) {
  console.log("Hay una promoción para ti")
} else {
  console.log("No puedes ingresar")
}


// switch
let fruta = prompt("Ingresa una fruta")

switch(fruta) {
  case "uva":
    console.log("Elegiste una uva")
    break
  case "fresa":
    console.log("Elegiste una fresa")
    break
  case "banana":
    console.log("Elegiste una banana")
    break
  default:
    console.log("no tenemos esa fruta")
}

