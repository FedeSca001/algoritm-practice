// https://codeforces.com/problemset/problem/1367/B

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let t = false; // numero de casos
let n = false;
let out = 0
rl.on("line", (w) => {
    if (t === false) {
        t = Number(w)
        return
    }
    if (n === false) {
        n = Number(w)
        return
    }
    const arr = w.split(' ').map(Number)

    let evenInOddPos = 0;
    let oddInEvenPos = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            if (arr[i] % 2 !== 0) {
                oddInEvenPos++;
            }
        } else {
            if (arr[i] % 2 === 0) {
                evenInOddPos++;
            }
        }
    }
    if (evenInOddPos !== oddInEvenPos) {
        console.log(-1);
    } else {
        console.log(evenInOddPos);
    }
    n = false
    out++
    if (t === out) {
        rl.close()
    }
});