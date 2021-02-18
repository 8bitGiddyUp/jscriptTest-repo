// http://latentflip.com/loupe
// https://youtu.be/8aGhZQkoFbQ

setTimeout(function timeout1() {
  console.log("hi1");
}, 1000);

setTimeout(function timeout2() {
  console.log("hi2");
}, 1000);

setTimeout(function timeout3() {
  console.log("hi3");
}, 1000);

setTimeout(function timeout4() {
  console.log("hi4");
}, 1000);

[1, 2, 3, 4].forEach((i) => {
  console.log(i);
});

// async
function asyncForEach(array, cb) {
  array.forEach((a) => {
    setTimeout(() => {
      cb(a);
    }, 2000);
  });
}

console.log("lalala");
asyncForEach([5, 6, 7, 8], function (i) {
  console.log("- ", i);
});
console.log("mamamamma");
