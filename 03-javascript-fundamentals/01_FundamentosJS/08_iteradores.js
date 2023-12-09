// Iteradores
console.log("--------- Iteradores ----------")

// For
console.log("--------- For --------")
for (let index = 0; index < 4; index++) {
  console.log(index)
}

// ------------
let numbers = [0, 1, 2, 3, 4, 5]
for (let index = 0; index < numbers.length; index++) {
  console.log("index", numbers[index])  
}

// -----------
let suma = 0
for (let index = 0; index < numbers.length; index++) {
  suma = suma + numbers[index]
}
console.log("Suma: ", suma)

// While
console.log("--------- While --------")
let number = 20
while (number > 10) {
  number--
  console.log(number)  
}

//do while
console.log("--------- Do While --------")
do {
  console.log("Se ejecutará aunque sea una vez!!")
}while(number > 20)

