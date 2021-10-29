/* 1L = 12Km
tempo de viagem = 10h
velocidade média = 85km/h
10h de viagem = 850km
850/12=litros
resultado.toFixed(3) */
let input = require('fs').readFileSync('Iniciante/1017/stdin', 'utf8');
let lines = input.split('\n').map(item => parseInt(item));

const KmPorLitro = 12;
let tempoViagem = lines.shift();
let velocidadeMedia = lines.shift();

let distancia = tempoViagem*velocidadeMedia;

let resultado = distancia/KmPorLitro;

console.log(resultado.toFixed(3));