var input = require('fs').readFileSync('./CASES_MODULO_ZERO/3342_keanu/stdin', 'utf8');
var lines = input.split('\n').toString();

let totalHouses = lines * lines;
let a = 0;
let b = 0;

if (lines % 2 === 0) {
  a = totalHouses / 2;
  b = a;
  console.log(`${a} casas brancas e ${b} casas pretas`);
} else {
  a = (totalHouses + 1) / 2;
  b = a - 1;
  console.log(`${a} casas brancas e ${b} casas pretas`);
}
