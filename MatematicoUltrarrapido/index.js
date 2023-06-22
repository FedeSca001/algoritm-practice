// https://codeforces.com/problemset/problem/61/A

const { rawListeners } = require('process');

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n1 = false;
let n2 = ''
let result = ''
readLine.on('line',
    (w) => {
        if (n1 === false){
            n1 = w;
            return;
        }
        n2 = w
        for (let i = 0; i < n1.length; i++) {
            n1[i] === n2[i] ? result += '0' : result += '1'
        }
        console.log(result);
        readLine.close()
    }
  );