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

const createButton = document.querySelector(".create");
createButton.addEventListener("click", function (e) {
  console.log(`e: ${e} -> button was clicked`);
  console.log(e);
  e.target.textContent = "button was clicked";
});

const todoButton = document.querySelector(".todo");
todoButton.addEventListener("click", function (e) {
  addTodo(todos);
});
