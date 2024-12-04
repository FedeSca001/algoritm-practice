const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let t = false;
let cases = [];
let count = 0;

rl.on('line', (line) => {
    if (t === false) {
        t = Number(line); 
    } else {
        cases.push(Number(line));
        count++;
    }

    if (count === t) {
        rl.close();
    }
});

rl.on('close', () => {
    cases.forEach(n => {
        console.log(getMinimumMinutes(n));
    });
});

function getMinimumMinutes(n) {
    // Implementa la lógica para encontrar el número mínimo de minutos necesarios
    if (n === 1) return 2;
    return Math.ceil(n / 3);
}
