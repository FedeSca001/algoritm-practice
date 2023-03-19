// https://codeforces.com/problemset/problem/734/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = false;
readLine.on('line',
    (w) => {
        if (n === false) {
            n = Number(w)
            return;
        }
        let contadorA = 0;
        let contadorD = 0;
        for (let i = 0; i < w.length; i++) {
            w[i] === 'A' ? contadorA += 1 : contadorD += 1
        }
        if (contadorA > contadorD) {
            console.log('Anton');
        } else if (contadorA < contadorD) {
            console.log('Danik');
        } else {
            console.log('Friendship');
        }
    }
);