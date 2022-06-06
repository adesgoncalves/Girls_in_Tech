var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1094_experiencias/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines);
lines.shift();

let total = 0;
let frog = 0;
let rabbit = 0;
let mouse = 0;

for (let i = 0; i < lines.length; i += 1) {
   let labRat = lines[i].split(' ');
   total = total + Number(labRat[0]);
   
   if (labRat[1] === 'C') {
     rabbit = rabbit + Number(labRat[0]);
   }
   if (labRat[1] === 'R') {
     mouse = mouse + Number(labRat[0]);
   }
   if (labRat[1] === 'S') {
     frog = frog + Number(labRat[0]);
   }
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbit}`);
console.log(`Total de ratos: ${mouse}`);
console.log(`Total de sapos: ${frog}`);
console.log(`Percentual de coelhos: ${((rabbit * 100) / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((mouse * 100) / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((frog * 100) / total).toFixed(2)} %`);