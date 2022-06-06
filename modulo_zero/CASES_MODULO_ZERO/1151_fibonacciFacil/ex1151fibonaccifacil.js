var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1151_fibonacciFacil/stdin', 'utf8');
var lines = input.split('\n');

let fibonacci = []
fibonacci [0] = 0
fibonacci [1] = 1
for (let i = 2; i < 5; i++) {
    fibonacci [i] =  fibonacci [i - 1] + fibonacci [i - 2]
}
console.log(fibonacci.toString().replace(/[, ]+/g, " ").trim());

