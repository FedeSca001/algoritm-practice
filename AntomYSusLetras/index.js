// https://codeforces.com/problemset/problem/443/A
const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
 

readLine.on('line',
  (w) => {
    const str = w.slice(1,w.length-1)
    console.log(str.length > 0 ? new Set(str.split(', ')).size : 0 )
    readLine.close()
  }
);