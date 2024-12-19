// https://codeforces.com/problemset/problem/1607/A

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
        for (let index = 0; index < casos.length; index += 2) {
            const teclado = casos[index];
            const palabra = casos[index + 1];

            // Crear un mapa para almacenar la posición de cada letra en el teclado
            const mapaTeclado = {};
            for (let i = 0; i < teclado.length; i++) {
                mapaTeclado[teclado[i]] = i;
            }

            // Calcular el tiempo para escribir la palabra
            let tiempo = 0;
            for (let i = 1; i < palabra.length; i++) {
                tiempo += Math.abs(mapaTeclado[palabra[i]] - mapaTeclado[palabra[i - 1]]);
            }

            console.log(tiempo);
        }
        readline.close();
    }
});
