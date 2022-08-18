const input = 84
const results = [input];
//La conjetura de Collatz
//Si el número es par se divide en 2.
//Si el número es impar se multiplica por 3 y al resultado se le suma 1.
function operation (){
    for(let i = 0; i<60; i++){
        let number = Number(results[results.length - 1]);
        if (number%2 ===0){
            results.push(number/2);
        } else {
            let plus = (number*3)+1
            results.push(plus);
        }
    }
    console.log(results);
}

operation();