// CAPTURA GLOBAL DOS ELEMENTOS

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
    textoResultado.textContent = mensagem;
}

function calcularIMC() {
    // Capturar os valores dos campos de entrada
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
    const resultado = document.getElementById('resultText');
  
    // Validar os dados de entrada
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = 'por favor, insira valores válidos.';
      return;
    }
  
    // Calcular o IMC
    const imc = peso / (altura * altura);

    let classificacao = '';

    classificacao = classificarIMC(imc)
    
    // Exibir o resultado
    mostrarResultado (`ceu IMC é ${imc.toFixed(2)} (${classificacao}).`);
  };
  
//resultado.textContent 

function classificarIMC(valorImc){


    // Classificar o IMC
    if (valorImc < 18.5) return 'abaixo do peso';
    if (valorImc < 25) return 'peso normal';
    if (valorImc < 30) return 'sobrepeso';
    return 'obesidade';
    
};


  function limparCampos() {
    // Resetar o formulário e o texto de resultado
    document.getElementById('imcForm').reset();
    document.getElementById('resultText').textContent = 'preencha os campos e clique em "calcular".';
  };