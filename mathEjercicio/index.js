const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = Number(w);
                return;
        }
        let l = Number(w);
        if(l % 2 == 0){
            console.log('YES');
            let resp = []
            for (let i = 0; i < l; i++) {
                i % 2 === 0 ? resp.push(1) : resp.push(-1);  
            }
            console.log(resp.join(' '));
        } else if (l === 3) {
            console.log('NO');
        } else {
            let a = l - Math.floor(l/2) -1;
            let b = Math.floor(l/2) -1;
            console.log('YES');
            let resp = []
            for (let i = 0; i < l; i++) {
                i % 2 === 0 ? resp.push(b) : resp.push(-a);
            }
            console.log(resp.join(' '));
        }
});