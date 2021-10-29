/* Leia três valores reais de duas casas ex: 2.0
Sabendo que pesoNota1 = 2 e pesoNota2 = 3 e pesoNota3 = 5
Calcule a média ponderada (nota1 + nota2 / pesoNota1 + pesoNota2)
OBS: Nota máxima até 10.0
Imprima "MEDIA = " juntamente com o resultado da expressão */

let nota1 = parseFloat(prompt('Digite a primeira nota'));
let nota2 = parseFloat(prompt('Digite a segunda nota'));
let nota3 = parseFloat(prompt('Digite a segunda nota'));
let pesoNota1 = 2;
let pesoNota2 = 3;
let pesoNota3 = 5;

let media = ((nota1*pesoNota1)+(nota2*pesoNota2)+(nota3*pesoNota3))/(pesoNota1+pesoNota2+pesoNota3);

console.log('MEDIA =', media.toFixed(1));
alert(`MEDIA = ${media.toFixed(1)}`);