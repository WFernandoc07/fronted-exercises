// Event Delegation
console.log("---- event delegation ----")
/**
 * Permite delegar eventos desde los
 * padres a los hijos.
 */

const ul = document.querySelector("ul")
ul.addEventListener("click", function(e) {
  if (e.target.tagName == "LI"){
    console.log("li!!", e.target)
  }
})