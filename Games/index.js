// https://codeforces.com/problemset/problem/268/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});

let n = false
let inpt = [];
readLine.on('line',
    (w) => {
        if (n === false) {
            n = Number(w);
            return;
        }
        inpt.push(w)
        if (n === inpt.length) {
            console.log(inpt);
            readLine.close()
        }
    }
  );