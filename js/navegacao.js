// 1. lógica das páginas de projeto
function criarBotaoVoltar(){
    // 1. criar o elemento botão
    const btnVoltar = document.createElement('button');

    // 2. definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // 3. lógica do click
    btnVoltar.addEventListener('click', function() {
        window.location.href = '../index.html'
    });

    // 4. add btn no final do index
    document.body.appendChild(btnVoltar);

};

// const criarBtnVoltar() =>{

// };

window.onload = criarBotaoVoltar();  