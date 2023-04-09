const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
let parrafo = [];
let inputValor = false;
readLine.on('line',
    (line) =>{
        if (inputValor === false) {inputValor = line; return}
        //La variable parrafo es un array con todas las palabras separadas
        //parrafo=line.split(' ')
        /* Como objetivo este código va a retornar la última letra de cada palabra JEJE 
        for (let i = 0; i < parrafo.length; i++) {
            const element = parrafo[i];
            console.log(element[element.length-1]);
        }*/
        let contadorLetra = 0;
        for (let i = 0; i < line.length; i++) {
            const ele = line[i];
            if (ele === inputValor) contadorLetra ++
        }
        console.log('La letra ',inputValor,'se repite ',contadorLetra,' veces');
        //readLine.close();
    }
  );