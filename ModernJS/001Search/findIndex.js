const notes = [
  {
    title: "my next trip",
    body: "i would like",
  },
  {
    title: "habbit to work",
    body: "exercise, eating a",
  },
  {
    title: "office modification",
    body: "get a new",
  },
];

const findNote1 = function (notes, noteTitle) {
  return notes.findIndex(function (note, indx, arr) {
    console.log(arr);
    return note.title === noteTitle;
  });
};

const note1 = findNote1(notes, "office modification");
console.log("note1: ", note1);
console.log("--------------");

function isOdd(e, i, a) {
  console.log(e, i, a);
  return e % 2 == 1;
}

console.log([4, 6, 5, 8, 12].find(isOdd));
console.log("--------------");

const findNote2 = function (notes, noteTitle) {
  const noteText = notes.find(function (note, indx) {
    return note.title === noteTitle;
  });
  return noteText;
};
const note2 = findNote2(notes, "Office modification");
console.log("note2: ", note2);
console.log("--------------");

const findNote3 = function (notes, noteTitle) {
  return notes.find(function (note, indx) {
    return note.title === noteTitle;
  });
};
const note3 = findNote3(notes, "Office modification");
console.log("note3: ", note3);
console.log("--------------");
