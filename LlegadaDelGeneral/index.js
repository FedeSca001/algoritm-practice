const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let contador = 0;
let altSoldados = [];

rl.on('line', (input) => {
  if (n === 0) {
    n = Number(input);
  } else {
    altSoldados = input.split(' ').map(Number);

    let altMaxSoldado = 0;
    let altMaxSoldadoIndex = -1;
    let altMinSoldado = 101;
    let altMinSoldadoIndex = -1;

    for (let i = 0; i < altSoldados.length; i++) {
      const altura = altSoldados[i];
      if (altura > altMaxSoldado) {
        altMaxSoldado = altura;
        altMaxSoldadoIndex = i;
      }
      if (altura <= altMinSoldado) {
        altMinSoldado = altura;
        altMinSoldadoIndex = i;
      }
    }

    contador = altMaxSoldadoIndex + (n - 1 - altMinSoldadoIndex);

    if (altMaxSoldadoIndex > altMinSoldadoIndex) {
      contador--;
    }

    console.log(contador);
    rl.close();
  }
});
