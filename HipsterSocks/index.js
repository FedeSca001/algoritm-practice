// https://codeforces.com/problemset/problem/581/A

const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});

readLine.on('line',
    (w) => {
        let [a,b] = w.split(' ').map(Number)
        if (b > a) {
            let t = b
            b = a
            a = t
        }
        console.log(b,Math.floor((a - b)/2));
        readLine.close()
    }
  );