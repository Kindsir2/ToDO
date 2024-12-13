let taskList = []; 
let input = document.querySelector(".input"); 

function addTask() {
  const date = new Date();

  const newTask = {
    check: false,
    id: date.getTime(),
    task: input.value,
    date: document.querySelector(".calender").value,
  };

    taskList.push(newTask);
    input.value = "";
    renderTasks();
  
}

function renderTasks() {
  const taskDiv = document.querySelector(".task-div");
  taskDiv.innerHTML = "";

  taskList.forEach((task) => {
    const taskHtml = `
      <label class="task-text" data-id="${task.id}">
        ${task.task}
        <input type="checkbox">
        <span class="checkmark"></span>
        <button class="delete" data-id="${task.id}">&#x2716;</button>
        <div>${task.date}</div>
      </label>
    `;
    taskDiv.innerHTML += taskHtml;
  });

  const deleteButtons = document.querySelectorAll(".task-div");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskId = parseInt(event.target.getAttribute("data-id"), 10);
      deleteTask(taskId);
    });
  });
}

function deleteTask(taskId) {
  taskList = taskList.filter((task) => task.id !== taskId);
  renderTasks();
}

document.querySelector(".add-button").addEventListener("click", addTask);

console.table(taskList);


/* create html in js
 const p = document.createElement("p");
 p.className = "bob";
 p.textContent = "banana";
 document.body.appendChild(p);
*/


//It’s because your console is only executed once when the page loads. Which is when the array is empty. After that when the event listener is fired the array is populated. So the console which you have declared outside is not executed anymore. Just remember the program follows a linear flow.Some thing/like a user action needs to happen before your logic can be executed. That’s why when you have a console log in the event listener callback, you will see it’s output.