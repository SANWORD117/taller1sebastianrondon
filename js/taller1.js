var boton = document.getElementById("miBoton");

function mostrarLongitud() {
  var palabraInput = document.getElementById("palabra");
  var resultado = document.getElementById("resultado");
  // Ejemplo de uso
  var palabra = palabraInput.value;
  var longitud = palabra.length;
  console.log(longitud); // Imprime 4
  alert("La longitud de la palabra '" + palabra + "' es: " + longitud);
};

function convertirMayusculas() {
  var input = document.getElementById("palabra");
  var palabra = input.value;
  var palabraMayusculas = palabra.toUpperCase();
  document.getElementById("resultado").innerHTML = palabraMayusculas;
  alert(palabraMayusculas);
}

function convertirMinusculas() {
  var input = document.getElementById("palabra");
  var palabra = input.value;
  var palabraMinusculas = palabra.toLowerCase();
  document.getElementById("resultado").innerHTML = palabraMinusculas;
  alert(palabraMinusculas);
}

function obtenerPrimeraLetra() {
  var palabra = document.getElementById("palabra").value;
  var primeraLetra = palabra.charAt(0);

  alert(document.getElementById("resultado").textContent = "La primera letra es: " + primeraLetra);
}