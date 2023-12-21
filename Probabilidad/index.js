// IMPORTANTE https://webs.um.es/mpulido/miwiki/lib/exe/fetch.php?media=wiki:simt1b.pdf
// X = ( a * x + c) % m
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let numero = 0
let x = Date.now();
let a = 0;
let c = 0;

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    a = mouseX * 63;
    c = mouseY * 63;
});
const randomFunction = (m) => {
    a = (a + mouseX * 63) % m;
    c = (c + mouseY * 63) % m;
    x = (a * x + c) % m;
    return x;
}

let resultados = [0, 0, 0, 0, 0, 0];
rl.on("line", (w) => {
    for (let i = 0; i < Number(w); i++) {
        numero = Math.floor(Math.random() * 6) + 1;
        resultados[numero -1]++
    }
    console.log(resultados);
    randomFunction()
    rl.close()
});
/*
const min = 1;
const max = 6;
const rango = max - min + 1; // Calcula el rango

let a = 0;
let c = 0;

const randomFunction = (min, max) => {
    let x = Date.now(); // Usar milisegundos actuales como semilla inicial
    let m = Number(cantidadDeIntentos.textContent) - 1 * 6954743
    x = (a * x + c) % m;
    // Ajustar el número generado al rango [min, max]
    const numeroAleatorio = (x % (max - min + 1)) + min;
    return numeroAleatorio;
}
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    a = mouseX * 3000000;
    c = mouseY * 4000000;
});

*/