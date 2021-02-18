const request = require("request");
// arlington, va: atitude: 38.890396 | Longitude: -77.084158
// escape@yahoo.com
// weatherapi e65f47728f0c4a52bbd142425210702
// mapbox pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA
// mapbox https://docs.mapbox.com/api/search/geocoding/
const u =
  "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=38.890396,-77.084158&lang=es&days=3";

// "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=22204&days=3";
//    https://swapi.dev/api/planets/
//    http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=37.8267,-122.4233&days=3

/*
  weather api request
*/
request({ url: u, json: true }, (e, resp) => {
  if (e) {
    console.log("1 error...");
  } else if (resp.body.error) {
    console.log("1 resp.body.error: ", resp.body.error);
  } else {
    console.log("1 success...");
    /*
    with json: true; no longer need for JSON.parse
    const wF = JSON.parse(resp.body);
    */
    const wF = resp.body;
    const currentTemp = wF.current.temp_f;
    const rainChance = wF.forecast.forecastday[0].day.daily_chance_of_rain;
    const currentCond = wF.current.condition.text;
    console.log(
      `1 it is currently ${currentTemp} F.  There is a ${rainChance}% chance of ${currentCond}.`
    );
  }
});

/*
  mapbox api request
*/
const mapboxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA";
// const mapboxUrl =
//   "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=38.890396,-77.084158&lang=es&days=3";
request({ url: mapboxUrl, json: true }, (e, resp) => {
  const mb = resp.body;

  if (e) {
    console.log("2 error...");
  } else if (mb.message !== undefined) {
    console.log("2 mb.message: ", mb.message);
  } else if (mb.features.length === 0) {
    console.log("2 location cannot be found");
  } else {
    console.log("2 success...");
    const lat = mb.features[0].center[1];
    const lon = mb.features[0].center[0];
    console.log(`2 mb: lat ${lat} - lon ${lon}`);
  }
});
