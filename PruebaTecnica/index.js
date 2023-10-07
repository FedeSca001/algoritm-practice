// https://www.youtube.com/watch?v=npfzSC8B3aM&ab_channel=TodoCode

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

const grillaAsientos = [];
for (let i = 0; i < 10; i++) {
    const fila = [];
    for (let j = 0; j < 10; j++) {
        fila.push('L');
    }
    grillaAsientos.push(fila);
}

console.log('Bienvenidos al gestor de teatros <3');

let fila = false;
let columna = false;
function solicitarNuevaReserva() {
    rl.question('¿Desea reservar otro asiento? Responda SI o NO: ', (respuesta) => {
        if (respuesta.toUpperCase() === 'SI') {
            console.log('Ingrese la fila del asiento con un número entre 1 y 10, luego presione enter e ingrese la columna');
        } else if (respuesta.toUpperCase() === 'NO') {
            console.log('Gracias por usar el gestor de teatros. Hasta luego.');
            rl.close();
        } else {
            console.log('Respuesta inválida. Por favor, responda con SI o NO.');
            solicitarNuevaReserva();
        }
    });
}

console.log('Ingrese la fila del asiento con un número entre 1 y 10, luego presione enter e ingrese la columna');

rl.on("line", (w) => {

    if (!fila) {
        fila = Number(w);
        return;
    }

    if (!columna) {
        columna = Number(w);
    }

    if (grillaAsientos[fila - 1][columna - 1] === 'L') {
        grillaAsientos[fila - 1][columna - 1] = 'X';
        console.log('Reserva exitosa. Asiento marcado como ocupado.');
    } else {
        console.log('Asiento ocupado. Seleccione otro asiento.');
    }
    fila = false;
    columna = false;
    for (let i = 0; i < grillaAsientos.length; i++) {
        const fila = grillaAsientos[i];
        let filaStr = '';
    
        for (let j = 0; j < fila.length; j++) {
            const estadoAsiento = fila[j];
            filaStr += ' [' +estadoAsiento + '] ';
        }
    
        console.log(filaStr);
    }
    console.log('¿Desea reservar otro asiento? Responda SI o NO: ');
    solicitarNuevaReserva();
});
