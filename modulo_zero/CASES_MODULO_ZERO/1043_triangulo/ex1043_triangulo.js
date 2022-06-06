var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1043_triangulo/stdin', 'utf8');
var lines = input.split('\n').toString();

for (let i = 1; i <= lines; i += 1) {
  console.log(`${i} ${i * i} ${i * i * i}`)
}
//PORQUE O CÓDIGO NÃO RODA?