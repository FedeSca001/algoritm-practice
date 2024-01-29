// https://codeforces.com/problemset/problem/1542/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = false;
const input = []

readline.on('line', (w) => {
    let cantidad = 0;
    let esPosible = true;
    if (n === false) {
        n = Number(w);
        return;
    }
    if (cantidad === 0) {
        cantidad = Number(w);
        input.push(cantidad)
        return
    }
    const casos = w.split(' ').map(Number)
    for (let i = 0; i < casos.length; i += 2) {
        const a = casos[i];
        const b = casos[i + 1];
        console.log('caso A:',a,'   Caso B',b,'  ------',(a+b)%2,'Numero iterador: ',i,'-',casos.length);
        if ((a+b)%2 === 0 ) {
            esPosible = false
            break
        }
    }
    console.log(esPosible ? 'Yes' : 'No');
    cantidad = 0

    if (input.length === n) {
        readline.close();
    }
});
