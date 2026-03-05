// 1. lógica do menu principal
const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');

// 2. metódo addEventListener com uma função anônima
btnP1.addEventListener('click', function () {
    window.location.href = './pages/projeto01.html';
});

btnP2.addEventListener('click', function () {
    window.location.href = './pages/projeto02.html';
});

btnP3.addEventListener('click', function () {
    window.location.href = './pages/projeto03.html';
});

btnP4.addEventListener('click', function () {
    window.location.href = './pages/projeto04.html';
});

