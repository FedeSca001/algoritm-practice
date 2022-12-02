/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, 
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

const arrinput = [3,5,6,7,9,15,16,19];
let newArr = [];
function complete() {
    for (let i = 0; i < arrinput[arrinput.length-1]; i++) {
        if (arrinput[i] === arrinput[i + 1] - 1) {
            console.log('bien');
        } else {
            newArr = arrinput.splice(i+1,0, arrinput[i]+1)
            console.log(arrinput[i] + 1+'--arrinm +1');
        }
    }
    console.log(newArr);
}

complete();