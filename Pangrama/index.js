// https://codeforces.com/problemset/problem/520/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
readLine.on('line',
  (w) => {
    if (n === false){
        n = Number(w);
        return;
    }
    //   console.log(new Set(input[1].toLowerCase().split('')).size === 26 ? 'YES' : 'NO');
    const arr = []
    arr.push(w)
    console.log(arr);
    console.log(new Set(arr[0].toLowerCase().split('')).size === 26 ? 'YES' : 'NO');
    readLine.close()
  }
);