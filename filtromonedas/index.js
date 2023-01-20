const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const contenedorMonedas = [];
let n = false;
rl.on("line", (w) => {
        if (n == false) {
                n = Number(w);
                return;
        }
        contenedorMonedas.push(Number(w));
        if (contenedorMonedas.length == n) {
                let referenciaIndex = new Array(n).fill(null);
                contenedorMonedas.sort(function (a, b) {return b - a;}) //ordeno el array de mas a menos
                let contadorSaco = 0;//cantidad de sacos que se encuentran en el algoritmo
                let contadorSuma = 0;//lleva la suma de la iteracion (si llega a 5 pasa a otro saco)
                let cantNoAsignadas = n;
                while (cantNoAsignadas > 0) {
                        for (let index = 0; index < contenedorMonedas.length; index++) {
                                let element = contenedorMonedas[index];
                                if (referenciaIndex[index] === null) {
                                      if ((contadorSuma + element) <= 5) {
                                              referenciaIndex[index] = contadorSaco;
                                              contadorSuma+=element;
                                              cantNoAsignadas -= 1;
                                      }
                                }
                        }
                        contadorSaco += 1;
                        contadorSuma = 0;
                }                
                console.log('Contenedor inicial', contenedorMonedas);
                console.log('ReferenciaIndex', referenciaIndex);
        }
});
