const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
let scraped_Classes = [];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto("https://scrimba.com/dashboard#enrolled", {
      timeout: 180000
    });
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    let $ = cheerio.load(bodyHTML);
    let class_headlines = $(
      'a[href*="https://scrimba.com/dashboard#enrolled"] > span'
    );
    class_headlines.each((index, element) => {
      title = $(element).find("span").text();
      scraped_Classes.push({
        title: title
      });
    });
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
    console.log(scraped_Classes);
  }
})();
