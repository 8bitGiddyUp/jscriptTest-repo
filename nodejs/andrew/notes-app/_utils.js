"use strict";

console.log("this is utils.js");
const name = "Jack";

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

module.exports = {
  add,
  substract,
  times: function (a, b) {
    return a * b;
  },
};
