const request = require("request");

const geocode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZXNjYXBlZGF3ZWIiLCJhIjoiY2trd20xc2dwNHU2cjJubGFkN3ZwajJ6cyJ9.SWkYB_ZWUjOMj-SHsaWoYA&limit=1";

  request({ url: geoUrl, json: true }, (e, r) => {
    if (e) {
      callback("g -> unable to connect to location services...", undefined);
    } else if (r.body.features.length === 0) {
      callback("g -> unable to find location.  try another search.", undefined);
    } else {
      const gps = {
        lat: r.body.features[0].center[1],
        lon: r.body.features[0].center[0],
        location: r.body.features[0].place_name,
      };

      callback(e, gps);
    }
  });
};

const w = () => {
  console.log("hello world");
};

module.exports = { geocode, w };
