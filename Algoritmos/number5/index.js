/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, 
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

const arrinput = [1,5,6,7,9,15,16,19];

function complete() {
    const contador = 0;
    for (let i = 0; i < arrinput.length; i++) {
        const element = arrinput[i];
        if (element !== arrinput[i+1]-1) {
            console.log('no es asi'+ element);
        }
    }
    console.log('faltan -'+ contador+'-numeros intermedios');
}

complete();