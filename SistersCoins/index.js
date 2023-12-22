const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let s = false;
  const input = [];
  
  readLine.on('line', (w) => {
    if (s === false) {
      s = Number(w);
      return;
    }
  
    input.push(w);
  
    if (input.length === Number(s)) {
      for (let i = 0; i < input.length; i++) {
        let [a, b, c, n] = input[i].split(" ").map(Number);
        const max = Math.max(a, b, c);
        n -= max - a;
        n -= max - b;
        n -= max - c;
        console.log(n === 0 || (n > 0 && n % 3 === 0) ? "YES" : "NO");
      }
  
      readLine.close();
    }
  });
  