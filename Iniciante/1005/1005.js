/* Leia dois valores reais de duas casas ex: 2.0
Sabendo que pesoNota1 = 3.5 e pesoNota2 = 7.5
Calcule a média ponderada (nota1 + nota2 / pesoNota1 + pesoNota2)
OBS: Nota máxima até 10.0
Imprima "MEDIA = " juntamente com o resultado da expressão */

let nota1 = parseFloat(prompt('Digite a primeira nota')).toFixed(1);
let nota2 = parseFloat(prompt('Digite a segunda nota')).toFixed(1);
const pesoNota1 = 3.5;
const pesoNota2 = 7.5;

let media = ((nota1 * pesoNota1) + (nota2 * pesoNota2)) / (pesoNota1 + pesoNota2);

console.log('MEDIA =', media.toFixed(5));
alert(`MEDIA = ${media.toFixed(5)}`);