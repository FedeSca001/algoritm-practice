const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tabla = [];

readline.on('line', (w) => {
    const n = Number(w);

    // Crear la tabla
    for (let fila = 1; fila <= n; fila++) {
        const filaTabla = []; // Cada fila es un arreglo
        for (let columna = 1; columna <= n; columna++) {
            if (columna === 1 || fila === 1) {
                filaTabla.push(1)
            } else {
                filaTabla.push(tabla[fila - 2][columna-1] + filaTabla[filaTabla.length-1]);
            }
        }
        tabla.push(filaTabla); // Agregar la fila a la tabla
    }

    // Imprimir la tabla
    console.log(tabla[w-1][w-1]);

    readline.close();
});
