var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1078_Tabuada/stdin', 'utf8');
var lines = input.split('\n');

let numero = Number(lines[0]);

for (let i = 1; i <= 10; i += 1) {
console.log(`${i} x ${numero} = ${i * numero}`)
};