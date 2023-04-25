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

let listLetras = []

readLine.on('line',
    (line) =>{
        for (let i = 0; i < line.length; i++) {
            const element = line[i].toLowerCase();
            let isInList = false
            if (element !== ' ') {
            for (let indx = 0; indx < listLetras.length; indx++) {
                const eleMent = listLetras[indx];
                if (eleMent.letra === element) {
                    eleMent.cant ++
                    isInList = true
                }
            }
            if (!isInList) listLetras.push({"letra":element,"cant":1})
            }
        }
        //console.log(listLetras);
        //Calcular cual es la letra que mas aparece
        console.log('   ---    ');
/*
        let cantidadMaxima = {"letra":'',"cant":0};

        for (let ind = 0; ind < listLetras.length; ind++) {
            const el = listLetras[ind];
            if (el.cant > cantidadMaxima.cant) {
                cantidadMaxima = el
            }
        }
        console.log('La letra que más aparece es:',cantidadMaxima.letra,'   -',cantidadMaxima.cant,'-veces');
        
*/
        //Calcular Top five
        let topFive = [{"letra":'',"cant":0}];
        let n = 0;
        while (n<6) {
            n++
            for (let ind = 0; ind < listLetras.length; ind++) {
                const e = listLetras[ind];
                if (e.cant > topFive[topFive.length-1].cant) {
                    topFive[topFive.length-1] = e
                }
            }
        }
        console.log(topFive);

        readLine.close();
    }
  );