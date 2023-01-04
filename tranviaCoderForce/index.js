const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
const input = [];
let n = false;
readLine.on('line', 
  (w) => {
          if (n == false) {
                  n = Number(w);
                  return;
          }
          console.log(w)
        }
  );