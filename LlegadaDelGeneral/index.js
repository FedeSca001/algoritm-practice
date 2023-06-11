//https://codeforces.com/problemset/problem/144/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
let contador = 0
readLine.on('line',
    (w) => {
        if (n == false){
            n = Number(w);
            return;
        }
        const altSoldados = w.split(' ').map(Number)
        console.log(altSoldados);
        console.log(contador);
        readLine.close()
    }
  );