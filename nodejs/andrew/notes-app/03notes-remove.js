"use strict";

const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "your notes";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const dupTitles = notes.filter(function (note) {
    return note.title === title;
  });

  if (dupTitles.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added: ", notes));
  } else {
    console.log(chalk.red.inverse("title already exist..."));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  const updatedNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > updatedNotes.length) {
    console.log(chalk.green("Note removed..."));

    saveNotes(updatedNotes);
  } else {
    console.log(chalk.red("Note not removed..."));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataStr = dataBuffer.toString();
    return JSON.parse(dataStr);
  } catch (e) {
    console.log("ERROR: something bad happened... returning []...");
    return [];
  }
};

// exports multiple properties
// module.exports = {
//   getNotes: getNotes,
//   addNote: addNote
// };

// or
module.exports = {
  getNotes,
  addNote,
  removeNote,
};
