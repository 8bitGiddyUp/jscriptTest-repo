let student = {
  name: `John`,
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js", 1, 2, 3],
  wife: null,
};

let json = JSON.stringify(student);
console.log(json);

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
