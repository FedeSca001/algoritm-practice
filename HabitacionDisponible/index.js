//https://codeforces.com/problemset/problem/467/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
let contador = 0
let input = []
readLine.on('line',
    (w) => {
        if (n == false){
            n = Number(w);
            return;
        }
        input.push(w)
        if (input.length == n) {
            for (let i = 0; i < input.length; i++) {
                const [p,q] = input[i].split(' ').map(Number)
                if (q - p >= 2) {
                    contador++
                }
            }
            console.log(contador);
            readLine.close()
        }
    }
  );