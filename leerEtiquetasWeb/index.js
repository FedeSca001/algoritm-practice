const axios = require('axios');
const cheerio = require('cheerio');

// URL de la página que deseas hacer scraping
const url = 'https://www.linkedin.com/in/federico-scarpecci-developer/';

// Realizar la solicitud HTTP a la página
axios.get(url)
  .then(response => {
    // Cargar el HTML de la respuesta utilizando Cheerio
    const $ = cheerio.load(response.data);
    
    // Filtrar y obtener solo el contenido de texto de la página
    const textContent = $('body')
      .contents()
      .filter(function() {
        return this.type === 'text';
      })
      .text()
      .trim();
    
    // Imprimir el contenido de texto
    console.log('Contenido de texto de la página:', textContent);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud HTTP:', error);
  });