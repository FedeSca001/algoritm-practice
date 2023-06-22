// https://codeforces.com/problemset/problem/136/A
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = false;
let regaladores = [];

rl.on('line', (input) => {
  if (n === false) {
    n = Number(input);
  } else {
    const arrayInput = input.split(' ').map(Number);
    regaladores = arrayInput;
    encontrarRegaladores();
    rl.close();
  }
});

function encontrarRegaladores() {
  const receptoresRegalos = new Array(n);

  for (let i = 0; i < n; i++) {
    const receptor = i + 1;
    const regalador = regaladores[i];
    receptoresRegalos[regalador - 1] = receptor;
  }

  console.log(receptoresRegalos.join(' '));
}
