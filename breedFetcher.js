const args = process.argv;
const cat = args.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${cat[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (body === "[]") {
    console.log(`Could not find search results for your query: ${cat[0]}`);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});