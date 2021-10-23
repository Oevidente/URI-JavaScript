/* Calcular a média de combustível gasto por km
a partir da distancia e do gasto
distancia = int
gasto = float
resultado.toFixed(3) km/l */

let x = parseInt(prompt('Diga a distância percorrida em Km:'));
let y = parseFloat(prompt('Diga o combustível gasto em litros:'));

let media = x/y;

alert(`RETÂNGULO: ${media.toFixed(3)} km/l`);