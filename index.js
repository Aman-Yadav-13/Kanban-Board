// Taking task (input) from user

function getTask(){
    let task = prompt("Please enter a task : ", "Task");

    if(task == "Task"){
        alert("Oops!!! You haven't entered the task...");
        return getTask();
    }else{
        return task;
    }
}

// Creating task element

function createElement(task){
    let p = document.createElement('p');
    let span = document.createElement('span');

    p.setAttribute('id', 'task');
    span.setAttribute('class', 'material-symbols-outlined md-18 remove-icon');

    p.innerHTML = task;
    span.innerHTML = 'delete_sweep';

    span.addEventListener('click', () => p.parentNode.removeChild(p));

    p.appendChild(span);

    return p;
}

// Adding task to Todo task list

function addItemInTodo(){
    let task = getTask();
    let element = createElement(task);

    document.getElementById('todo').appendChild(element);
}

// Adding task to Working task list

function addItemInWorking(){
    let task = getTask();
    let element = createElement(task);

    document.getElementById('working').appendChild(element);
}

// Adding task to Completed task list

function addItemInCompleted(){
    let task = getTask();
    let element = createElement(task);

    document.getElementById('completed').appendChild(element);
}

// Adding event listeners to add task

document.getElementById('todo-btn').addEventListener('click', addItemInTodo);
document.getElementById('working-btn').addEventListener('click', addItemInWorking);
document.getElementById('completed-btn').addEventListener('click', addItemInCompleted);