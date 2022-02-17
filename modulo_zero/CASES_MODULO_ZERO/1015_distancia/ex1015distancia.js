var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1015_distancia/stdin', 'utf8');
var lines = input.split('\n');

function distanciaPontos(calc) {
    let a = calc[0].split(' ');
    let b = calc[1].split(' ');
    let c = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    return c;
}

console.log(`O valor da distância entre os pontos é ${distanciaPontos(lines).toFixed(4)}`);
