// https://codeforces.com/problemset/problem/1915/A

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
    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            const [a,b,c] = element.split(' ').map(Number)
            console.log(a ^ b ^ c);
        }
        readline.close();
    }
});
