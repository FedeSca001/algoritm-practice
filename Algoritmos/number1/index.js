/*
esarrolle  un  algoritmo  que  permita  leer  tres  valores  y  almacenarlos  en  las  variables A, B y C respectivamente.
El algoritmo  debe imprimir cual  es el mayor  y cual es el menor.
Recuerde  constatar  que los tres valores introducidos por el teclado sean valores distintos.
Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales. 
*/
const a = 24;
const b = 456;
const c = 15;
function threeNumbers(){
    if (a!=b && b!=c && a!=c){
        console.log('son diferentes');
        if(a > b && a > c){
            console.log(`El mayor es A: ${a}`);
            if(b<c){
                console.log(`El menos es B: ${b}`);
            } else{
                console.log(`El menos es C: ${c}`);
            }
        } else if (b > c){
            console.log(`El mayor es B: ${b}`);
            if(a<c){
                console.log(`El menos es A: ${a}`);
            } else{
                console.log(`El menos es C: ${c}`);
            }
        } else {
            console.log(`El mayor es C: ${c}`);
            if(a<b){
                console.log(`El menos es A: ${a}`);
            } else {
                console.log(`El menos es C: ${c}`);
            }
        }
    } else {
        console.log('Hay dos o más numeros iguales');
    }
}
threeNumbers();