/* Ler o nome do vendedor
o número de horas trabalhadas (inteiro)
o valor por hora (real)
calcule o salário
Imprima o número do funcionário
e resultado em numero REAL com R$ */
let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let funcionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let salario = parseFloat(valorHora * horasTrabalhadas);

// alert(`NUMBER = ${funcionario}
// SALARY = R$ ${salario.toFixed(2)}`);
console.log(`NUMBER = ${funcionario}
SALARY = U$ ${salario.toFixed(2)}`);
