var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1009_salariobonus/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines)
var nome = lines[0]
var venda = Number(lines[2])
var salario = Number(lines[1])
var comissao = 15
var bonus = venda * comissao / 100
var salBonus = bonus + salario

console.log(`O salário com bônus do funcionário ${nome} é de ${salBonus.toFixed(2)} reais.`)

