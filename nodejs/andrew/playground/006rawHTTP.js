const https = require("https");

const weatherUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=40,-75";

const request = https.request(weatherUrl, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log("body: ", body);
  });
});

request.on("error", (error) => {
  console.log("error: ", error);
});

request.end();
