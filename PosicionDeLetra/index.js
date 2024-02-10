// https://codeforces.com/problemset/problem/1760/B

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let n = false;
const input = []
 
readline.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }

    input.push(w)
    if (input.length === n*2) {

        for (let i = 1; i < input.length; i+=2) {
            const e = input[i];
            let contador = 0;
            for (let index = 0; index < e.length; index++) {
                const element = e[index].toLowerCase();
                let posicion = element.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
                if (posicion > contador) {
                    contador = posicion
                }
            }
            console.log(contador);
        }
        readline.close();
    }
});