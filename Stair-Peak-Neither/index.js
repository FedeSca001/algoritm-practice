const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const casos = [];
let n = null;

readline.on('line', (line) => {
    if (n === null) {
        n = Number(line);
    } else {
        casos.push(line);
        if (casos.length === n) {
            for (let i = 0; i < casos.length; i++) {
                const [a, b, c] = casos[i].split(' ').map(Number);

                if (a < b && b < c) {
                    console.log('STAIR');
                } else if (a < b && b > c) {
                    console.log('PEAK');
                } else {
                    console.log('NONE');
                }
            }
            readline.close();
        }
    }
});