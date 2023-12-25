const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let n = false;
  const input = [];
  
  readLine.on('line', (w) => {
    if (n === false) {
      n = Number(w);
      return;
    }
    input.push(w);
    if (input.length === n * 2) {
      for (let index = 0; index < input.length; index += 2) {
        const cantidad = Number(input[index]);
        const dulces = input[index + 1].split(' ').map(Number);
        
        // Obtener el mínimo de dulces
        let menor = Math.min(...dulces);
  
        // Calcular el total de dulces a comer
        let contador = 0;
        for (let i = 0; i < cantidad; i++) {
          contador += dulces[i] - menor;
        }
  
        console.log(contador);
      }
      readLine.close();
    }
  });
  