const request = require("request");
const url =
  "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=37.8267,-122.4233&days=3";

// "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=22204&days=3";
//    https://swapi.dev/api/planets/
//    http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=37.8267,-122.4233&days=3

https: request({ url: url }, (error, response) => {
  const wF = JSON.parse(response.body);
  const currentTemp = wF.current.temp_f;
  const rainChance = wF.forecast.forecastday[0].day.daily_chance_of_rain;
  console.log(
    `it is currently ${currentTemp} F.  There is a ${rainChance}% chance of rain.`
  );
});
