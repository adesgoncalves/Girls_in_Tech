var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1143_quadradoCubo/stdin', 'utf8');
var lines = input.split('\n');

let n = 5

for (i = 1; i <= n; i++) {
    console.log(i , i*i, i*i*i)
 };