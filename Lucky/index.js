// https://codeforces.com/problemset/problem/1676/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
let n = false
const respuesta = []
readLine.on('line',
    (w) => {
        if (n === false) {
            n = Number(w);
            return;
        }
            let sumaA = 0
            let sumaB = 0
            for (let index = 0; index < w.length; index++) {
                const element = Number(w[index]);
                index < 3 ? sumaA += element : sumaB += element
            }
            sumaA === sumaB ? respuesta.push('YES') : respuesta.push('NO');
        
        if (respuesta.length === n) {
            for (let index = 0; index < respuesta.length; index++) {
                const element = respuesta[index];
                console.log(element)
            }
            readLine.close()
        }
    }
  );