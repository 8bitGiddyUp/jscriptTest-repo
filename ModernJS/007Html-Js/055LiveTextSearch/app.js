"use strict";

const todos = [
  {
    text: "order cat food",
    completed: false,
  },
  {
    text: "clean kitchen",
    completed: true,
  },
  {
    text: "buy food",
    completed: true,
  },
  {
    text: "do work",
    completed: false,
  },
  {
    text: "exercise",
    completed: true,
  },
];

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

// live text search input box
// for input event: instead of 'change' use live event 'input'
const searchInput = document.querySelector("#search-text");
searchInput.addEventListener("input", function (e) {
  console.log("user typed: ", e.target.value);
});

const myFilteredSearch = document.querySelector("#my-search");
myFilteredSearch.addEventListener("input", function (e) {
  console.log(e.target.value);
});
