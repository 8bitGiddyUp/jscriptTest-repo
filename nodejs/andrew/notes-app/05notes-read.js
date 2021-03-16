"use strict";

const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  // const dupTitles = notes.filter((note) => note.title === title);
  const dupTitle = notes.find((note) => note.title === title);

  if (dupTitle === undefined) {
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

const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length > updatedNotes.length) {
    console.log(chalk.green("Note removed..."));

    saveNotes(updatedNotes);
  } else {
    console.log(chalk.red("Note not removed..."));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataStr = dataBuffer.toString();
    return JSON.parse(dataStr);
  } catch (e) {
    console.log("ERROR: something bad happened... returning []...");
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(({ title }) => {
    console.log(`title: ${title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const found = notes.find((note) => note.title === title);
  if (found) {
    console.log("found");
    return found;
  } else {
    console.log("not found");
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
  addNote,
  removeNote,
  listNotes,
  readNote,
};
