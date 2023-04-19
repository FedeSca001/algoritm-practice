/*const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});

const contadorDeLetras = (valorInput,textInput)=>{
        let contadorLetra = 0;
        for (let i = 0; i < textInput.length; i++) {
            const ele = textInput[i];
            if (ele === valorInput) contadorLetra ++
        }
        listLetras.push({"letra":valorInput,"cant":contadorLetra})
}

let listLetras = []

readLine.on('line',
    (line) =>{
        for (let i = 0; i < line.length; i++) {
            const element = line[i];
            if (element !== ' ') {
                let isInList = false
                for (let indx = 0; indx < listLetras.length; indx++) {
                    const eleMent = listLetras[indx];
                    if (eleMent.letra === element) {
                        isInList = true
                    }
                }
                if (!isInList) contadorDeLetras(element,line)
            }
        }
        console.log(listLetras);
        readLine.close();
    }
  );*/


const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});

let listLetras = [0]

readLine.on('line',
    (line) =>{
        for (let i = 0; i < line.length; i++) {
            const element = line[i];
            let isInList = false
            for (let indx = 0; indx < listLetras.length; indx++) {
                const eleMent = listLetras[indx];
                if (eleMent.letra === element) {
                    eleMent.cant ++
                    isInList = true
                }
            }
            if (!isInList) listLetras.push({"letra":element,"cant":1})

        }
        console.log(listLetras);
        readLine.close();
    }
  );