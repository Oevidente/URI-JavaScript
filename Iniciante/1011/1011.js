/* Calcular e mostrar o volume de uma esfera
ler o valor do raio
pi = 3.14159
Fórmula = (4/3)* pi * raio ao cubo */
let input = require('fs').readFileSync('Iniciante/1011/stdin', 'utf8');
let lines = input.split('\n');

const pi = 3.14159;
let raio = parseFloat(lines.shift());;

let volume = (4.0/3) * pi * (raio**3);

console.log(`VOLUME = ${volume.toFixed(3)}`);