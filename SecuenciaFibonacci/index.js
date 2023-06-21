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
