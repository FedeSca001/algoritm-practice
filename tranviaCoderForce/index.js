process.stdin.on('data', input => {
  const stops = String(input)
    .split('\r\n')
    .slice(1, -1)
    .map(line => 
      line.split(' ').map(Number)
    )
  let [max, current] = [0, 0]
  stops.forEach(stop => {
    current += stop[1] - stop[0]
    max = Math.max(current, max)
  })
  console.log(max)
})

/*const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = Number(w);
                return;
        }
});*/