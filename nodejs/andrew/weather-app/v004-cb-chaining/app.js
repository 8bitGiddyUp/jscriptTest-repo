"use strict";

const request = require("request");
const g = require("./utils/geocode");
const f = require("./utils/forecast");

const address = process.argv[2];
console.log("address: ", address);

if (!address) {
  console.log("please provide an address...");
} else {
  g.geocode(address, function (e, d) {
    if (e) {
      return console.log(e);
    }

    console.log("g -> error: ", e);
    console.log("g -> data: ", d);

    f.forecast(d.lat, d.lon, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log("d.location: ", d.location);
      console.log("forecastData: ", forecastData);
    });
  });
}
