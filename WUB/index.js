//https://codeforces.com/problemset/problem/208/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.on('line', (line) => {
    const input = line.split('WUB').filter(word => word !== '');
    const result = input.join(' ');
    console.log(result);
    readline.close();
    }
);