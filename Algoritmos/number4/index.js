/*
 * Dado un listado de números, encuentra el SEGUNDO más grande.
    https://retosdeprogramacion.com/semanales2022
 */
const numberList = [3,54,13,66,95,1];
let bigNumber = 0;
let secondBigNumber = 0;

for (let i = 0; i < numberList.length ;i++){
    if(numberList[i] > numberList[i+1]){
        bigNumber = numberList[i];
    } else if(numberList[i] < numberList[i+1]) {
        bigNumber = numberList[i+1];
    }
}

console.log('number big--'+bigNumber);
console.log('number second--'+secondBigNumber);