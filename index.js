const PORT = 8000
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");


const app = express() 

const url = 'https://en.wikipedia.org/wiki/Business_Insider'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
        const $ = cheerio.load(html)

    })

/* How TODO

	const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
   */


  

     

app.listen(PORT, () => console.log(`server running on port ${PORT}`)); 