/* Ler 3 valores inteiros
aponte o maior entre eles
seguido da mensagem "eh o maior" */

let num1 = parseInt(prompt('Digite o primeiro número'));
let num2 = parseInt(prompt('Digite o segundo número'));
let num3 = parseInt(prompt('Digite o terceiro número'));
let resultado;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' eh o maior');
    prompt(num1 + ' eh o maior');
} else if (num2 > num3) {
    console.log(num2 + ' eh o maior');
    prompt(num2 + ' eh o maior');
} else {
    console.log(num3 + ' eh o maior');
    prompt(num3 + ' eh o maior');
}