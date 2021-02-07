const chalk = require("chalk");
const fs = require("fs");
const { title } = require("process");

const getNotes = () => "your notes...";

const addNote = (title, body) => {
  debugger;

  const notes = loadNotes();
  console.log(notes);

  /*
    no duplicate 'title'
  */
  // const duplicates = notes.filter((note) => note.title === title);
  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("new note added..."));
  } else {
    console.log(chalk.red.inverse("note title taken..."));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const removeNote = function (title) {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => {
    if (note.title !== title) {
      return note;
    }
  });

  if (notes.length > updatedNotes.length) {
    console.log(chalk.green.inverse("note removed"));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.red.inverse("note NOT removed..."));
  }
};

const listNotes = () => {
  console.log(chalk.inverse("your notes"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title, note.body);
  });
};

const readNote = (title) => {
  console.log("reading a note...");
  const notes = loadNotes();

  try {
    const foundNote = notes.find((note) => {
      return note.title === title;
    });

    console.log(`title: ${foundNote.title}  -  body: ${foundNote.body}`);
  } catch (e) {
    console.log(chalk.red.inverse(`ERROR: title: ${title} NOT found`));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
