/*
Un tranvía
límite de tiempo por prueba2 segundos
límite de memoria por prueba256 megabytes
aporteentrada estándar
producciónsalida estándar
Linear Kingdom tiene exactamente una línea de tranvía.
Tiene n paradas, numeradas del 1 al n en el orden de circulación del tranvía.
En la i -ésima parada , los pasajeros i salen del tranvía, mientras que los pasajeros 
b i entran en él. El tranvía está vacío antes de llegar a la primera parada. Además, 
cuando el tranvía llega a la última parada, todos los pasajeros salen para que quede vacío.

Tu tarea es calcular la capacidad mínima del tranvía de modo que el número de personas 
dentro del tranvía en cualquier momento nunca exceda esta capacidad.
Tenga en cuenta que en cada parada, todos los pasajeros que salen salen 
antes de que cualquier pasajero que ingrese ingrese al tranvía.

Aporte
La primera línea contiene un solo número n ( 2 ≤  n  ≤ 1000 ) — 
el número de paradas del tranvía.

Luego siguen n líneas, cada una contiene dos números enteros 
a i y b i ( 0 ≤  a i ,  b i  ≤ 1000 ) — el número de pasajeros que salen del tranvía 
en la i -ésima parada, y el número de pasajeros que entran al tranvía en la i -ésima parada.
Las paradas se dan desde la primera hasta la última parada en el orden de movimiento del tranvía.

El número de personas que bajan en una parada dada no excede el número total de 
personas en el tranvía inmediatamente antes de que llegue a la parada. Más formalmente,
. Esto significa particularmente que a 1  = 0 .
En la última parada, todos los pasajeros salen del tranvía y se vacía. Más formalmente
Ningún pasajero subirá al tren en la última parada. Es decir, bn =  0 .
Producción
Imprima un solo número entero que indique la capacidad mínima posible del tranvía (se permite 0).

Inputs ejemplo: 
4
0 3
2 5
4 2
4 0

Produccion: 6

*/

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,});

const input = [];
let n = false;
readLine.on('line', 
        (w) => {if (n == false){n = Number(w);return;}//n es el valor del caracter ingresado
                input.push(n)//Agrega el valor ingresado al array de input
                if (n >= 2 && n <= 1000) {
                        console.log('hacer la logica aca');
                } else {
                        console.log('ingresar bien N');
                }
        }
  );