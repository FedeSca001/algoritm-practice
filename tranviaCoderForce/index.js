const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = Number(w);
                return;
        }
});