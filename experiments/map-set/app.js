// "use strict";

let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log("hello");
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'

console.log(map.size); // 3
console.log(map);

let [name1, name2, ...more] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// rest is array of items, starting from the 3rd one
console.log(more[0]); // Consul
console.log(more[1]); // of the Roman Republic
console.log(more.length); // 2
console.log(more);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { h, w, title } = options;
console.log(title, w, h);
