// https://codeforces.com/problemset/problem/467/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
let habitaciones = []
let n = false
let contador = 0;

readLine.on('line',
    (w) => {
        if (n === false) {
            n = Number(w);
            return;
        }
        habitaciones.push(w)
        if ( habitaciones.length === n ) {
            for (let i = 0; i < habitaciones.length; i++) {
                const element = habitaciones[i];
                const [p, q] = element.split(' ').map(Number);
                const habitacionesVacias = q - p;
                if (habitacionesVacias > 1 ) {
                    contador++
                }
            }
            console.log(contador);
            readLine.close()
        }
    }
  );