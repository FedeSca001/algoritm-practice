//https://codeforces.com/problemset/problem/228/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
readLine.on('line',
    (w) => {
        const colores = w.split(' ').map(Number).sort();
        let contador = 0;
        for (let i = 0; i < colores.length; i++) {
            const element = colores[i]
            if (element == colores[i-1]) {
                contador++
            }
        }
        console.log(contador);
        readLine.close()
    }
);