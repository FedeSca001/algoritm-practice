// https://codeforces.com/problemset/problem/231/A
//implementarán un problema si al menos dos de ellos están seguros de la solución



const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
let input = [];
contador = 0
readLine.on('line',
    (w) => {
        if (n === false){
            n = Number(w);
            return;
        }
        input.push(w)
        if (input.length == n) {
            for (let i = 0; i < input.length; i++) {
                const [a,b,c] = input[i].split(' ').map(Number)
                if(a + b + c >= 2) contador++
            }
            console.log(contador);
            readLine.close()
        }
    }
  );