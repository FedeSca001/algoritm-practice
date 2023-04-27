// link tutorial : https://www.youtube.com/watch?v=dJpSTPUVKQU&ab_channel=FaztCode
const cheerio = require('cheerio');
const request = require('request-promise');
const url= 'https://quotes.toscrape.com/'

 const init = async ()=>{
    const $ = await request({
        uri: url,
        transform: body => cheerio.load(body)
    });
    console.log($('title').html());
}

init();