"use strict";

const chalk = require("chalk");
const validator = require("validator");
const notes = require("./02notes-add.js");
const yargs = require("yargs");

// console.log(getNotes());

// console.log(process.argv);
// console.log(yargs.argv);

// customizes yargs version
yargs.version("1.1.0");

// creates an add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    titleOpt: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    bodyOpt: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.titleOpt, argv.bodyOpt);
  },
});

// creates a remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  handler: function () {
    console.log("removing a note");
  },
});

// creates a list command
yargs.command({
  command: "list",
  describe: "Lists a note",
  handler: function () {
    console.log("listing notes");
  },
});

// creates a read command
yargs.command({
  command: "read",
  describe: "Reads a note",
  handler: function () {
    console.log("reading notes");
  },
});

// needs to make yargs to output--causes double prints
// console.log(yargs.argv);

// prevents double prints
yargs.parse();
