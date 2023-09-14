// https://codeforces.com/problemset/problem/1669/A

/*
El problema "1669A - Median Maximization" en Codeforces es un problema de programación competitiva. La consigna del problema es la siguiente:

Dado un arreglo ordenado y un valor objetivo, encuentra el máximo valor que puedes agregar al arreglo de manera que la mediana del arreglo resultante sea igual al valor objetivo o mayor.

Aquí está una descripción más detallada de la consigna:

Dado un arreglo ordenado en forma ascendente de longitud n, y un valor entero objetivo k, debes agregar un número entero no negativo al arreglo de tal manera que la mediana del arreglo resultante sea igual al valor objetivo k o sea mayor que k.

La mediana de un arreglo es el número que se encuentra en la posición central si el arreglo está ordenado. Si el arreglo tiene una longitud par, entonces la mediana es el promedio de los dos números en el centro.

Tu tarea es encontrar el máximo valor que puedes agregar al arreglo de manera que la mediana sea igual o mayor que k. Luego, debes imprimir ese valor.

La entrada del problema consta de una sola línea que contiene dos números enteros separados por un espacio: n (1 ≤ n ≤ 100) y k (1 ≤ k ≤ 100). n representa la longitud del arreglo ordenado y k es el valor objetivo.

La salida debe consistir en un solo número entero: el máximo valor que puedes agregar al arreglo para cumplir con la condición de que la mediana sea igual o mayor que k.

En resumen, este problema te desafía a calcular el máximo valor que puedes agregar a un arreglo ordenado de manera que la mediana sea igual o mayor que un valor objetivo k. 
Puedes resolverlo utilizando matemáticas y considerando las propiedades de la mediana en un arreglo ordenado.
*/

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
let t = false
const input = []
rl.on("line", (w) => {
    if (t === false) {
        t = Number(w)
        return
    }
    input.push(Number(w))
    if (t === input.length) {
        console.log(input);
        rl.close()
    }
});