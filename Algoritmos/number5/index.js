/*
 * Enunciado: Crea un función, que dado un año, indique el elemento
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

const elementos = ['madera', 'fuego', 'tierra', 'metal', 'agua'];
const animales = ['rata', 'buey', 'tigre', 'conejo', 'dragón', 'serpiente', 'caballo', 'oveja', 'mono', 'gallo', 'perro', 'cerdo'];
const ciclos = [];

function cicloSexagenario(el, an){
    for (let i = 0; i <= 60; i++){
        ciclos.push({
            elemento: el[i],
            animal: an[i] 
        });
    }
    console.log(ciclos);
}

cicloSexagenario(elementos, animales)