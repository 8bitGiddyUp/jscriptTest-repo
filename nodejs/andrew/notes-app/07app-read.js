"use strict";

const chalk = require("chalk");
const validator = require("validator");
const notes = require("./05notes-read.js");
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
  handler(argv) {
    notes.addNote(argv.titleOpt, argv.bodyOpt);
  },
});

// creates a remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Note a title to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// creates a list command
yargs.command({
  command: "list",
  describe: "Lists a note",
  handler() {
    notes.listNotes();
  },
});

// creates a read command
yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "read a title to read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const foundNote = notes.readNote(argv.title);
    console.log(`found Title: ${foundNote.title} - ${foundNote.body}`);
  },
});

// needs to make yargs to output--causes double prints
// console.log(yargs.argv);

// prevents double prints
yargs.parse();
