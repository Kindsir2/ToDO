let taskList = [];

let input = document.querySelector(".input"); 

document.querySelector(".add-button").addEventListener("click", () => {
   
  const date = new Date;

  const newTask = 
   {
     check : false, 
     time: date.getSeconds() , 
     task: input.value,
     date: document.querySelector(".calender").value
   };
   
 taskList.push(newTask)
  
 console.log(newTask.date);
 
 
 let taskHtml = "";
 
 taskList.forEach((taskList) => {
   
  console.log(taskList.task);  

  taskHtml +=
  `
  <label class="task-text">
                  ${taskList.task}
                   <input type="checkbox">
            <span class="checkmark"></span>
            <button class="delete">&#x2716;</button>
            <div>${taskList.date}</div>
          </label>

          
  `
    
  document.querySelector(".task-div").innerHTML=taskHtml;
  })
})


/* create html in js
 const p = document.createElement("p");
 p.className = "bob";
 p.textContent = "banana";
 document.body.appendChild(p);
*/