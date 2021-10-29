/* Calcular a média de combustível gasto por km
a partir da distancia e do gasto
distancia = int
gasto = float
resultado.toFixed(3) km/l */
let input = require('fs').readFileSync('Iniciante/1014/stdin', 'utf8');
let lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseFloat(lines.shift());

let media = x/y;

console.log(`${media.toFixed(3)} km/l`);