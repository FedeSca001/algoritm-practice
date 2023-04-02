const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
let parrafo = [];
readLine.on('line',
    (line) =>{
        parrafo=line.split(' ')//La variable parrafo es un array con todas las palabras separadas
        /* Como objetivo este código va a retornar la última letra de cada palabra JEJE */
        for (let i = 0; i < parrafo.length; i++) {
            const element = parrafo[i];
            console.log(element[element.length-1]);
        }
        console.log(parrafo);
        readLine.close();//Close
    }
  );