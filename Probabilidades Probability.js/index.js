const Probability = require('probability-distributions');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Número de lanzamientos del dado: ', (numLanzamientos) => {
  numLanzamientos = parseInt(numLanzamientos);

  if (isNaN(numLanzamientos) || numLanzamientos <= 0) {
    console.log('Por favor, ingresa un número válido de lanzamientos.');
    readline.close();
    return;
  }

  // Probabilidad de obtener un número par en un lanzamiento (1/3)
  const probabilidadUnLanzamiento = 1 / 3;

  // Calcular la probabilidad teórica de obtener números pares en numLanzamientos
  const probabilidadTeorica = Probability.pdf.binom(numLanzamientos, probabilidadUnLanzamiento, (k) => k % 2 === 0);

  console.log(`Número de lanzamientos: ${numLanzamientos}`);
  console.log(`Probabilidad teórica de obtener números pares: ${probabilidadTeorica.toFixed(4)}`);

  readline.close();
});
