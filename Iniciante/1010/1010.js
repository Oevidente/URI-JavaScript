/* Ler o código da peça1
a quantidade de peça1
o valor de cada peça1
e o mesmo com a peça2
Calcule o total a ser pago */

let peça1 = [
    código = parseInt(prompt('Digite o código da peça 1')),
    quantidade = parseInt(prompt('Digite a quantidade da peça 1')),
    valor = parseFloat(prompt('Digite o valor da peça1 (uni):'))
];
let peça2 = [
    código = parseInt(prompt('Digite o código da peça 2')),
    quantidade = parseInt(prompt('Digite a quantidade peça 2')),
    valor = parseFloat(prompt('Digite o valor da peça 2 (uni):'))
];

let totalPeça1 = peça1[2] * peça1[1];
let totalPeça2 = peça2[2] * peça2[1];

let totalPagar = totalPeça1+totalPeça2;

alert(`TOTAL A PAGAR = R$${totalPagar.toFixed(2)}`);
console.log(`TOTAL A PAGAR = R$${totalPagar.toFixed(2)}`);
