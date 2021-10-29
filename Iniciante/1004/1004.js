/*LER DOS VALORES INTEIROS
CALCULE O PRODUTO (MULTIPLICAÇÃO) ENTRE ELES
E ATRIBUA À VARIÁVEL PROD
IMPRIMA PROD COM A MENSAGEM "PROD = " */
let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

function PROD() {
    let num1 = parseInt(lines.shift());
    let num2 = parseInt(lines.shift());
    alert(`PROD = ${num1 * num2}`);
    repetir();
}
let opcao;
function repetir() {
    opcao = parseInt(prompt(`Diz tu, boy... vai tentar de novo?
    1 - Oxe, dale!
    2 - Nam, tô de boa`));
    if (opcao === 1) {
        PROD();
    } else if (opcao === 2) {
        alert('Tranquilo, falou.');
    } else {
        alert('Ei boy, é sim ou não, qual foi?');
        repetir();
    }
}
PROD();