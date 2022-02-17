var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1051_impostoRenda/stdin', 'utf8');
var lines = input.split('\n');
let salario = 3002.00
if (salario <= 2000.00) {
    console.log ('Isento')
} else if (salario >= 2000.00 && salario <= 3000.00) {
    imposto = (salario - 2000) * 0.08
    console.log(`R$ ${imposto.toFixed(2)}`)
} else if (salario >= 3000.00 && salario <= 4500.00) {
    imposto = (salario - 3000) * 0.18 + (1000 * 0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
} else imposto = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)

    // VERIFICAR PORQUE A SAÍDA ESTÁ DUPLICADA