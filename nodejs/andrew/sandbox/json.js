const fs = require("fs");

console.log("hello node js");

const book = {
  title: "ego is the enemy",
  author: "ryan holiday",
};

/*
  returns a JSON string version of JSON object
*/
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

/*
  returns a JSON object from a JSON string
*/
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.title, parsedData.author);

/*
  writes the bookJSON to a file
*/
fs.writeFileSync("1-json.json", bookJSON);

/*
  reads the bookJSON from a file
  fs.readFileSync returns a binary representation of the file
*/
const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
const bookObj = JSON.parse(dataJSON);
console.log(bookObj.title, bookObj.author);

/*
  challenge
*/
const planetBuffer = fs.readFileSync("1-json-a.json");
const planet = JSON.parse(planetBuffer.toString());
console.log(planet);
planet.name = "jone";
planet.age = 45;
console.log(planet);

fs.writeFileSync("1-json-a.json", JSON.stringify(planet));
