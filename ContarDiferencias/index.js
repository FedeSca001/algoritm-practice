// https://codeforces.com/problemset/problem/1829/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const casos = [];
let n = null;
const matriz = 'codeforces'
readline.on('line', (line) => {
    if (n === null) {
        n = Number(line);
    } else {
        casos.push(line);
        if (casos.length === n) {
            for (let i = 0; i < casos.length; i++) {
                const element = casos[i];
                let count = 0;
                for (let index = 0; index < element.length; index++) {
                    if (element[index] !== matriz[index]) count++
                }
                console.log(count);
            }
            readline.close();
        }
    }
});
