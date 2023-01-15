/*
https://codeforces.com/problemset/problem/96/A
*/

const readLine = require('readline').createInterface(
    {input: process.stdin,output: process.stdout,}
);
let input = '';
readLine.on('line',
    (w) => {
        input = w;
        let contadorJugadores = 0;
        let respuesta = 'NO'
        for (let i = 0; i < input.length; i++) {
            const element = Number(input[i]);
            if (contadorJugadores < 7) {
                if (element === Number(input[i+1])) {
                    contadorJugadores += 1;
                } else {
                    contadorJugadores = 0;
                }
            } else {
                respuesta = 'YES'
            }
        }
        console.log(respuesta);
    }
  );