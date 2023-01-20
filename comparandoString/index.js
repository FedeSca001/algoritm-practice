//https://codeforces.com/problemset/problem/112/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
readLine.on('line',
        (w) => {
            input.push(w)
            if (input.length===2) {
                let l1 = input[0].toLowerCase();
                let l2 = input[1].toLowerCase();
                if (l1>l2) {
                    console.log(1);
                } else if (l1<l2) {
                    console.log(-1);
                } else {
                    console.log(0);
                }
            }
        }
  );