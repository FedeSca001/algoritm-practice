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
                const element = casos[i];
                
                if (element.length % 2 === 0) { // Si la longitud es par
                    const mitad = element.length / 2;
                    if (element.slice(0, mitad) === element.slice(mitad)) {
                        console.log('YES');
                    } else {
                        console.log('NO');
                    }
                } else {
                    console.log('NO');
                }
            }
            readline.close();
        }
    }
});
