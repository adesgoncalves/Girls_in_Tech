var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1145_sequenciaLogica2/stdin', 'utf8');
var lines = input.split('\n').toString().split(' ');
let x = lines[0];
let y = lines[1];
let count = 0;

let line = '';
for (let i = 1; i <= y; i += 1) {
  count += 1;
  line = line + ' ' + i;
  if (count == x) {
    console.log(line);
    count = 0;
    line = '';
  }
}