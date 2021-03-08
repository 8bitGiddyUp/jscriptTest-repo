"use strict";

const request = require("request");

const weatherUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=22204&aqi=no";

request({ url: weatherUrl, json: true }, (e, r) => {
  const rainChance = r.body.forecast.forecastday[0].day.daily_chance_of_rain;
  const currentTemp = r.body.current.temp_f;
  console.log(
    `it is currently ${currentTemp}.  there is a ${rainChance}% chance of rain.`
  );
});
