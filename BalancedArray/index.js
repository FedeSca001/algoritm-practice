// https://codeforces.com/problemset/problem/1343/B

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let n = false;
const input = [];
const resultado = [];

readLine.on('line', (w) => {
  if (n === false) {
    n = Number(w);
    return;
  }
  input.push(Number(w))
  if (input.length === n) {
      for (let i = 0; i < input.length; i++) {
        const element = Number(input[i]);
        for (let index = 1; index < element; index+=2) {

            for (let j = 2; j <= element; j += 2) {
                resultado.push(j);
            }

            // Agregar números impares en la mitad derecha
            for (let j = 3; j <= element+1; j += 2) {
                resultado.push(j);
            }

            console.log(resultado.join(' '));
        }
      }
      readLine.close()
    }
})