const axios = require("axios");
const url = "https://scrimba.com/dashboard#overview";
axios(url).then((response) => {
  const html = response.data;
  console.log(html);
});
