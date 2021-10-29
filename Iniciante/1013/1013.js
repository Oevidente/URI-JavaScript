/* Ler 3 valores inteiros
aponte o maior entre eles
seguido da mensagem "eh o maior" */
let input = require('fs').readFileSync('Iniciante/1013/stdin', 'utf8');
let lines = input.split('\n');
let linha = lines.shift().split(' ');

let a = parseInt(linha[0]);
let b = parseInt(linha[1]);
let c = parseInt(linha[2]);

let result = parseInt((a + b + Math.abs(a - b)) / 2);

let maior = parseInt((result + c + Math.abs(result - c)) / 2);

console.log(`${maior} eh o maior`);