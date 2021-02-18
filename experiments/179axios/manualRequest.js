"use strict";

const https = require("http");
const weatherUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=38.890396,-77.084158&lang=es&days=3";
const request = https.request(weatherUrl, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an error: ", error);
});

request.end();
