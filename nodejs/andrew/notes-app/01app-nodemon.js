"use strict";

// https://dev.to/thetradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe
// run as admin
// get-executionpolicy
// set-executionpolicy unrestricted
// get-executionpolicy
// npm i nodemon -g
// npm -g uninstall  nodemon

const chalk = require("chalk");
const validator = require("validator");
const getNotes = require("./01notes.js");

const msg = getNotes();
console.log(chalk.red.inverse(msg));

console.log(validator.isEmail("andand@wacka.com"));
console.log(validator.isEmail("andand@.com"));
console.log(validator.isURL("http:\\\\yahoo.com"));
console.log(validator.isURL("yahoo."));

// vdo 3.6
console.log("Nodemon test");
