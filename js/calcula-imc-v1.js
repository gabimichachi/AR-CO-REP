
// obter o elementos 
// tratar os dados (converter, exibir os dados de forma correta)
// fazer os cálculos

function calcularIMC() {
    // capturar os valores dos campos de entrada
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
    const resultado = document.getElementById('resultText');
  
    // Validar os dados de entrada
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = 'por favor, insira valores válidos.';
      return;
    }
  
    // calcular o IMC
    const imc = peso / (altura * altura);
    let classificacao;
  
    // classificar o IMC
    if (imc < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'sobrepeso';
    } else {
      classificacao = 'obesidade';
    }
  
    // exibir o resultado
    resultado.textContent = 'seu IMC é ' + imc.toFixed(2) + ' (' + classificacao + ').';
  }
  
  function limparCampos() {
    // resetar o formulário e o texto de resultado
    document.getElementById('imcForm').reset();
    document.getElementById('resultText').textContent = 'preencha os campos e clique em "calcular".';
  }
  