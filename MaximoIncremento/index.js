// https://codeforces.com/problemset/problem/702/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = null;

readline.on('line', (line) => {
    if (n === null) {
        n = Number(line);
        return;
    }

    const arreglo = line.split(' ').map(Number);
    let longitudActual = 1;
    let longitudMaxima = 1;

    for (let i = 0; i < n - 1; i++) {
        if (arreglo[i + 1] > arreglo[i]) {
            longitudActual++;
        } else {
            if (longitudActual > longitudMaxima) {
                longitudMaxima = longitudActual;
            }
            longitudActual = 1;
        }
    }
    longitudMaxima = Math.max(longitudMaxima, longitudActual);
    console.log(longitudMaxima);
    readline.close();
});
