const fs = require('fs-extra');
const path = require('path');

const directorio = path.join(__dirname, '../../../../../feder/Pictures/Screenshots/sweet_wen');


fs.readdir(directorio, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  files.forEach((file, index) => {
    const ext = path.extname(file);
    const nuevoNombre = `sweet_wen_${index + 1}${ext}`;
    const antiguaRuta = path.join(directorio, file);
    const nuevaRuta = path.join(directorio, nuevoNombre);

    fs.rename(antiguaRuta, nuevaRuta, (err) => {
      if (err) {
        console.error(`Error al renombrar ${file}:`, err);
      } else {
        console.log(`${file} renombrado a ${nuevoNombre}`);
      }
    });
  });
});
