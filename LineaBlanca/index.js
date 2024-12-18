// https://codeforces.com/problemset/problem/1927/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = null;
const casos = [];

readline.on('line', (line) => {
    if (n === null) {
        n = Number(line);
        return;
    }
    casos.push(line);
    if (casos.length / 2 === n) {
        // Procesar los casos
        for (let index = 0; index < casos.length; index += 2) {
            const string = casos[index + 1];
            let left = 0;
            let right = string.length - 1;

            // Mover left hasta encontrar la primera 'B'
            while (string[left] === 'W' && left <= right) {
                left++;
            }

            // Mover right hasta encontrar la última 'B'
            while (string[right] === 'W' && left <= right) {
                right--;
            }

            // El resultado es la longitud del segmento de 'B'
            console.log(right - left + 1);
        }
        readline.close();
    }
});
