"use strict";

const p = document.querySelector("p");
console.log(p);
console.log(p.textContent);

const ps = document.querySelectorAll("p");
ps.forEach(function (p, idx) {
  console.log("remove: ", p.textContent);
  p.textContent = idx;
});
