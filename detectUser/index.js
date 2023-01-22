//https://codeforces.com/problemset/problem/236/A
// Eficiencia en el
// codigo https://medium.com/@juanelojga/algoritmos-en-javascript-parte-1-47a0b13db35a
// https://www.freecodecamp.org/espanol/news/la-complejidad-de-los-algoritmos-simples-y-las-estructuras-de-datos-en-js/
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (w) => {
    let contadorLetras = 0
    while (contadorLetras < w.length) {
        contadorLetras++
    }
    console.log(w.length+' '+contadorLetras);
});