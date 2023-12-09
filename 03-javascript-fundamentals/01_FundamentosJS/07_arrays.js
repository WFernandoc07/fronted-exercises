// Arrays
console.log("----------- Arrays --------------")

// Declarar un array
let array = [0, 1, 2, 3, 4, 5]

console.log(array)
console.log(array[0])
console.log(array.length - 1)

// Array de Strings
let nombres = ["ederson", "stones", "akanji", "rodri"]
console.log(nombres)

// Array de objetos
let alineacion = [
  {
    name: "ederson",
    dorsal: 23,
  },
  {
    name: "diaz",
    dorsal: 3,
  },
  {
    name: "stones",
    dorsal: 5,
  },
  {
    name: "erling",
    dorsal: 9,
  }
]

console.log(alineacion)
console.log(alineacion[2])
console.log(alineacion[2].name)
console.log(alineacion[2].dorsal)

// Array de arrays y números
let numbers = [0, 1, 2, [3, 4, 5]]
console.log(numbers[3][1])
