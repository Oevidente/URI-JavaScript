let input = require('fs').readFileSync('Iniciante/1016/stdin', 'utf8');
let lines = input.split('\n');

let distancia = parseInt(lines.shift());

let minutos = distancia*2;

console.log(`${minutos} minutos`);
