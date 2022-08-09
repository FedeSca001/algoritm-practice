/*
 * Dado un listado de números, encuentra el SEGUNDO más grande.
    https://retosdeprogramacion.com/semanales2022
 */
const numberList = [3,54,13,66,95,1,665,48978764];

function secBigName(list) {
    let bigNumber = 0;
    let secondBigNumber = 0;
    for (let i = 0; i < list.length ;i++){
        if(list[i] > list[i+1]){
            bigNumber = list[i];
        } else if(list[i] < list[i+1]) {
            bigNumber = list[i+1];
        }
    }
    const result = list.filter((element) => element !== bigNumber);
    for (let index = 0; index < result.length; index++) {
        if (result[index] > result[index+1]) {
            secondBigNumber = result[index];
        } else if (result[index] < result[index+1]) {
            secondBigNumber = result[index+1]
        }
    }
    console.log('number second--'+secondBigNumber);
}
secBigName(numberList)
