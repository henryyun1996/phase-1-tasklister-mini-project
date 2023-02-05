document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded");
});

const button = document.querySelector('#create-task-form');
button.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskDescription = e.target['new-task-description'].value;
  const newTask = document.createElement('li');
  newTask.textContent = taskDescription;
  document.getElementById('tasks').append(newTask);
});