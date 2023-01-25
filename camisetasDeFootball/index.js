// https://codeforces.com/problemset/problem/268/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;
readLine.on('line',
        (w) => {if (n == false){n = Number(w);return;}//n es el valor del caracter ingresado
                input.push(w)//Agrega el valor ingresado al array de input
                if (input.length == n) {
                        let numer = 0;
                        let array = [0,1,2]
                        let string = 'Cadena'
                    console.log(numer,array,string)
                    process.exit();
                    
                }
        }
  );