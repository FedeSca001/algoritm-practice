/*
https://codeforces.com/problemset/problem/677/A
*/

const readLine = require('readline').createInterface(
    {input: process.stdin,output: process.stdout,}
);
const input = [];
let n = 2;
readLine.on('line',
    (w) => {
        input.push(w);
        if (input.length == n){
            let input1 = input[0].split(' ');
            let input2 = input[1].split(' ');
            let contadorPeaton = 0;
            for (let i = 0; i < input1[0]; i++){
                let element = Number(input2[i]);
                if ( element <= Number(input1[1]) ){
                    contadorPeaton += 1;
                } else {
                    contadorPeaton += 2;
                }
            }
            console.log(contadorPeaton);
        }
    }
  );