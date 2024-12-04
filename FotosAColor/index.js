// https://codeforces.com/problemset/problem/707/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = 0;
let result = "#Black&White";

readline.on('line', (w) => {
    if (n === 0) {
        [n, m] = w.split(' ').map(Number);
        return;
    }

    const pixels = w.split(' ');

    if (pixels.includes('C') || pixels.includes('M') || pixels.includes('Y')) {
        result = "#Color";
        readline.close();
    }
});

readline.on('close', () => {
    console.log(result);
});
