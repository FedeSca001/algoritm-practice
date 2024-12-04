// https://codeforces.com/problemset/problem/1772/A
// Desde raspberry pi 5

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
    input.push(w);
    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            const [a,b] = input[i].split('+').map(Number);
            console.log(a+b);
        }
        readline.close();
    }
});
