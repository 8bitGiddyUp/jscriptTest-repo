const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// const msg = getNotes();
// console.log(msg);

// console.log(chalk.green.bold.underline.inverse("SUCCESS!!!"));

// console.log("w/o yargs: ", process.argv);
// const commandArg = process.argv[2];
// console.log(chalk.red(commandArg));

// set version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("handler => adding a new note: argv: ", argv);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("handler => removing a new note");
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("handler => listing a new note");
  },
});

// create remove command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("handler => reading a new note");
  },
});

console.log("w/ yargs: ", yargs.argv);
