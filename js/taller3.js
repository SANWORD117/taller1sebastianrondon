//llamo el Buttom
const convertir=document.getElementById("convertir")

//Creo el Evento del Buttom
convertir.addEventListener("click",
function conversion() {

  const opc1=document.getElementById("opc1").value
  const opc2=document.getElementById("opc2").value
  const grados = document.getElementById("input").value;

  //Llamo el valor de los grados digitados por el usuario
  if (isNaN(grados)) {
    alert("Ingrese un valor numérico válido.");
    return;
  }

  let resultado

  
  if (opc1 == 1 && opc2 == 2) {

    resultado = (grados - 32) * 5/9

    document.getElementById("resultado").innerText = grados + " grados Fahrenheit equivalen a " + resultado + " grados Celsius.";
    alert(grados + " grados Fahrenheit equivalen a " + resultado + " grados Celsius.")

    
  } else if (opc1 == 1 && opc2 == 3) {

    resultado = (grados - 32) * 5/9 + 273.15

    document.getElementById("resultado").innerText = grados + " grados Fahrenheit equivalen a " + resultado + " grados Kelvin.";
  alert(grados + " grados Fahrenheit equivalen a " + resultado + " grados Kelvin.")

  } else if (opc1 == 2 && opc2 == 1) {

    resultado = (grados * 9/5) + 32

    document.getElementById("resultado").innerText = grados + " grados Celsius equivalen a " + resultado + " grados Fahrenheit.";
    alert(grados + " grados Celsius equivalen a " + resultado + " grados Fahrenheit.")


  } else if (opc1 == 2 && opc2 == 3) {

    resultado = grados + 273.15

    document.getElementById("resultado").innerText = grados + " grados Celsius equivalen a " + resultado + " grados Kelvin.";
  alert(grados + " grados Celsius equivalen a " + resultado + " grados Kelvin.")

  } else if (opc1 == 3 && opc2 == 1) {

    resultado = (grados - 273.15) * 9/5 + 32;

    document.getElementById("resultado").innerText = grados + " grados Kelvin equivalen a " + resultado + " grados Celsius.";
    alert(grados + " grados Kelvin equivalen a " + resultado + " grados Celsius.")

  } else if (opc1 == 3 && opc2 == 2) {

  resultado = grados - 273.15

  document.getElementById("resultado").innerText = grados + " grados Kelvin equivalen a " + resultado + " grados Fahrenheit.";
    alert(grados + " grados Kelvin equivalen a " + resultado + " grados Fahrenheit.")

  } else {
    alert("La conversión es imposible")
  }

})