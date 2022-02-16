/*var salario = 3002.00
if (salario <= 2000.00){
    console.log('Isento')   
} if (salario >= 2000.01 && salario <= 3000.00) {
    console.log(`R$ ${(salario - 2000.00 * 0.08).toFixed(2)}`)
} if (salario >= 3000.01 && salario <= 4500.00) {
    console.log(`R$ ${(salario - 3000.00 * 0.18) + (1000.00 * 0.08).toFixed(2)}`)
} if (salario >= 4500.00) {
    console.log(`R$ ${(salario - 4500.00 * 0.28) + (1000.00 * 0.08) + (1500.00 * 0.18).toFixed(2)}`)
}*/

var salario = 3002.00
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
