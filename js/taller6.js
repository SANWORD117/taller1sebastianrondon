// Variables globales
var currentShape;

// Función para abrir la ventana modal
function openModal(shape) {
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modal-title');
  var modalForm = document.getElementById('modal-form');
  var modalResult = document.getElementById('result');
  var input2 = document.getElementById('input2');
  var label2 = document.getElementById('label2');
  
  currentShape = shape;
  modal.style.display = 'block';

  // Configurar el título y el formulario de la ventana modal según la figura seleccionada
  if (shape === 'circle') {
    modalTitle.textContent = 'Círculo';
    label2.textContent = 'No aplicable';
    input2.style.display = 'none';
  } else if (shape === 'triangle') {
    modalTitle.textContent = 'Triángulo';
    label2.textContent = 'Altura:';
    input2.style.display = 'inline';
  } else if (shape === 'rectangle') {
    modalTitle.textContent = 'Rectángulo';
    label2.textContent = 'Ancho:';
    input2.style.display = 'inline';
  } else if (shape === 'square') {
    modalTitle.textContent = 'Cuadrado';
    label2.textContent = 'No aplicable';
    input2.style.display = 'none';
  }

  // Limpiar el formulario y el resultado anterior
  modalForm.reset();
  modalResult.textContent = '';
}

// Función para cerrar la ventana modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Función para calcular el perímetro o el área
function calculate() {
  var input1 = parseFloat(document.getElementById('input1').value);
  var input2 = parseFloat(document.getElementById('input2').value);
  var modalResult = document.getElementById('result');
  
  var result;
  if (currentShape === 'circle') {
    var perimeter = 2 * Math.PI * input1;
    var area = Math.PI * Math.pow(input1, 2);
    result = 'Perímetro: ' + perimeter.toFixed(2) + ', Área: ' + area.toFixed(2);
  } else if (currentShape === 'triangle') {
    var perimeter = input1 + input1 + input1;
    var area = 0.5 * input1 * input2;
    result = 'Perímetro: ' + perimeter.toFixed(2) + ', Área: ' + area.toFixed(2);
  } else if (currentShape === 'rectangle') {
    var perimeter = 2 * (input1 + input2);
    var area = input1 * input2;
    result = 'Perímetro: ' + perimeter.toFixed(2) + ', Área: ' + area.toFixed(2);
  } else if (currentShape === 'square') {
    var perimeter = 4 * input1;
    var area = Math.pow(input1, 2);
    result = 'Perímetro: ' + perimeter.toFixed(2) + ', Área: ' + area.toFixed(2);
  }
  
  modalResult.textContent = result;
}

// Asignar la función closeModal al botón de cerrar ventana modal
var closeButton = document.getElementsByClassName('close')[0];
closeButton.onclick = closeModal;