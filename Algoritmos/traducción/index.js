const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const input = [];
let n = 2;
readLine.on('line',
        (w) => {input.push(w)//Agrega el valor ingresado al array de input
                if (input.length == n) {
                    let palabraUno = String(input[0]).split('');
                    let palabraDos = String(input[1]).split('');
                    for (let i = 0; i < palabraUno.length/2; i++) {
                        let primerLetra = palabraUno[i];
                        let letraFinal = palabraUno[palabraUno.length-1-i];
                        palabraUno[i] = letraFinal;
                        palabraUno[palabraUno.length-1-i] = primerLetra;
                    }
                    palabraUno.join('') === palabraDos.join('') ? console.log('YES'):console.log('NO');
                }
        }
  );