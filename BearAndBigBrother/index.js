// https://codeforces.com/problemset/problem/791/A

const readLine = require('readline').createInterface(
    {input: process.stdin,output: process.stdout,}
);
readLine.on('line',
    (w) => {
        let input = w.split(' ');
        let a = Number(input[0]);
        let b = Number(input[1]);
        let años = 0;
        while (a <= b) {
            años += 1;
            a = a * 3;
            b = b * 2;
        }
        console.log(años);
    }
  );