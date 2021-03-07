"use strict";

const fs = require("fs");

const book = {
  title: "ego is the enemy",
  author: "ryan holiday",
};

// converts js object to string json
const bookJSON = JSON.stringify(book);

// bookJSON.title -> no longer works because it is not a js object
console.log(bookJSON);

// converts a sting JSON to a js object
const bookJSObj = JSON.parse(bookJSON);
console.log(bookJSObj.title);
console.log(bookJSObj.author);

// saves bookJSON to a file
fs.writeFileSync("bookJSON.json", bookJSON);

// reads bookJSON.json and converts to a js object
const bookBuffer = fs.readFileSync("bookJSON.json");
console.log(bookBuffer);
const bookStr = bookBuffer.toString();
const bookJSObj02 = JSON.parse(bookStr);
console.log(bookJSObj02.title);
console.log(bookJSObj02.author);

// links.mead.io/json-sample
// {"name":"Andrew","planet":"Earth","age":27}
// reads in json-sample.json
const personBuffer = fs.readFileSync("json-sample.json");
const personStr = personBuffer.toString();
const person = JSON.parse(personStr);
person.name = "jackson";
person.age = 43;
console.log("update: ", person);

// writes a js obj to a file
const personJson = JSON.stringify(person);
fs.writeFileSync("json-sample.json", personJson);
