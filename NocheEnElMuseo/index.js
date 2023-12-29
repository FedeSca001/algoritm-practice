// https://codeforces.com/problemset/problem/731/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let contador = 0;
let letraActual = 'a';

readline.on('line', (w) => {
    for (let i = 0; i < w.length; i++) {
        const element = w[i].toLowerCase();
        const sentidoHorario = (element.charCodeAt(0) - letraActual.charCodeAt(0) + 26) % 26;
        const antiHorario = (letraActual.charCodeAt(0) - element.charCodeAt(0) + 26) % 26;
        contador += Math.min(sentidoHorario, antiHorario);
        letraActual = element;
    }
    console.log(contador);
    readline.close();
});

