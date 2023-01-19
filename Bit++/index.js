//https://codeforces.com/problemset/problem/282/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;
let x = 0;
readLine.on('line',
        (w) => {
            if (n == false){
                n = Number(w);
                return;
            }
            input.push(w)
            if (input.length === n) {
                for (let i = 0; i < input.length; i++) {
                    const ele = input[i];
                    ele[1] === '+' ? x++ : x--;
                }
                console.log(x);
            }
        }
  );