//llamo el Buttom
const confirmar=document.getElementById("confirmar")

//Creo el Evento del Buttom
confirmar.addEventListener("click",
function confirmacion(e) {
  e.preventDefault()

const nombre=document.getElementById("nombre").value
const apellido=document.getElementById("apellido").value
const materia=document.getElementById("materia").value
  
  if (nombre == 1 && apellido == 1 && materia == 1) {
    alert("El instructor es Veridico")
  } else if (nombre == 2 && apellido == 2 && materia == 2) {
    alert("El instructor es Veridico")
  } else if (nombre == 3 && apellido == 3 && materia == 3) {
    alert("El instructor es Correcto")
  } else {
    alert("El Instructor NO es Veridico")
  }

})

// oinstructores.push(instructor)

// console.log(oinstructores)