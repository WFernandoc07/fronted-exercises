// Objetos
console.log("------- Objetos en JS --------")
let erling = {
  name: "erling",
  lastname: "haland",
  age: 24,
  getName: function() {
    console.log(this)
  }
}

console.log(erling.name, erling.lastname, erling.age)
console.log("Name:", erling["name"])
erling.getName()

let laptop = {
  marca: "lenovo",
  anio: 2020,
  procedencia: "usa",
  getData: function() {
    return `La marca es ${this.marca} del año ${this.anio} de ${this.procedencia}`
  }
}
console.log(laptop.marca, laptop.anio, laptop.procedencia)
console.log(laptop.getData())
