let input = require('fs').readFileSync('stdin', 'utf8');
let linhas = input.split(' ').map(item => parseInt(item));

let A = linhas[0];

let B = linhas[1];

let soma = A + B;

console.log('SOMA = ' + soma);