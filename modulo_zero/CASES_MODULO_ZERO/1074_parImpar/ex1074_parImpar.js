var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1074_parImpar/stdin', 'utf8');
var lines = input.split('\n');
lines.shift();
console.log(lines);

for (let i = 0; i < lines.length; i += 1) {
    if(Number(lines[i]) % 2 == 0 && Number(lines[i]) < 0) {
        console.log('EVEN NEGATIVE');
    }
    if(Number(lines[i]) % 2 != 0 && Number(lines[i]) < 0) {
        console.log('ODD NEGATIVE');
    }
    if(Number(lines[i]) % 2 != 0 && Number(lines[i]) > 0) {
        console.log('ODD POSITIVE');
    }
    if(Number(lines[i]) == 0) {
        console.log('NULL');
    }
}
