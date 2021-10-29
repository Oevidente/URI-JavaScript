let input = require('fs').readFileSync('Iniciante/1003/stdin', 'utf8');
let lines = input.split('\n');

let A = parseInt(lines.shift());

let B = parseInt(lines.shift());

let soma = A + B;

console.log('SOMA = ' + soma);