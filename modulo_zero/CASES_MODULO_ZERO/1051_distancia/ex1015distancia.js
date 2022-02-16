
function distanciapontos(x1, y1, x2, y2) {
var a = x2 - x1
var b = y2 - y1
var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
return c
}

var x1 = 1.0
var y1 = 7.0
var x2 = 5.0
var y2 = 9.0

var distancia = distanciapontos(x1, y1, x2, y2)
console.log(`O valor da distância entre os pontos é ${distancia.toFixed(4)}`)