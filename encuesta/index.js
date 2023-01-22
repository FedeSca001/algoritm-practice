//https://codeforces.com/problemset/problem/1030/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;
let result = 'EASY';
readLine.on('line',
        (w) => {
            if (n == false){
                n = Number(w);
                return;
            }
            input.push(w)
            if (input.length === 1) {
                let list = input[0].split(' ');
                for (let i = 0; i < list.length; i++) {
                    const element = list[i];
                    if (Number(element) !== 0){ result = 'HARD'}
                }
            }
            console.log(result);
        }
  );