const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://scrimba.com/dashboard#enrolled";
axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const courseName = $(".title").text();
    console.log(courseName);
  })
  .catch(console.error);
