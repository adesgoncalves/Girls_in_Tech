var input = require('fs').readFileSync('./CASES_MODULO_ZERO/1176_fibonacciVetor/stdin', 'utf8');
var lines = input.split('\n');
lines.shift();

let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

for (let i = 2; i <= 60; i += 1) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}

const N = lines;

for (let i = 0; i < N.length; i += 1) {
  console.log(`Fib(${N[i]}) = Fib${fibo[N[i]]}`) //O QUE É ESTE Fib? PQ O PRINT SAI DESCONFIGURADO?
}


/*let fibonacci = []
fibonacci [0] = 0
fibonacci [1] = 1
for (let i = 2; i < 5; i++) {
    fibonacci [i] =  fibonacci [i - 1] + fibonacci [i - 2]
}
console.log(fibonacci.toString().replace(/[, ]+/g, " ").trim());*/