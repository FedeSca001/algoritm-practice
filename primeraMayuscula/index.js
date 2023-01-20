//https://codeforces.com/problemset/problem/281/A

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (w) => {console.log(w[0].toUpperCase()+w.substring(1));});
