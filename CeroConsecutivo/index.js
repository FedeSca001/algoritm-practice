const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = false;
const input = [];
let indice = false;
readline.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }

    if (indice === false) {
        indice = w;
    } else {
        input.push(w);
        indice = false;
    }

    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            const element = input[i].split(' ');
            let maximo = 0
            let count = 0
            if (element.length === 1 && element[0] === '0') {
                console.log(1);
                continue;
            }
            for (let index = 0; index < element.length; index++) {
                const el = element[index];
                if (el === '0') {
                    count++;
                    if (count > maximo) {
                        maximo = count;
                    }
                } else {
                    count = 0;
                }
            }
            console.log(maximo);
        }
        readline.close();
    }
});
