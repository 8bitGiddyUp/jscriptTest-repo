"use strict";

setTimeout(() => {
  console.log("finally 5 sec waiting is over...");
}, 2000);

const names = ["andy", "dan", "oswaris"];
names.forEach((name) => {
  console.log("name: ", name);
});

const geocode = (address, callback) => {
  setTimeout(() => {
    console.log("finally another 1 sec waiting is over...");
    const data = {
      lat: 7,
      lon: 9,
    };
    callback(data);
  }, 1000);
};

geocode("NYC", (dt) => {
  console.log("dt: ", dt);
});

// https://gist.github.com/andrewjmead/9d35b2a9f98455902ec9aa97097028d7
// https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (a, b, callback) => {
  setTimeout(() => {
    console.log("adding a + b");
    const sm = a + b;
    mySum = callback(sm);
  }, 500);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
