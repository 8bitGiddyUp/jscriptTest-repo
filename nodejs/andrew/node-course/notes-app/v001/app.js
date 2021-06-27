const validator = require("validator");
//import validator from "validator";

const chalk = require("chalk");
// import chalk from "chalk";

//const utilName = require("./utils.js");
const add2 = require("./utils.js");

const getNotes = require("./notes.js");

const sum = add2(2, 3);
console.log("sum", sum);

const msg = getNotes();
console.log(msg);

// +++ validator
console.log(validator.isEmail("andyy.com"));
console.log(validator.isURL("https://www.a.com"));
isEmail = validator.isEmail("Hello.com");
console.log("is email? ", isEmail);
isURL = validator.isURL;
// --- validator

// +++ chalk
console.log(chalk.green("sucess"));
// --- chalk

// +++ nodemon
console.log(chalk.red("ERROR"));
// --- nodemon

// +++ argv
console.log(process.argv[2]);

const command = process.argv[2];
if (command === "add") {
  console.log("adding notes");
} else if (command === "remove") {
  console.log("removing note");
}
// --- argv
