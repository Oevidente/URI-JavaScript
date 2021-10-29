/* Ler 3 valores reais.toFixed(1) (A,B,C)
Calcule e Imprima:
Área do triângulo (A = base, C = altura) = (base*altura)/2
Área do círculo (C = Raio, pi = 3.14159) = pi*(raio**2)
Área do trapézio (A e B = base, C = altura) = (ladoA + ladoB * altura)/2
Área do quadrado (B = lado) = lado**2
Área do retângulo (A e B = lado) = base*altura */
let input = require('fs').readFileSync('Iniciante/1012/stdin', 'utf8');
let lines = input.split('\n');

let linha = lines.shift().split(' ');

const pi = 3.14159;
let A = parseFloat(linha[0]);
let B = parseFloat(linha[1]);
let C = parseFloat(linha[2]);

let areaTriangulo = (A*C)/2;
let areaCirculo = pi*(C*C);
let areaTrapezio = ((A+B)*C)/2;
let areaQuadrado = B*B;
let areaRetangulo = A*B;

// prompt(`TRIÂNGULO: ${areaTriangulo.toFixed(3)}
// CÍRCULO: ${areaCirculo.toFixed(3)}
// TRAPÉZIO: ${parseFloat(areaTrapezio.toFixed(3))}
// QUADRADO: ${areaQuadrado.toFixed(3)}
// RETÂNGULO: ${areaRetangulo.toFixed(3)}`);
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)};`);