// https://links.mead.io/arrow-challenge

const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

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
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("handler => title: ", argv.title);
    console.log("handler => body: ", argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "remove a note",
      type: "string",
    },
  },

  handler(argv) {
    console.log("handler => removing a note");
    notes.removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler() {
    console.log(chalk.green("handler => listing a new note"));
    notes.listNotes();
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "reading a specific note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("handler => reading a new note");
    notes.readNote(argv.title);
  },
});

/*
  inits the yargs objects with arguments; without the parse, yargs doesn't
  execute since its parameters are blank;
  
  console.log(yargs.argv) works but
  
  it outputs the entire object's content; yargs.parse() is cleaner
*/
yargs.parse();
