// https://codeforces.com/problemset/problem/785/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = 0;
let n = null;
let currentLine = 0;

// Mapeo de poliedros a sus respectivas caras
const faces = {
    Tetrahedron: 4,
    Cube: 6,
    Octahedron: 8,
    Dodecahedron: 12,
    Icosahedron: 20
};

readline.on('line', (line) => {
    if (n === null) {
        n = Number(line); // La primera línea indica el número de poliedros
    } else {
        result += faces[line]; // Suma las caras del poliedro correspondiente
        currentLine++;
        if (currentLine === n) { // Finaliza cuando se procesan todas las líneas
            console.log(result);
            readline.close();
        }
    }
});
