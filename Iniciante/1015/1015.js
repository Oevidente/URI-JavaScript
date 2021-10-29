/* leia 4 valores
2 strings
2 floats
resultado.toFixed(4) */
let input = require('fs').readFileSync('Iniciante/1015/stdin', 'utf8');
let lines = input.split('\n');
let linha1 = lines.shift().split(' ');
let linha2 = lines.shift().split(' ');

let x1 = parseFloat(linha1[0]);
let y1 = parseFloat(linha1[1]);

let x2 = parseFloat(linha2[0]);
let y2 = parseFloat(linha2[1]);

let calculoBase = ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
let distancia = Math.sqrt(calculoBase);
//Math.sqrt(valor); retorna a raiz quadrada daquele valor
console.log(distancia.toFixed(4));
