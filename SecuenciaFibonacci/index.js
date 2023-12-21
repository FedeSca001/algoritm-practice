const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = false;

let secuencia = [0,1];
rl.on('line', (input) => {
  if (n === false) {
    n = Number(input);
  }
  for (let i = 1; i < n; i++) {
    secuencia.push(Number(secuencia[i] + secuencia[i-1]))
  }
  console.log(secuencia);
  rl.close();
});

/* UTILIZANDO RECURSIVIDAD
function fibonacci(n) {
  if (n <= 1) {
    return [0, 1].slice(0, n + 1);
  } else {
    let fib = fibonacci(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}



rl.on('line', (input) => {
  if (n === false) {
    n = Number(input);
    const fibSequence = fibonacci(n);
    console.log(fibSequence);
    rl.close();
  }
});
*/