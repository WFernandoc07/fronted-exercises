console.log("Hello world")
// Click en el menú hamburguesa
const menuOpen = document.getElementById("navbar-menu")
menuOpen.addEventListener('click', function(e){
  // alert("hello")
  let navabarItems = document.getElementById("navbarItems")
  let menuOpen = document.getElementById("menu_open")
  let menuClose = document.getElementById("menu_close")
  if (navabarItems.className == "header__navbar-items") {
    menuOpen.className += "-hide"
    menuClose.className += "-show"
    navabarItems.className += "-show"
    console.log(menuOpen.className)
  } else {
    navabarItems.className = "header__navbar-items"
    menuOpen.className = "header__navbar-menu-open"
    menuClose.className = "header__navbar-menu-close"
  }
})


/**
 * button.addEventListener('click', function(event){
  console.log("event: ", event.target)
})
 */