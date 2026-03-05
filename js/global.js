// 1. lógica do menu principal (index, obter os elementos)
const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');

// 2. definiçao das funcoes
const verificaBotao = () => {
    if (btnP1) {
        btnP1.addEventListener('click', () => window.location.href = './pages/projeto01.html');
        btnP2.addEventListener('click', () => window.location.href = './pages/projeto02.html');
        btnP3.addEventListener('click', () => window.location.href = './pages/projeto03.html');
        btnP4.addEventListener('click', () => window.location.href = './pages/projeto04.html');
    }


};

const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'voltar';
    btnVoltar.style.marginTop = '20px';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
};

// 3. lógica de execução (o "cerebro" do script)
if (btnP1) {
    // se o bntP1 existe, estamos na index
    verificaBotao();
} else {
    // se não existe, arruma-se que estamos em uma página de projeto, usando o método addEventListener em vez da propriedade onload //
    window.addEventListener('load', () => {
        console.log('a página carregou usando um método');
        criarBotaoVoltar();

    });
};