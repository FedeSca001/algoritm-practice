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
        for (let index = 0; index < input.length; index++) {
            const element = input[index].split(' ').map(Number);
            let count = {};
            let apareceMasDeTresVeces = false;
            for (let i = 0; i < element.length; i++) {
                const el = element[i];
                count[el] = (count[el] || 0) + 1;
                if (count[el] === 3) {
                    console.log(el);
                    apareceMasDeTresVeces = true;
                    break;
                }
            }
            if (!apareceMasDeTresVeces) {
                console.log(-1);
            }
        }
        readline.close();
    }
});
