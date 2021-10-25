/* 1L = 12Km
tempo de viagem = 10h
velocidade média = 85km/h
10h de viagem = 850km
850/12=litros
resultado.toFixed(3) */
let input = require('fs').readFileSync('stdin', 'utf8');
let linhas = input.split(' ').map(item => parseInt(item));

const KmPorLitro = 12;
let tempoViagem = linhas[0];
let velocidadeMedia =linhas[1];

let distancia = tempoViagem*velocidadeMedia;

let resultado = distancia/KmPorLitro;

console.log(resultado.toFixed(3));