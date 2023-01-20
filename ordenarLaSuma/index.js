//https://codeforces.com/problemset/problem/339/A

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (w) => {console.log(w.split('+').sort().join('+'));});
