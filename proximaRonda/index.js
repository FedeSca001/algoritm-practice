const readLine = require('readline').createInterface(
    {input: process.stdin,output: process.stdout,}
);
const input = [];
let n = 2;
readLine.on('line',
    (w) => {
        input.push(w)
        if (input.length == n){
            let array1 = input[0].split(' ');
            let array2 = input[1].split(' ');
            let contadorParticipantes = 0;
            for (let i = 0; i < array1[0]; i++){
                let element = Number(array2[i]);
                if (element >= Number(array2[Number(array1[1])-1]) && element > 0 ){
                    contadorParticipantes += 1;
                }
            }
            console.log(contadorParticipantes);
        }
    }
  );