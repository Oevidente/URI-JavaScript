/* Ler o código da peca1
a quantidade de peca1
o valor de cada peca1
e o mesmo com a peca2
Calcule o total a ser pago */
let input = require('fs').readFileSync('Iniciante/1010/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');

let line2 = lines.shift().split(' ');

let IdItemUm = line1[0];

let numPecaUm = line1[1];

let vlrPecaUm = line1[2];

let IdItemDois = line2[0];

let numPecaDois = line2[1];

let vlrPecaDois = line2[2];

let totalPecaUm = numPecaUm * vlrPecaUm;

let totalPecaDois = numPecaDois * vlrPecaDois;

let total = totalPecaUm + totalPecaDois;

// alert(`VALOR A PAGAR: R$${totalPagar.toFixed(2)}`);
console.log(`VALOR A PAGAR: R$${total.toFixed(2)}`);
