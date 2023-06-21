// Obtener el formulario y agregar un evento al enviar
const triangleForm = document.getElementById("triangleForm")
triangleForm.addEventListener('click', handleFormSubmit)

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();

  // Obtener los valores de los lados del triángulo
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);

  // Verificar si los valores son válidos
  if (isValidTriangle(sideA, sideB, sideC)) {
    // Determinar el tipo de triángulo
    const triangleType = getTriangleType(sideA, sideB, sideC);

    // Mostrar el resultado en una alerta
    alert(`El triángulo es de tipo: ${triangleType}`);
  } else {
    alert('Los valores ingresados no forman un triángulo válido.');
  }
}

// Función para verificar si los valores forman un triángulo válido
function isValidTriangle(sideA, sideB, sideC) {
  return (
    sideA > 0 && sideB > 0 && sideC > 0 &&
    sideA + sideB > sideC &&
    sideA + sideC > sideB &&
    sideB + sideC > sideA
  );
}

// Función para determinar el tipo de triángulo
function getTriangleType(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return 'Equilátero';
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Isósceles';
  } else {
    return 'Escaleno';
  }
}
