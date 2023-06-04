//https://codeforces.com/problemset/problem/427/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
readLine.on('line',
  (w) => {
    if (n === false){
        n = Number(w);
        return;
    }
    const input = w.split(' ').map(Number)
    let delitosSinTratar = 0
    let contadorPolicias = 0
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if ( element < 0 ) {
          if ( contadorPolicias <= 0 ) {
            delitosSinTratar++
          } else {
            contadorPolicias--
          }
        } else {
          contadorPolicias += element
        }
    }
    console.log(delitosSinTratar)
  }
  );