/* Calcular e mostrar o volume de uma esfera
ler o valor do raio
pi = 3.14159
Fórmula = (4/3)* pi * raio ao cubo */

const pi = 3.14159;
let raio = parseFloat(prompt('Qual o valor do raio?'));;

let volume = (4.0/3) * pi * (raio**3);

alert(`VOLUME = ${volume.toFixed(3)}`);
console.log(`VOLUME = ${volume.toFixed(3)}`);