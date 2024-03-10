var todo = [];
var working = [];
var completed = [];

function getTask(){
    let task = prompt("Please enter a task : ", "Task");

    if(task == "Task"){
        alert("Oops!!! You haven't entered the task...");
        return getTask();
    }else{
        return task;
    }
}

function addItemInTodo(){
    let element = document.createElement("p");
    document.getElementById('todo').appendChild(element);

    element.innerHTML = getTask();
    element.setAttribute('id', 'task');
}

function addItemInWorking(){
    let element = document.createElement("p");
    document.getElementById('working').appendChild(element);

    element.innerHTML = getTask();
    element.setAttribute('id', 'task');
}

function addItemInCompleted(){
    let element = document.createElement("p");
    document.getElementById('completed').appendChild(element);

    element.innerHTML = getTask();
    element.setAttribute('id', 'task');
}

document.getElementById('todo-btn').addEventListener('click', addItemInTodo);
document.getElementById('working-btn').addEventListener('click', addItemInWorking);
document.getElementById('completed-btn').addEventListener('click', addItemInCompleted);