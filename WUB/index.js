//https://codeforces.com/problemset/problem/208/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

readline.on('line', (line) => {
    input = line.split('WUB').filter(word => word !== '');
    const result = input.join(' ')
    console.log(result);
    readline.close();
    }
);
