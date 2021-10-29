/* Ler quatro valores inteiros
calcule a diferença do produto de A e B pelo 
produto de C e D
EX.: A*B -C*D
Imprima "DIFERENÇA = " e o diferenca */

let A = parseInt(prompt('Digite o primeiro valor'));
let B = parseInt(prompt('Digite o segundo valor'));
let C = parseInt(prompt('Digite o terceiro valor'));
let D = parseInt(prompt('Digite o quarto valor'));

let diferenca = (A*B)-(C*D);
alert(`DIFERENÇA = ${diferenca}`);
console.log(`DIFERENÇA = ${diferenca}`);
