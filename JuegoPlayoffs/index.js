// https://codeforces.com/problemset/problem/1535/A

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = false;
const input = [];

readline.on('line', (w) => {
    if (n === false) {
        n = Number(w);
        return;
    }
    input.push(w);
    if (input.length === n) {
        for (let i = 0; i < input.length; i++) {
            const [s1, s2, s3, s4] = input[i].split(' ').map(Number);
            const habilidad = [s1, s2, s3, s4];
            const [a, b] = habilidad.sort((a, b) => b - a); // Encuentra las dos habilidades más altas
            const semifinal1 = [Math.min(s1, s2), Math.max(s1, s2)]; // Semifinal 1
            const semifinal2 = [Math.min(s3, s4), Math.max(s3, s4)]; // Semifinal 2
            if ((semifinal1[0] === a || semifinal1[1] === a) && (semifinal2[0] === b || semifinal2[1] === b)) {
                console.log('YES');
            } else if ((semifinal1[0] === b || semifinal1[1] === b) && (semifinal2[0] === a || semifinal2[1] === a)) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
        readline.close();
    }
});
