"use strict";

const request = require("request");
const g = require("./utils/geocode");
const f = require("./utils/forecast");

const address = process.argv[2];
console.log("address: ", address);

if (!address) {
  console.log("please provide an address...");
} else {
  g.geocode(address, function (e, { lat, lon, location }) {
    if (e) {
      return console.log(e);
    }

    console.log("g -> error: ", e);

    f.forecast(
      { lat, lon, location },
      (error, { location: flocation, temp, condition }) => {
        if (error) {
          return console.log(error);
        }

        console.log("location: ", location);
        console.log("flocation: ", flocation);
        console.log("temp: ", temp);
        console.log("condition: ", condition);
      }
    );
  });
}
