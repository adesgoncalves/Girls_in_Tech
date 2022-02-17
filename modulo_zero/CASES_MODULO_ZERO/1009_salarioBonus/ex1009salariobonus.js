var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1009_salariobonus/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines)
let nome = lines[0]
let venda = Number(lines[2])
let salario = Number(lines[1])
let comissao = 15
let bonus = venda * comissao / 100
let salBonus = bonus + salario

console.log(`O salário com bônus do funcionário ${nome} é de ${salBonus.toFixed(2)} reais.`)

