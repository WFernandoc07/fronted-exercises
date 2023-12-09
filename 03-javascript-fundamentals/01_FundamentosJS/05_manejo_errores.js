// Manejo de errores
console.log("-------- Manejo de errores --------")

function setName(name) {
  if (name.length < 4) throw console.error("El nombre es muy corto")
  if (name.length > 10) throw console.error("El nombre es muy largo")

  console.log("El nombre es correcto ", name)
}

// let nombre = prompt("Ingresa tu nombre")
let nombre = "Erling"
setName(nombre)

// Try Catch
function setName(name) {
  let result
  try {
    if (name.length < 4) throw "short"
    if (name.length > 10) throw "large"
    result = `El nombre ${name} es correcto`

  } catch (error) {
    if (error == "short")
    {
      console.log("El error es muy corto")
    }
    else if (error == "large") {
      console.log("El error es muy largo")
    }
  }finally {
    console.log("finally")
    if (result) {
      console.log("result: ",result)
    }
  }
}

let nombre1 = prompt("Ingresa un nombre")
setName(nombre1)