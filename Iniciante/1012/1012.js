/* Ler 3 valores reais.toFixed(1) (A,B,C)
Calcule e Imprima:
Área do triângulo (A = base, C = altura) = (base*altura)/2
Área do círculo (C = Raio, pi = 3.14159) = pi*(raio**2)
Área do trapézio (A e B = base, C = altura) = (ladoA + ladoB * altura)/2
Área do quadrado (B = lado) = lado**2
Área do retângulo (A e B = lado) = base*altura */

const pi = 3.14159;
let A = parseFloat(prompt('Insira o valor de A'));
let B = parseFloat(prompt('Insira o valor de B'));
let C = parseFloat(prompt('Insira o valor de C'));

let areaTriangulo = (A*C)/2;
let areaCirculo = pi*(C**2);
let areaTrapezio = ((A+B)*C)/2;
let areaQuadrado = B**2;
let areaRetangulo = A*B;

prompt(`TRIÂNGULO: ${areaTriangulo.toFixed(3)}
CÍRCULO: ${areaCirculo.toFixed(3)}
TRAPÉZIO: ${parseFloat(areaTrapezio.toFixed(3))}
QUADRADO: ${areaQuadrado.toFixed(3)}
RETÂNGULO: ${areaRetangulo.toFixed(3)}`);
console.log(`TRIÂNGULO: ${areaTriangulo.toFixed(3)}
CÍRCULO: ${areaCirculo.toFixed(3)}
TRAPÉZIO: ${parseFloat(areaTrapezio.toFixed(3))}
QUADRADO: ${areaQuadrado.toFixed(3)}
RETÂNGULO: ${areaRetangulo.toFixed(3)}`);