var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1019_conversaoTempo/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines)
let segtotal = lines[0]
console.log(segtotal)
let hora = parseInt(segtotal / 3600)

console.log(hora)
segtotal = segtotal % 3600

let minuto = parseInt(segtotal / 60)
segtotal = segtotal % 60

console.log(`${hora}:${minuto}:${segtotal}`)
