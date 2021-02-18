"use strict";

setTimeout(() => {
  console.log("two seconds are up");
}, 2000);

const names = ["andrew", "jen", "jess"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

console.log("short names: ", shortNames);

const geocode = (address, callback) => {
  const data = {
    lat: 0,
    lon: 0,
  };

  return data;
};

const d = geocode("philly");
console.log("gecode returned: ", d);

// links.mead.io/callback
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

function add1(a, b, aSumB) {
  setTimeout(() => {
    const sum = a + b;
    aSumB(sum);
  }, 2000);
}

const add2 = (a, b, callback) => {
  setTimeout(() => {
    const add = a + b;
    callback(add);
  }, 2000);
};

add1(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

add2(6, 4, (sum) => {
  console.log(sum); // Should print: 5
});

console.log("+ filter e1...");
// sync filter
const e1 = [1, 2, 3, 4, 5, 6, 7, 8].filter((n) => {
  return n % 2 === 0;
});
console.log(e1);
console.log("- filter e1...");

console.log("+ filter e2...");

// async filter
// const e2 = [1, 2, 3, 4, 5, 6, 7, 8].filter((n) => {
//   return n % 2 === 0;
// });
function asyncFilter(arr, cb) {
  const en = arr.filter((a) => {
    let r = false;
    setTimeout(() => {
      r = cb(a);
    }, 2000);

    return r;
  });
  console.log("settimout even: ", en);
}

const result = asyncFilter([1, 2, 3, 4, 5, 6, 7, 8], function (n) {
  return n % 2 === 0;
});
console.log("- filter e2...", result);
