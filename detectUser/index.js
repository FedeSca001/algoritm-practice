//https://codeforces.com/problemset/problem/236/A
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (w) => {
    let contadorLetras = 0
    while (contadorLetras < w.length) {
        contadorLetras++
    }
    console.log(w.length+' '+contadorLetras);
});