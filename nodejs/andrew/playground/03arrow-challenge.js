// https://gist.github.com/andrewjmead/ad7a587411aa8e3fb3ea643c37c45818
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo01() {
    return this.tasks.filter(({ completed }) => completed === false);
  },
  getTasksToDo02() {
    return this.tasks.filter(({ completed }) => !completed);
  },
};

console.log(tasks.getTasksToDo01());
console.log(tasks.getTasksToDo02());
