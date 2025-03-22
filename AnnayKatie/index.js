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
    if (casos.length === n) {
        resolverCasos(casos);
        readline.close();
    }
});

function resolverCasos(casos) {
    for (let index = 0; index < casos.length; index++) {
        const [a, b, c] = casos[index].split(' ').map(Number);
        if ((a + b + c) % 2 === 1) {
            console.log('First');
        } else {
            console.log('Second');
        }
    }
}
