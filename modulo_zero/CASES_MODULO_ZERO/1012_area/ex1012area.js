var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1012_area/stdin', 'utf8');
console.log(typeof input);
var lines = input.split(' '); 
console.log(lines);

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

let triangulo = (a * c) / 2;
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);

let circulo = 3.14159 * (c**2);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);

let trapezioBase = a + b;
let trapezioTotal = (trapezioBase * c) / 2;
console.log(`TRAPEZIO: ${trapezioTotal.toFixed(3)}`);

let quadrado = b ** 2;
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);

let retangulo = a * b;
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);