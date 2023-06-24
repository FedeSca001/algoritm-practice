// https://codeforces.com/problemset/problem/148/A

//k = puñetazo en la cara
//l = cerro la puerta
//m = pisotearon
//n = llamaron a la mama
//d= la cantidad que conto la princesa
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
let input = []
readLine.on('line',
    (w) => {
        input.push(Number(w))
        let [k,l,m,n,d] = input.map(Number)
        if (input.length === 5) {
            let result = d;
            if (k === 1 || l === 1 || m === 1 || n === 1) {
                console.log(result);
                return;
            }

            for (let i = 1; i <= d; i++) {
                if (i % k !== 0 && i % l !== 0 && i % m !== 0 && i % n !== 0) {
                    result--;
                }
            }
            console.log(result);
        }
    }
);