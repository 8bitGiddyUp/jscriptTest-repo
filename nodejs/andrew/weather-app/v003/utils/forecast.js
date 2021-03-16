const request = require("request");

const forecast = (lat, lon, callback) => {
  const weatherUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=" +
    lat +
    "," +
    lon;

  request({ url: weatherUrl, json: true }, (e, r) => {
    if (e) {
      callback("ERROR: NETWORK NOT FOUND...", r);
    } else if (r.body.error) {
      callback("ERROR: search unknown...", undefined);
    } else {
      const data = {
        temp: r.body.current.temp_f,
        condition: r.body.forecast.forecastday[0].day.condition.text,
        location: r.body.location.name,
      };
      callback(null, data);
    }
  });
};

module.exports = { forecast };
