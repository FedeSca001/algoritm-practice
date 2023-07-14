// https://codeforces.com/problemset/problem/705/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const palabras = ['I hate','I love']
let frase = ''
readLine.on('line',
    (w) => {
    let n = parseInt(w);
    let i=-1;
    while(i++ < n-1) {
        frase += palabras[i%2];
        if(i < n-1) frase += ' that ';
    }
    console.log(frase + ' it');
        readLine.close()
    }
  );