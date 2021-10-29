/* ler a idade em dias
transformar em anos, meses e dias */
let input = require('fs').readFileSync('Iniciante/1020/stdin', 'utf8');
let lines = input.split('\n').map(item => parseInt(item));

let diasEntrada = lines.shift();

let ano = parseInt(diasEntrada/365)
let mes = parseInt((diasEntrada%365)/30)
let dias = parseInt((diasEntrada%365)%30);

console.log(`${ano} ano(s)
${mes} mes(es)
${dias} dia(s)`);