var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1134_tiposCombustiveis/stdin', 'utf8');
var lines = input.split('\n');

let alcool = 0 
let gasolina = 0
let diesel = 0

for (let i = 0; i < lines.length; i += 1) {
    if (lines[i] == 1) {
        alcool += 1
    };

    if (lines[i] == 2) {
        gasolina += 1
    };

    if (lines[i] == 3) {
        diesel += 1
    };

    if (lines[i] == 4) {
        break;
    };

}
console.log('MUITO OBRIGADA!');
console.log('Alcool: ' + `${alcool}`);
console.log('Gasolina: ' + `${gasolina}`);
console.log('Diesel: ' + `${diesel}`);