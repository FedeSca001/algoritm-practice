const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let numero = 0
let resultados = [0, 0, 0, 0, 0, 0];
rl.on("line", (w) => {
    for (let i = 0; i < Number(w); i++) {
        numero = Math.floor(Math.random() * 6) + 1;
        resultados[numero -1]++
    }
    console.log(resultados);
    rl.close()
});