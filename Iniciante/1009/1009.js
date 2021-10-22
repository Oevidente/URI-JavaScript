/* Ler o nome do vendedor (string)
o salário FIXO (real)
total de vendas no mês em dinheiro (real)
calcule a comissão de 15%
calcule o salário fixo + comissão
Imprima "TOTAL =" salário
e resultado em numero REAL com R$ */
let vendedor = prompt('Digite o nome do vendedor:');
let salarioFixo = parseFloat(prompt('Digite o salário fixo:'));
let vendas = parseFloat(prompt('Digite o montante em vendas:'));
let comissão = vendas * (15/100); /*versão que fiz de cabeça*/

let salárioTotal = salarioFixo + comissão;

alert(`TOTAL = R$ ${salárioTotal.toFixed(2)}`);
console.log(`TOTAL = R$ ${salárioTotal.toFixed(2)}`);
