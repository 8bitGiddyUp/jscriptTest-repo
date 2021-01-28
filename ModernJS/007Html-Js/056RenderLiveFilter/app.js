"use strict";

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

const filters = {
  searchText: "",
};

const renderNotes = function (notes_, filters_) {
  const filteredNotes = notes_.filter(function (note) {
    return note.title.toLowerCase().includes(filters_.searchText.toLowerCase());
  });
  console.log(filteredNotes);

  /*
    adds new 'p' tags for each filtered search to the DOM which should be
    cleared before adding a new filtered search; to achieve this, use the 'div'
    tag;
    with the 'div' tag, it is easier to target tags to add and remove
  */
  /*
    clears the 'div' tag before a new filtered search is added to the page
  */
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteP = document.createElement("p");
    noteP.textContent = note.title;
    document.querySelector("#notes").appendChild(noteP);
  });
};

// renderNotes(notes, filters);

// live text search input box
// for input event: instead of 'change' use live event 'input'
const searchInput = document.querySelector("#search-text");
searchInput.addEventListener("input", function (e) {
  console.log("user typed: ", e.target.value);
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

const createButton = document.querySelector("#create-note");
createButton.addEventListener("click", function (e) {
  console.log(`e: ${e} -> button was clicked`);
  console.log(e);
  e.target.textContent = "button was clicked";
});

const todoButton = document.querySelector("#add-todos");
todoButton.addEventListener("click", function (e) {
  console.log(e);
});

const removeButton = document.querySelector("#remove-all");
removeButton.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  document.querySelectorAll(".note").forEach(function (note) {
    console.log("note: ", note.textContent);
  });
});

// query selectorAll
const button = document.querySelectorAll("button")[1];
button.addEventListener("click", function (e) {
  const buttonType = e.target.textContent;
  console.log("selected button: ", buttonType);
});

const myFilteredSearch = document.querySelector("#my-search");
myFilteredSearch.addEventListener("input", function (e) {
  console.log(e.target.value);
});
