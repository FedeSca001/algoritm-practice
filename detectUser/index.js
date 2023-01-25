//https://codeforces.com/problemset/problem/236/A
// Eficiencia en el
// codigo https://medium.com/@juanelojga/algoritmos-en-javascript-parte-1-47a0b13db35a
// https://www.freecodecamp.org/espanol/news/la-complejidad-de-los-algoritmos-simples-y-las-estructuras-de-datos-en-js/
/*function pow(base, exponente){
    if(exponente == 1) return base
    if(exponente%2 == 0){
        res = pow(base, exponente/2)
        return res*res
    }else{
        res = pow(base,exponente-1)
        return res*base
    }
}*/

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (w) => {
    let contadorLetras = 1;
    w = w.split('').sort();
    for (let i = 1; i < w.length; i++) {
        const element = w[i];
        if (element !== w[i-1]) {
            contadorLetras++
        }
    }
    if (contadorLetras % 2 === 0) {
        console.log('CHAT WITH HER!');
    } else {
        console.log('IGNORE HIM!');
    }
});