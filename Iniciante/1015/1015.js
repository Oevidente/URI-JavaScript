/* leia 4 valores
2 strings
2 floats
resultado.toFixed(4) */
let p1 = {
    x1: parseFloat(prompt('Qual o valor de X1?')),
    y1: parseFloat(prompt('Qual o valor de Y1?'))
};

let p2 = {
    x2: parseFloat(prompt('Qual o valor de X2?')),
    y2: parseFloat(prompt('Qual o valor de Y2?'))
};
let calculoBase = ((p2.x2 - p1.x1) ** 2) + ((p2.y2 - p1.y1) ** 2);
let distancia = Math.sqrt(calculoBase);
//Math.sqrt(valor); retorna a raiz quadrada daquele valor
alert(distancia.toFixed(4));