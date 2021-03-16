"use strict";

const request = require("request");
const g = require("./utils/geocode");

// const weatherUrl =
//   "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=22204&aqi=no";

// const badWeatherUrl =
//   "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=";

// request({ url: weatherUrl, json: true }, (e, r) => {
//   if (e) {
//     console.log(e);
//   } else if (r.body.error) {
//     console.log("url returned an error");
//   } else {
//     console.log("good url");
//     const rainChance = r.body.forecast.forecastday[0].day.daily_chance_of_rain;
//     const currentTemp = r.body.current.temp_f;
//     console.log(
//       `it is currently ${currentTemp}.  there is a ${rainChance}% chance of rain.`
//     );
//   }
// });

// const mapUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA&limit=1";
// const mapUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//   address +
//   ".json?access_token=pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA&limit=1";
// const badMapUrl =
//   "https://api.mapbox./geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA&limit=1";

// request({ url: mapUrl, json: true }, (e, r) => {
//   if (e) {
//     console.log("SERVER NOT FOUND");
//   } else if (r.body.features.length === 0) {
//     console.log("SEARCH FOUND NOTHING");
//   } else {
//     const lat = r.body.features[0].center[1];
//     const lon = r.body.features[0].center[0];
//     const placeName = r.body.features[0].place_name;
//     console.log(`${placeName} is at lat: ${lat} lon: ${lon}`);
//   }
// });

g.geocode("nyc", function (e, d) {
  console.log("error: ", e);
  console.log("data: ", d.lat, d.lon);
  console.log("place name: ", d.placeName);
});

g.w();
