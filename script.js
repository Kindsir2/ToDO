let taskList = [];

function addTask() {
  let newTask = document.querySelector(".input").value;
  let newTaskDOm = document.querySelector(".bottom-input");
  let taskHtml = ""
  let addNewTask = taskList.push(newTask);


  taskList.forEach((taskList) =>{
    
  
    
    
    taskHtml += `

     <div class="task-div">
        <div class="task-thing checkbox"><input type="checkbox"></div>
        
        <div class="task-thing task-text">${taskList} </div> 
        
        <div class="task-thing delete" onclick="deleteTask">X</div>
      </div>
  `
  
  newTaskDOm.innerHTML=taskHtml;
    
  })
  
  console.log(taskList);
  
}





function clickEnter() {
  let input = document.querySelector(".input")
  
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".add").click();
    }
  });
  console.log("balls");
}



clickEnter();
  


  
function noTaskWarning(taskList) {
  const empty = "";
  if(taskList == empty) {
    alert("add task")
  }
}

noTaskWarning();



addTask();
