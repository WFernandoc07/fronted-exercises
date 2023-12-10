console.log("hello world")

const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
  nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible")
})

nav.addEventListener("mouseover", () => {
  nav.classList.add("visible")
})

nav.addEventListener("mouseout", () => {
  nav.classList.remove("visible")
})
