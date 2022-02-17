var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1014_consumoCombustivel/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines)
let combTotal = lines[0]
console.log(combTotal)
let distanciaKm = lines[1]
console.log(distanciaKm)
let cc = combTotal / distanciaKm
console.log(`O consumo médio de combustível é de ${cc.toFixed(3)} km/l.`)