// https://codeforces.com/problemset/problem/492/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', (line) => {
    const n = Number(line);
    let height = 0;
    let totalCubes = 0;
    let level = 1;

    while (true) {
        let cubesNeeded = (level * (level + 1)) / 2;
        if (totalCubes + cubesNeeded <= n) {
            totalCubes += cubesNeeded;
            height++;
            level++;
        } else {
            break;
        }
    }

    console.log(height);
    readline.close();
});
