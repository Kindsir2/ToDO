let taskList = [
  {
    id: 1731980115185,
    check: false,
    name: 'Sleep',
  },
  {
    id: 1731980163371,
    check: false,
    name: 'Buy milk',
  },
];

// Elements we need to reference
const form = document.querySelector('#form');
const taskListElem = document.querySelector('#taskList');

// We have no local storage yet
if (!localStorage.getItem('tasks')) {
  // This creates a new local storage with some tasks
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

// Create
form.onsubmit = (e) => {
  // Prevent to reload page
  e.preventDefault();

  // This is an object to get the fields
  const formData = new FormData(e.currentTarget);

  // Add item at beginning of array
  taskList.unshift({
    id: new Date(),
    check: false,
    name: formData.get('name'),
  });

  saveTasks();
  render();

  // Reset form
  e.currentTarget.reset();
};

// Set the event listener on the parent page since the children are rendered with JS
taskListElem.onclick = (e) => {
  // Find the closest parent element where the ID attr. is located
  const parent = e.target.closest('.task-div');
  const id = parent.dataset.id;

  // Find item by index
  const itemIndex = taskList.findIndex((task) => task.id == id);

  // Update
  // Check if the elem. clicked is a checkbox
  if (e.target.type === 'checkbox') {
    taskList[itemIndex].check = e.target.checked;
  }

  // Delete
  // Check if the elem. clicked has a class of button
  if (e.target.classList.contains('delete')) {
    taskList = taskList.filter((task) => task.id != id);
  }

  saveTasks();
  render();
};

function render() {
  // Get the tasks from local storage every time we render
  taskList = JSON.parse(localStorage.getItem('tasks'));

  const taskHtml = taskList.map((task) => {
    return `
      <div class="task-div" data-id="${task.id}">
        <div class="task-thing checkbox">
          <input type="checkbox" ${task.check ? 'checked' : ''}>
        </div>
        <div class="task-thing task-text" style="${
          task.check ? 'text-decoration:line-through' : ''
        }">${task.name}</div> 
        <div class="task-thing delete">&times;</div>
      </div>
    `;
  });

  // Join the array of strings into 1 string to set it in the DOM
  taskListElem.innerHTML = taskHtml.join('');
}
render();

// Save the tasks in local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

/**
 * Global scope
 */
// const date = '';
// function drive() {
//   stop()
// }
// function stop() {
//   console.log(date)
// }

/**
 * Local scope
 */
// function drive() {
//   const date = '';
//   stop(date)
// }
// function stop(date) {
//   console.log(date)
// }
