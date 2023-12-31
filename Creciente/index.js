// https://codeforces.com/problemset/problem/1742/B

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = false;
let longitud = false;
let contador = 0;

readline.on('line', (w) => {
    let str = 'YES';

    if (n === false) {
        n = Number(w);
        return;
    }

    if (longitud === false) {
        longitud = Number(w);
        return;
    } else {
        const list = w.split(' ').map(Number).sort();

        if (list.length > 1) {
            for (let i = 0; i < longitud - 1; i++) {
                if (list[i] >= list[i + 1]) {
                    str = 'NO';
                    break;
                }
            }
            longitud = false;
        }

        console.log(str);
    }

    contador++;

    if (n === contador) {
        readline.close();
    }
});
