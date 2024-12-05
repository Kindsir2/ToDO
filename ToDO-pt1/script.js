let taskList = [];

function addTask() {
  let newTaskDOm = document.querySelector(".bottom-input");
  let newTask = document.querySelector(".input").value;
  let taskHtml = ""
  let addNewTask = taskList.push(newTask);


  taskList.forEach((taskList) =>{
    
  
    
    
    taskHtml += `

     <div class="task-div">
        <div class="task-thing checkbox"><input type="checkbox"></div>
        
        <div class="task-thing task-text">${taskList} </div> 
        
        <div class="task-thing delete">X</div>
      </div>
  `
  
  newTaskDOm.innerHTML=taskHtml;
    
  })
  
}
  
addTask();
  
  
function deleteTask() {
  
}