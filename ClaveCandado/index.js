// https://codeforces.com/problemset/problem/540/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

readline.on('line', (line) => {
    inputs.push(line);
    
    // Esperamos a recibir las 3 líneas de entrada
    if (inputs.length === 3) {
        const n = Number(inputs[0]);
        const original = inputs[1];
        const target = inputs[2];
        
        let totalMoves = 0;
        
        for (let i = 0; i < n; i++) {
            const origDigit = Number(original[i]);
            const targetDigit = Number(target[i]);
            
            // Calcular la distancia mínima entre origDigit y targetDigit
            const forwardDistance = (targetDigit - origDigit + 10) % 10;
            const backwardDistance = (origDigit - targetDigit + 10) % 10;
            const minMoves = Math.min(forwardDistance, backwardDistance);
            
            totalMoves += minMoves;
        }
        
        console.log(totalMoves);
        readline.close();
    }
});
