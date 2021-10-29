/* Ler o nome do vendedor (string)
o salário FIXO (real)
total de vendas no mês em dinheiro (real)
calcule a comissão de 15%
calcule o salário fixo + comissão
Imprima "TOTAL =" salário
e resultado em numero REAL com R$ */
let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

const porcentagem = (15/100);

let vendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());
let comissao = vendas * porcentagem; /*versão que fiz de cabeça*/

let salárioTotal = salarioFixo + comissao;

// alert(`TOTAL = R$ ${salárioTotal.toFixed(2)}`);
console.log(`TOTAL = R$ ${salárioTotal.toFixed(2)}`);
