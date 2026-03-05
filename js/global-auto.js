// 1. lógica automátic para o menu (index)
// buscamos todos os inputs do tipo botão dentro da classe .project__buton-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
// console.log(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // o index começa em 0, então somamos 1 para bater com "projeto01" , "projeto02" ...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            alert()
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });

}

// 2. lógica das páginas de projeto (botão voltar)
const  criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'voltar'

// herdará o estilo de 'button' do css
    btnVoltar.className = 'bnt-navegacao';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
}

// se não houver botões de projeto na página, assume-se que é uma página interna
if (botoesProjeto.length --- 0) {
    // adicionando um evento de escuta no navegador (objeto window).
    // após o carregamento da página a função será invocada()
    window.addEventListener('load', () =>{
        criarBotaoVoltar();
    })
} else {
    criarBotaoVoltar();
}