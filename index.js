// Create a new task by creating new objects
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask(`Clean Cat Litter`, `Take all the poop out of the litter box`);
const task2 = newTask(`Do laundry`, "just towels for today");
const tasks = [task1, task2];

newTask(`OMG`, `Just say "OMG!"`)
console.log(tasks)
task1.logState()
task1.markCompleted()
task1.logState()
