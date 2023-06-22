// https://codeforces.com/problemset/problem/486/A
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', (input) => {
  const n = Number(input)
  console.log( n%2 ? -Math.ceil(n/2) : n/2 )
  rl.close()
});