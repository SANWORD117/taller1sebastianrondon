//llamo el Buttom
const confirmar=document.getElementById("confirmar")

//Creo el Evento del Buttom
confirmar.addEventListener("click",
function confirmacion() {

const nombre=document.getElementById("nombre").value
const apellido=document.getElementById("nombre").value
const materia=document.getElementById("nombre").value
  
  if (nombre == 1 && apellido == 1 && materia == 1) {
    alert("El instructor es Veridico")
  } else if (nombre == 1 && apellido == 2 && materia == 1) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 1 && apellido == 3 && materia == 1) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 1 && apellido == 1 && materia == 2) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 1 && apellido == 1 && materia == 3) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 2 && apellido == 2 && materia == 2) {
    alert("El instructor es Veridico")
  } else if (nombre == 2 && apellido == 1 && materia == 2) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 2 && apellido == 3 && materia == 2) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 2 && apellido == 2 && materia == 1) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 2 && apellido == 2 && materia == 3) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 3 && apellido == 3 && materia == 3) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 3 && apellido == 1 && materia == 3) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 3 && apellido == 2 && materia == 3) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 3 && apellido == 3 && materia == 1) {
    alert("El instructor NO es Correcto")
  } else if (nombre == 3 && apellido == 3 && materia == 2) {
    alert("El instructor NO es Correcto")
  } else {
    alert("ERROR")
  }

})

// oinstructores.push(instructor)

// console.log(oinstructores)