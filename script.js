function addTask(){
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if(taskText !== ""){
        const ul = document.getElementById('todolist');

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTask(li);

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        ul.appendChild(li);

        input.value = "";
    }

    else{
        alert("Please enter a valid task")
    }
}

function editTask(span){
    const newTask = prompt("Edit task", span.textContent);

    if(newTask !== "" && newTask.trim() !== ""){
        span.textContent = newTask.trim();
    }
}

function removeTask(li){
    
}