//https://codeforces.com/problemset/problem/155/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 
let n = false;
readLine.on('line',
    (w) => {
        if (n == false){
            n = Number(w);
            return;
        }
        const input = w.split(' ')
        let actuacionSorprendente = 0
        let maxNum = input[0];
        let minNum = input[0];
        if (input.length > 1) {
        for (let i = 1; i < input.length; i++) {
            const element = Number(input[i]);
            if (element > maxNum) {
            maxNum = element;
            actuacionSorprendente++

            }
            if (element < minNum) {
                minNum = element;
                actuacionSorprendente++
            }
        }
        }
        console.log(actuacionSorprendente);
    }
  );