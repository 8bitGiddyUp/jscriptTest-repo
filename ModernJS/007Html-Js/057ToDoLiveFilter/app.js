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

console.log("todos: ", todos);

/*
  1. setup a div tag for todos
  2. setup filtered search and wire up a new filter input to change it
  3. create a renderTodos function to render and rerender the latest filtered
    data
*/
