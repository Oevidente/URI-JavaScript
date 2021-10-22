/* Ler o nome do vendedor
o número de horas trabalhadas (inteiro)
o valor por hora (real)
calcule o salário
Imprima o número do funcionário
e resultado em numero REAL com R$ */
let funcionario = parseInt(prompt('Digite o número do funcionário:'));
let horasTrabalhadas = parseInt(prompt('Digite a quantidade de horas trabalhadas:'));
let valorHora = parseFloat(prompt('Digite o salário-hora:'));

let salário = parseFloat(valorHora * horasTrabalhadas);

alert(`FUNCIONÁRIO = ${funcionario}
SALÁRIO = R$ ${salário.toFixed(2)}`);
console.log(`FUNCIONÁRIO = ${funcionario}
SALÁRIO = R$ ${salário.toFixed(2)}`);
