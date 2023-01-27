// https://codeforces.com/problemset/problem/266/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});

let n = false;
readLine.on('line',
        (w) => {
            if (n == false){
                n = Number(w);
                return;
            }
            let input= w;
            let contadorDelete = 0;
            if (input.length === n) {
                for (let i = 1; i < input.length; i++) {
                    const element = input[i];
                    if (element === input[i-1]) {
                        contadorDelete++
                    }
                }
            }
            console.log(contadorDelete);
        }
  );