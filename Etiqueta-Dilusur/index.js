const { createCanvas } = require('canvas');
const fs = require('fs');

// Dimensiones de la etiqueta
const width = 800;
const height = 400;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fondo blanco
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, width, height);

// Configuración del texto
ctx.fillStyle = 'black';
ctx.font = '40px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Dibujar el texto
ctx.fillText('CERA TUNEL LAVADO', width / 2, 100);
ctx.fillText('CARWAS C', width / 2, 170);
ctx.fillText('20L', width / 2, 240);

// Franja negra
ctx.fillStyle = 'black';
ctx.fillRect(0, height - 100, width, 100);

// Texto del sitio web en la franja negra
ctx.fillStyle = 'white';
ctx.fillText('www.dilusur.com', width / 2, height - 50);

// Guardar la imagen
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('label_corrected.png', buffer);

console.log('Etiqueta generada: label_corrected.png');
