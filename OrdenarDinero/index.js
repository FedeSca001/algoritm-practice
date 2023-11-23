// https://codeforces.com/problemset/problem/996/A

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (w) => {
    let data = Number(w)
    let count = 0
    let coins = [100, 20, 10, 5, 1]
    for (let i = 0; i < coins.length; i++) {
        const e = coins[i];
        if (data > 0) {
            count += Math.floor(data/e)
            data -= Math.floor(data/e) * e
        }
    }
    console.log(count);
    rl.close()
});