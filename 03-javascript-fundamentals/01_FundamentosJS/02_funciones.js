// # Funciones
// ## Función de clarativa
console.log(suma("Antes de: ", suma(5, 4)))

console.log("Funciones en JS")
function suma(a, b){
  return a + b
}

console.log("Después de: ",suma(2,3))

// ## Expresión de función
let restar = function(a, b) {
  return a - b
}

console.log(restar(4, 2))

// ## Arrow Funtion --- Toma el díst del padre
// --- Con una sola línea
const multiplicar = (a, b) => a * b // Se usa return implícitamente

console.log(multiplicar(2,3))

// --- Con varias líneas, se usa return explícitamente
const multiplicar2 = (a, b) => {
  return(a * b)
}
console.log(multiplicar2(6, 4))

// Funciones - Ciudadano de primera clase
function sumar(a, b) {
  return a + b
}

let suma2 = sumar

console.log(suma(2,3))

let suma3 = sumar(3, 4)
console.log("suma 3 = ", suma3)

console.log(sumar(suma(4, 4), 4))


// Closure: es la combinación de una función y el ámbito o contexto donde
// * esta fue declarada, estas recordarán el contexto donde fue creada,
// * de esta manera podremos mantener los valores y referencias.
function sumaBase(x) {
  return function(y) {
    return x + y
  }
}

const sumabase5 = sumaBase(5)
console.log(sumabase5(4))
console.log(sumabase5(10))

function count() {
  let count = 0

  return function() {
    return count = count + 1
  }
}

let count1 = count()

console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())

// Ámbito de una función
function uno() {
  console.log("uno")
}

function dos() {
  console.log("dos")
  function tres() {
    console.log("tres")
    uno() //  desde el ábito local es posible acceder al ámbito global
  }
  tres()
}
//tres() //--- No se puede acceder a un ámbito local
dos()