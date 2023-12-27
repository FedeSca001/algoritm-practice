// https://codeforces.com/problemset/problem/1520/B

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = false;
const input = [];

readline.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }
    input.push(Number(w));
    if (input.length === n) {
        input.forEach((norte) => {
            let b = 1;
            let c = 0;
            let d = 0;

            for (let l = 10; l <= norte; l *= 10) {
                d = l - 1;
                c += d / b;
                b = b * 10 + 1;
            }

            c += norte / b;
            console.log(Math.floor(c));
        });

        readline.close();
    }
});
