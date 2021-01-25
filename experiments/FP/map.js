"use strict";

// ashly williams jsconf

const names = ["mary", "isla", "sam"];
const secNames = ["yram", "alsi", "mas"];

const secretNames = names.map((name) => {
  console.log("name: ", name);
  return name + " z";
});
console.log(secretNames);

names.map((n) => {
  console.log(`loop -> ${n}`);
});

const sams = [
  "Mary Sam read a story to Sam and Isla.",
  "Isla cuddled Sam.",
  "Sam chortled.",
];

const totalSams = sams.reduce((ac, cnt, indx, arr) => {
  cnt = (arr[indx].match(/Sam/g) || []).length;
  console.log(ac, cnt, indx, arr[indx]);
  return (ac += cnt);
}, 0);
console.log(`totalSams: ${totalSams}`);

console.log("--- average height");
const people = [
  { name: "Mary", height: 160 },
  { name: "Isla", height: 80 },
  { name: "Sam" },
];

people.forEach((person) => {
  console.log(person.name, person.height);
});

const peopleHeights = people.filter((person) => {
  return person.height !== undefined;
});

const heights = peopleHeights.map((personHeight) => {
  return personHeight.height;
});
console.log("heights: ", heights);

if (heights.length > 0) {
  const total = heights.reduce((add, curr) => {
    return add + curr;
  });
  const avg = total / heights.length;
  console.log("avg: ", avg);
}
