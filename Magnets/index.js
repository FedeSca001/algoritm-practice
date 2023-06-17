// https://codeforces.com/problemset/problem/344/A
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let arrayInput = [];
let contador = 1;
rl.on('line', (input) => {
  if (n === 0) {
    n = Number(input);
  } else {
  arrayInput.push(Number(input))
  }
  if (arrayInput.length === n) {
    for (let i = 1; i < arrayInput.length; i++) {
      const elementoActual = arrayInput[i];
      const elementoAnterior = arrayInput[i-1]
      if (elementoActual !== elementoAnterior ) {
        contador++
      }
    }
    console.log(contador);
    rl.close();
  }
});
