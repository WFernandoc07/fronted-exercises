// Event Object
console.log('---- event object -----')
const button = document.querySelector('button')
button.addEventListener('click', function(event){
  console.log("event: ", event.target)
})