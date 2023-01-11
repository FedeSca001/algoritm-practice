/*
https://codeforces.com/problemset/problem/50/A
*/
const readLine = require('readline').createInterface(
    {input: process.stdin,output: process.stdout,}
);
let input = '';
readLine.on('line',
    (w) => {
        input = w.split(' ')
        let m = input[0];
        let n = input[1];
        console.log(Math.floor( Number(m) * Number(n) / 2));

    }
  );