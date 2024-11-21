const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');

const list = document.getElementById('taskList');
const listCompleted = document.getElementById('taskListCompleted');
const listDeleted = document.getElementById('taskListDeleted');

// CONDICIONAL TERNARIO -- Si esto se cumple ? PASA ESTO : PASA ESTO
let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

let tasksCompleted = localStorage.getItem('tasksCompleted') ? JSON.parse(localStorage.getItem('tasksCompleted')) : [];
let tasksDeleted = localStorage.getItem('tasksDeleted') ? JSON.parse(localStorage.getItem('tasksDeleted')) : [];

if(localStorage.getItem('tasks') || localStorage.getItem('tasksCompleted') || localStorage.getItem('tasksDeleted')) {
    initialValues();
}

button.addEventListener('click', () => {
    let data = input.value;

    tasks.push(data);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createElementInDOM(data);

    input.value = "";
});

function initialValues(){
    tasks.forEach(task => createElementInDOM(task));

    tasksCompleted.forEach(task => createPrevTasks(task, "completed"));
    tasksDeleted.forEach(task => createPrevTasks(task, "deleted"));
}

function createPrevTasks(task, type){
    let item = document.createElement('p');
    item.classList.add('item-list');
    item.textContent = task;

    if(type == "completed") { listCompleted.appendChild(item); }
    else { listDeleted.appendChild(item); }
}

function setCounters(type, item, value){
    if(type == "correct") {
        tasksCompleted.push(value);
    }
    else {
        tasksDeleted.push(value);
    }

    modifyCounters();

    const newTasks = tasks.filter(task => task !== value);
    tasks = newTasks;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
    localStorage.setItem('tasksDeleted', JSON.stringify(tasksDeleted));

    list.removeChild(item);
}

function createElementInDOM(value){
    let item = document.createElement('li');
    item.classList.add('item');
    list.appendChild(item);

    let text = document.createElement('p');
    text.classList.add('item-text');
    text.textContent = value;
    item.appendChild(text);

    let container = document.createElement('div');
    container.classList.add('container');
    item.appendChild(container);

    let correct = document.createElement('a');
    correct.classList.add('correct');
    correct.textContent = '✅';
    container.appendChild(correct);
    correct.addEventListener('click', () => {
        setCounters("correct", item, value);
    });

    let deleted = document.createElement('a');
    deleted.classList.add('delete');
    deleted.textContent = '❌';
    container.appendChild(deleted);
    deleted.addEventListener('click', () => {
        setCounters("deleted", item, value);
    });
}