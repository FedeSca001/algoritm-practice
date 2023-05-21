const readLine = require('readline').createInterface({input: process.stdin,output: process.stdout,});
const { performance } = require('perf_hooks');

let listLetras = []



// Tu código a medir aquí
const end = performance.now();



readLine.on('line',
    (line) =>{
        const start = performance.now();//Inicia a medir el tiempo
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

        //Calcular cual es la letra que mas aparece
        console.log('   ---    ');
        
        let cantidadMaxima = {"letra":'',"cant":0};
        for (let ind = 0; ind < listLetras.length; ind++) {
            const el = listLetras[ind];
            if (el.cant > cantidadMaxima.cant) {
                cantidadMaxima = el
            }
        }
        console.log('La letra que más aparece es:',cantidadMaxima.letra,'   -',cantidadMaxima.cant,'-veces');
        
        //Calcular Top five
        let topFive = [{"letra":'',"cant":0}];
        let n = 0;
        while (n<5) {
            n++
            let addElement = {}
            for (let ind = 0; ind < listLetras.length; ind++) {
                const e = listLetras[ind];
                if (e.cant > topFive[topFive.length-1].cant) {
                    addElement = e
                }
            }
            topFive.push(addElement)
        }
        console.log(topFive);

       // readLine.close();
       const end = performance.now();
       console.log('Tiempo transcurrido:', end - start, 'ms');
    }
  );