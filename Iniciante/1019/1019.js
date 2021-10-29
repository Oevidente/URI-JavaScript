/* ler ot empo em segundos
transformar em horas:minutos:segundos */
let input = require('fs').readFileSync('Iniciante/1019/stdin', 'utf8');
let lines = input.split('\n').map(item => parseInt(item));

let segundosEnt = lines.shift();
//dividir segundos por 60
let minutosEnt = parseInt(segundosEnt/60); 

//dividir minutos por 60
let horasEnt = parseInt(minutosEnt/60); 

//o que sobra dos segundos vai para o console
let segundosSaida = (segundosEnt-(minutosEnt*60)); 

//o que sobra dos minutos vai para o console
let minutosSaida = (minutosEnt-(horasEnt*60)); 

console.log(`${horasEnt}:${minutosSaida}:${segundosSaida}`);
