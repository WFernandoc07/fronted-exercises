console.log("Hello world")
// Varibles y constantes
const navbar = document.querySelector("#navbar")
const menuOpen = document.querySelector("#menu_open")
const menuClose = document.querySelector("#menu_close")

const featuresDown = document.querySelector("#features_down")
const featuresUp = document.querySelector("#features_up")
const featuresDropdown = document.querySelector("#features_dropdown")

const companyDown = document.querySelector("#company_down")
const companyUp = document.querySelector("#company_up")
const companyDropdown = document.querySelector("#company_dropdown")

// Asignamos eventos
// Click en el menú hamburguesa
menuOpen.addEventListener("click", () => {
  navbar.classList.add("navbar")
})

menuClose.addEventListener("click", () => {
  navbar.classList.remove("navbar")
  
  featuresDown.classList.remove("navbar__list--down-expanded")
  featuresUp.classList.remove("navbar__list--up-expanded")
  featuresDropdown.classList.remove("navbar__list-dropdown--expanded")
  
  companyDown.classList.remove("navbar__list--down-expanded")
  companyUp.classList.remove("navbar__list--up-expanded")
  companyDropdown.classList.remove("navbar__list-dropdown--expanded") 
})

// Click en arrow-menu
// Features
featuresDown.addEventListener("click", () => {
  featuresDown.classList.add("navbar__list--down-expanded")
  featuresUp.classList.add("navbar__list--up-expanded")
  featuresDropdown.classList.add("navbar__list-dropdown--expanded")
})

featuresUp.addEventListener("click", () => {
  featuresDown.classList.remove("navbar__list--down-expanded")
  featuresUp.classList.remove("navbar__list--up-expanded")
  featuresDropdown.classList.remove("navbar__list-dropdown--expanded")  
})

// Company
companyDown.addEventListener("click", () => {
  companyUp.classList.add("navbar__list--up-expanded")
  companyDown.classList.add("navbar__list--down-expanded")
  companyDropdown.classList.add("navbar__list-dropdown--expanded")
})

companyUp.addEventListener("click", () => {
  companyDown.classList.remove("navbar__list--down-expanded")
  companyUp.classList.remove("navbar__list--up-expanded")
  companyDropdown.classList.remove("navbar__list-dropdown--expanded")  
})




/**
 * button.addEventListener('click', function(event){
  console.log("event: ", event.target)
})
 */