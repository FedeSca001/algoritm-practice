// https://codeforces.com/problemset/problem/1873/A

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let n = false;
  const input = [];
  
  readLine.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }
    input.push(w.replace(/\s/g, "").toLowerCase());
    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            // Verificar si la cadena es una de las permutaciones requeridas
            if (element === "abc" || element === "acb" || element === "cba" || element === "bac") {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
        readLine.close();
    }
});
  