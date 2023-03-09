const request = require('request');
const cheerio = require('cheerio');

// URL de la página web que se va a leer
const url = 'https://www.ole.com.ar/';

// Hacer una petición HTTP GET a la página web
request(url, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    // Cargar el HTML en cheerio
    const $ = cheerio.load(body);
    // Buscar todas las etiquetas h1 en el HTML
    $('a.title').each((i, el) => {
      // Imprimir el contenido de cada etiqueta h1 por consola
      console.log(el,'Index ',i);
      //console.log(el.attribs.slot,i);
    });
  } else {
    console.log('error',error);
  }
});