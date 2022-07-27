/*
Desarrolle  un algoritmo  que realice  la sumatoria  de los números enteros  múltiplos  de 5,
comprendidos entre  el  1  y el   100,  es decir,  5  + 10  +  15  +….  +  100. 
El  programa  deberá  imprimir  los  números  en cuestión y finalmente su sumatoria
*/

let n=0;
let plus = 0;
function iteration(){
    for (let i = 0; n < 95; i++) {
        n = n+5;
        plus = plus + n;
        console.log('Number:'+n);
    }
    console.log('Result: '+plus);
}
iteration();