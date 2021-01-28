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

// console.log("ADD TO DOME");
// const newP = document.createElement("p");
// newP.textContent = "this is a new dynamic content";
// document.querySelector("body").appendChild(newP);

// outputs
// you have 2 todos left -> p tag
// add each text in the array to the todo list

const todosLeft = todos.filter(function (todo) {
  return todo.completed === false;
});

console.log("todosLeft: ", todosLeft.length);
const leftTodoP = document.createElement("p");
leftTodoP.textContent = `you have ${todosLeft.length} todos left`;
document.querySelector("body").append(leftTodoP);

todos.forEach(function (todo) {
  const newP = document.createElement("p");
  newP.textContent = todo.text;
  document.querySelector("body").appendChild(newP);
});
