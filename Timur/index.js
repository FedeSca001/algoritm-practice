// https://codeforces.com/problemset/problem/1722/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = false;
let n = false;
const input = [];

readline.on('line', (w) => {
    if (t === false) {
        t = Number(w); 
        return;
    }
    if (n === false) {
        n = Number(w); 
        return;
    }
    input.push(w); 
    if (input.length === t) {
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            let valido = 'NO';
            if (element.length === 5) {
                for (let j = 0; j < element.length; j++){
                    if (element[j] === 'i' || element[j] === 'n' || element[j] === 'u' || element[j] === 'r'|| element[j] === 'T') {
                        valido = 'YES';
                    } else if (element[j] === 'I' || element[j] === 'M' || element[j] === 'U' || element[j] === 'R'|| element[j] === 't') {
                        valido = 'NO';
                        break;
                    }
                }
            }
            console.log(valido);
        }
        readline.close(); 
    }
    n = false;
});

