var input = require('fs').readFileSync('./CASES_MODULO_ZERO/2807_iccanobif/stdin', 'utf8');
var lines = input.split('\n').toString();

let iccanobif = [1, 1];
  
for (let i = 2; i < lines; i += 1) {
  iccanobif[i] = iccanobif[i - 2] + iccanobif[i - 1];
}
  
console.log(iccanobif.reverse().toString().replace(/[, ]+/g, " ").trim());