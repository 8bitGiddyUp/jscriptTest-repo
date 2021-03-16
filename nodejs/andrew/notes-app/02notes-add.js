"use strict";

const fs = require("fs");

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
    console.log("new note added: ", notes);
  } else {
    console.log("title already exist...");
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
};
