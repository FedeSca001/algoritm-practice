// https://codeforces.com/problemset/problem/1807/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = null;
const casos = [];

readline.on('line', (line) => {
    if (n === null) {
        n = Number(line);
    } else {
        casos.push(line);
        if (casos.length === n) {
            for (let i = 0; i < casos.length; i++) {
                const [a, b, c] = casos[i].split(' ').map(Number);
                if ( a+b === c) console.log('+');
                if ( a-b === c) console.log('-');
            }
            readline.close();
        }
    }
});
