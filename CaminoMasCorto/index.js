//https://codeforces.com/problemset/problem/1547/A
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let t = 0; // Número de casos de prueba
let currentCase = 0; // Índice del caso de prueba actual
let lines = []; // Almacena todas las líneas de entrada
let coordinates = []; // Almacena las coordenadas para cada caso de prueba
const result = [];

readline.on('line', (line) => {
    if (t === 0) {
        t = Number(line);
        return;
    } 
    // Almacenar la línea actual
    if(line === ''){
        return
    }
    lines.push(line);
    // Cada caso de prueba tiene 3 líneas de coordenadas
    if (lines.length === 3) {
        // Parsear las coordenadas y almacenarlas en el array de coordenadas
        coordinates.push({
            A: lines[0].split(' ').map(Number),
            B: lines[1].split(' ').map(Number),
            F: lines[2].split(' ').map(Number),
        });
        lines = []; // Reiniciar el array de líneas para el próximo caso de prueba
        currentCase++;
        // Procesar y mostrar el resultado cuando todos los casos han sido leídos
        if (currentCase === t) {
            coordinates.forEach(coords => {
                const { A, B, F } = coords;
                const [xA, yA] = A;
                const [xB, yB] = B;
                const [xF, yF] = F;
                
                let distance = Math.abs(xA - xB) + Math.abs(yA - yB);
                
                // Chequear si F está directamente en el camino entre A y B
                if ((xA === xB && xA === xF && Math.min(yA, yB) < yF && yF < Math.max(yA, yB)) ||
                    (yA === yB && yA === yF && Math.min(xA, xB) < xF && xF < Math.max(xA, xB))) {
                    distance += 2;
                }
                
                console.log(distance);
            });
            readline.close();
        }
    }
    
});
