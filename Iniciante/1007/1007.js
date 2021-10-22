/* Ler quatro valores inteiros
calcule a diferença do produto de A e B pelo 
produto de C e D
EX.: A*B -C*D
Imprima "DIFERENÇA = " e o diferenca */

let a = parseInt(prompt('Digite o primeiro valor'));
let b = parseInt(prompt('Digite o segundo valor'));
let c = parseInt(prompt('Digite o terceiro valor'));
let d = parseInt(prompt('Digite o quarto valor'));

let diferenca = (a*b)-(c*d);
alert(`DIFERENÇA = ${diferenca}`);
console.log(`DIFERENÇA = ${diferenca}`);
