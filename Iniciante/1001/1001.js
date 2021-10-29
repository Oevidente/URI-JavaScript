//função Number transforma strings em números
//função parseInt transforma strings em números inteiros
//função parseFloat transforma strings em números reais
let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item => parseInt(item));

let A = lines.shift();
let B = lines.shift();
let resultado = A + B;

console.log(`${A} + ${B}
X = ${resultado}`);
