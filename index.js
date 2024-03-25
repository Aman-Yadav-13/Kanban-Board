let todo = [];
let completed = [];
let working = [];

// Converting local storage data into array format

function convertToArray(allTask){
    if(allTask.length == 0){
        return [];
    }

    let taskList = [];
    let task = '';

    for(let i=0 ; i<allTask.length ; i++){
        if(allTask[i] == ','){
            taskList.push(task);
            task = '';
        }else{
            task = task.concat(allTask[i]);
        }
    }

    taskList.push(task);

    return taskList;
}  

// Removing task from local storage

function removeFromLocalStorage(task){
    for(let i=0 ; i<todo.length ; i++){
        if(todo[i] == task){
            todo.splice(i, 1);
            localStorage.setItem('todo', todo);
            return;
        }
    }

    for(let i=0 ; i<completed.length ; i++){
        if(completed[i] == task){
            completed.splice(i, 1);
            localStorage.setItem('completed', completed);
            return;
        }
    }

    for(let i=0 ; i<working.length ; i++){
        if(working[i] == task){
            working.splice(i, 1);
            localStorage.setItem('working', working);
            return;
        }
    }
}

// Taking task (input) from user

function getTask(){
    let task = prompt("Please enter a task : ", "Task");

    if(task == "Task"){
        alert("Oops!!! You haven't entered the task...");
        return getTask();
    }else if(task == null){
        return '-';
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

    span.addEventListener('click', () => {
        p.parentNode.removeChild(p);
        removeFromLocalStorage(task);
    })
    p.appendChild(span);

    return p;
}

// Adding task to Todo task list

function addItemInTodo(task = ' '){
    if(task == ' '){
        task = getTask();
        todo.push(task);
        localStorage.setItem('todo', todo);
    }

    if(task == '-'){
        return;
    }

    let element = createElement(task);

    document.getElementById('todo').appendChild(element);
}

// Adding task to Working task list

function addItemInWorking(task = ' '){
    if(task == ' '){
        task = getTask();
        working.push(task);
        localStorage.setItem('working', working);
    }

    if(task == '-'){
        return;
    }

    let element = createElement(task);

    document.getElementById('working').appendChild(element);
}

// Adding task to Completed task list

function addItemInCompleted(task = ' '){
    if(task == ' '){
        task = getTask();
        completed.push(task);
        localStorage.setItem('completed', completed);
    }
    
    if(task == '-'){
        return;
    }

    let element = createElement(task);

    document.getElementById('completed').appendChild(element);
}

// Taking tasks from the local storage

if(localStorage.getItem('todo') == null){
    localStorage.setItem('todo', todo);
}else{
    let allTask = localStorage.getItem('todo');
    todo = convertToArray(allTask);
}

if(localStorage.getItem('completed') == null){
    localStorage.setItem('completed', completed);
}else{
    let allTask = localStorage.getItem('completed');
    completed = convertToArray(allTask);
}

if(localStorage.getItem('working') == null){
    localStorage.setItem('working', working);
}else{
    let allTask = localStorage.getItem('working');
    working = convertToArray(allTask);
}

// Displaying all task into their respective sections

for(let i=0 ; i<todo.length ; i++){
    addItemInTodo(todo[i]);
}

for(let i=0 ; i<completed.length ; i++){
    addItemInCompleted(completed[i]);
}

for(let i=0 ; i<working.length ; i++){
    addItemInWorking(working[i]);
}

// Adding event listeners to add task

document.getElementById('todo-btn').addEventListener('click', () => addItemInTodo());
document.getElementById('working-btn').addEventListener('click', () => addItemInWorking());
document.getElementById('completed-btn').addEventListener('click', () => addItemInCompleted());