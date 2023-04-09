const request = require('request');
const cheerio = require('cheerio');

// URL de la página web que se va a leer
const url = 'https://www.ole.com.ar/futbol-internacional';


request(url, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(body);
    $('a').each((i, el) => {
      console.log(el,i);
    });
  } else {
    console.log('error',error);
  }
});