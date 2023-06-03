//https://codeforces.com/problemset/problem/750/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
readLine.on('line',
    (w) => {
        const [problemas, minutosNecesarios] = w.split(' ')
        const tiempoDisponible = 240 - Number(minutosNecesarios)
        let problemasAresolver = 0;
        let tiempoTotalProblemas = 0;
        for (let i = 0; i <= Number(problemas); i++) {
            tiempoTotalProblemas = tiempoTotalProblemas + i*5
            if (tiempoDisponible >= tiempoTotalProblemas) problemasAresolver = i
        }
        console.log(problemasAresolver);
    }
  );