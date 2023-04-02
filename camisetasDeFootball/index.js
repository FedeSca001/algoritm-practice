// https://codeforces.com/problemset/problem/268/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;
readLine.on('line',
        (line) => {if (n == false){n = Number(line);return;}//n es el valor del caracter ingresado
                input.push(line)//Agrega el valor ingresado al array de input
                if (input.length == n) {
                        for (let i = 0; i < input.length; i++) {//Aca dentro va la lógica...
                                const [a, b] = input[i].split(' ').map(Number);
                                console.log(a,b);
                        }
                        readLine.close();
                }
        }
  );