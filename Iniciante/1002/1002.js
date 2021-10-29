let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item => parseFloat(item));
// lines.shift()

const pi =3.14159;
//função parseFloat transforma strings em números reais
let r = lines.shift();
// ** = potenciação 
let res = (r*r*pi).toFixed(4);
console.log(`A=${res}`);