import express from "express"
import * as cheerio from "cheerio"
import axios from "axios"
const PORT = process.env.PORT || 5000

const app = express()
const url = "https://www.cronista.com/MercadosOnline/dolar.html"

app.get("/", async (req,res)=>{
  try {
    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const selectorDolarBlue = "#market-scrll-1 > li:nth-child(1) > a > span.value"
    const selectorDolarBNA = "#market-scrll-1 > li:nth-child(2) > a > span.value"
    const selectorDolarTarjeta = "#market-scrll-1 > li:nth-child(4) > a > span.value"
    res.json({
      precioDolarBlue: $(selectorDolarBlue).text(),
      precioDolarBNA: $(selectorDolarBNA).text(),
      precioDolarTarjeta: $(selectorDolarTarjeta).text()
    })
  } catch (error) {
    res.json({error})
  }
})
app.listen(PORT, ()=> console.log('Haciendo scraping'))