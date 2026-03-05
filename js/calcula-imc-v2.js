// CAPTURA GLOBAL DOS ELEMENTOS

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



// FUNÇÃO PRINCIPAL

function calcularIMC() {

  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('por favor, insira valores válidos.');
    return;
  }

  // Cálculo
  const imc = peso / (altura * altura);
  let classificacao = '';

  // Classificação
  if (imc < 18.5) {
    classificacao = 'abaixo do peso';
  } else if (imc < 25) {
    classificacao = 'peso normal';
  } else if (imc < 30) {
    classificacao = 'sobrepeso';
  } else {
    classificacao = 'obesidade';
  }

  // Template String
    mostrarResultado("seu IMC é ${imc.toFixed(2)} (${classificacao}).");
};



// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inputPeso.focus();
  mostrarResultado('preencha os campos e clique em "calcular".');
}