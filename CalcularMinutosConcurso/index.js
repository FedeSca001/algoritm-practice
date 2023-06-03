//https://codeforces.com/problemset/problem/750/A
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const [problemas, minutosNecesarios] = input.split(' ');
  const tiempoDisponible = 240 - Number(minutosNecesarios);
  let problemasAresolver = 0;
  let tiempoTotalProblemas = 0;

  for (let i = 1; i <= Number(problemas); i++) {
    tiempoTotalProblemas += i * 5;
    if (tiempoDisponible >= tiempoTotalProblemas) {
      problemasAresolver = i;
    } else {
      break;
    }
  }

  console.log(problemasAresolver);
});

