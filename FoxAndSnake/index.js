// https://codeforces.com/problemset/problem/510/A
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const [n, m] = input.split(' ').map(Number);

  for (let i = 1; i <= n; i++) {
    let fila = '';
    if (i % 2 === 1) {
      // Filas impares, serpiente hacia la derecha
      for (let j = 0; j < m; j++) {
        fila += '#';
      }
    } else if (i % 4 === 0) {
      // Filas divisibles por 4, serpiente hacia la izquierda
      fila += '#';
      for (let j = 1; j < m; j++) {
        fila += '.';
      }
    } else {
      // Filas pares no divisibles por 4, serpiente hacia la derecha
      for (let j = 0; j < m - 1; j++) {
        fila += '.';
      }
      fila += '#';
    }

    console.log(fila);
  }
});
