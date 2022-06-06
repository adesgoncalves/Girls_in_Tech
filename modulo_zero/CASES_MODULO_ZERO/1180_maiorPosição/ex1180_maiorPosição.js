var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1180_maiorPosição/stdin', 'utf8');
var lines = input.split('\n');

let arr = [2, 113, 45, 34565, 6, 8]
let maior = Math.max.apply(null, arr)
console.log(maior)
console.log(arr.indexOf(maior))