"use strict";

const ps = document.querySelectorAll("p");
console.log("ps: ", ps);
ps.forEach(function (p) {
  console.log("p: ", p.textContent);
  let str = p.textContent;
  if (str.includes("the")) {
    console.log("str with the: ", str);
    p.remove();
  }
});
