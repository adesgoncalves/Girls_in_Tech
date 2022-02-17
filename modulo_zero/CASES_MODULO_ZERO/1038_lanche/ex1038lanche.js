var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1038_lanche/stdin', 'utf8');
var lines = input.split('\n');
let cod3 = 5
let  quantXbacon = 2
let total = cod3 * quantXbacon;

console.log(`Total: R$ ${total.toFixed(2)}`);