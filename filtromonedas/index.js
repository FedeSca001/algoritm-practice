/*const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

process.stdin.on("data", (c) => {

    console.log(String(c),String(b));
});


let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = true;
                return;
        }

        if (w.length > 10) {
                w =
                        w.substr(0, 1) +
                        String(w.length - 2) +
                        w.substr(w.length - 1, 1);
        }
        console.log(w);
});*/

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const contenedorMonedas = [];
let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = Number(w);
                return;
        }
        contenedorMonedas.push(Number(w));
        if (contenedorMonedas.length == n) {
                let contenedorPequeño = [0];
                let resto = 0;
                contenedorMonedas.sort(function (a, b) {return a - b;}).reverse(); //ordeno el array de mas a menos
                while (Number(contenedorPequeño[contenedorPequeño.length - 1]) < 5) {//bucle (si el ultimo numero de contpequeño) es menor a 5
                        contenedorPequeño[contenedorPequeño.length - 1] += contenedorMonedas[0] < 5 
                                ?contenedorPequeño[contenedorPequeño.length - 1] += contenedorMonedas[0]//sumar el primer elemento de contenedorMonedas + ultimo elemento de contPequeño
                                : contenedorPequeño.push(Number(0));
                        contenedorMonedas.shift();//elimina el elemento que se envio al contpequeño
                }
        }
});
