const request = require("request");

const forecast = ({ lat, lon, location }, callback) => {
  const weatherUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=e65f47728f0c4a52bbd142425210702&q=" +
    lat +
    "," +
    lon;

  request({ url: weatherUrl, json: true }, (e, { body }) => {
    if (e) {
      callback("f -> ERROR: NETWORK NOT FOUND...", body);
    } else if (body.error) {
      callback("f -> ERROR: search unknown...", undefined);
    } else {
      const data = {
        temp: body.current.temp_f,
        condition: body.forecast.forecastday[0].day.condition.text,
        location: body.location.name,
      };
      callback(null, data);
    }
  });
};

module.exports = { forecast };
