const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let n = false;
const input = [];
let iteracion = 1;
let palabra = '';

readline.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }

    for (let i = 0; i < w.length; i++) {
        const element = w[i];
        if (element !== '.') {
            palabra += element;
        }
    }
    iteracion++;

    if (iteracion > 8) {
        iteracion = 1;
        input.push(palabra);
        palabra = '';
    }

    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            console.log(input[i]);
        }
        readline.close();
    }
});
