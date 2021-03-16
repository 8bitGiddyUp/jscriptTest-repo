"use strict";

const request = require("request");
const g = require("./utils/geocode");
const f = require("./utils/forecast");

g.geocode("nyc", function (e, d) {
  console.log("g -> error: ", e);
  console.log("g -> data: ", d);
});

f.forecast(44.1545, -75.7088, (error, data) => {
  console.log("w -> Error: ", error);
  console.log("w -> Data: ", data);
});
