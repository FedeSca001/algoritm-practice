// https://codeforces.com/problemset/problem/266/B

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;

readLine.on('line',
        (w) => {
            if (n == false){
                n = w;
                return;
            }
            input.push(w)
            if (input.length === 1) {
                let [num,time] = n.split(' ')
            }
        }
  );