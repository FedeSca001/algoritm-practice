// https://codeforces.com/problemset/problem/200/B
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
rl.on('line', (input) => {
  if (n === 0) {
    n = Number(input);
  } else {
  const arrayInput = input.split(' ').map(Number);
  let suma = 0;
  for (let i = 0; i < arrayInput.length; i++) {
      const element = arrayInput[i];
      suma = suma + element
  }
  console.log(suma / n);
  rl.close();
}
});
