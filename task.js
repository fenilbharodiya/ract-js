// DOM Elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterDate = document.getElementById('filter-date');
const filterPriority = document.getElementById('filter-priority');
const filterProgress = document.getElementById('filter-progress');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Event Listeners
taskForm.addEventListener('submit', addTask);
filterDate.addEventListener('input', filterTasks);
filterPriority.addEventListener('change', filterTasks);
filterProgress.addEventListener('change', filterTasks);

// Functions
function addTask(e) {
    e.preventDefault();

    const title = document.getElementById('task-title').value;
    const date = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;
    const progress = document.getElementById('task-progress').value;

    const task = {
        id: Date.now(),
        title,
        date,
        priority,
        progress
    };

    tasks.push(task);
    saveTasks();
    displayTasks();

    taskForm.reset();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
            <div class="title">${task.title}</div>
            <div class="details">Date: ${task.date}</div>
            <div class="details">Priority: ${task.priority}</div>
            <div class="details">Progress: ${task.progress}</div>
        `;

        taskList.appendChild(taskItem);
    });
}

function filterTasks() {
    const filteredTasks = tasks.filter(task => {
        const filterDateValue = filterDate.value;
        const filterPriorityValue = filterPriority.value;
        const filterProgressValue = filterProgress.value;

        return (
            (!filterDateValue || task.date === filterDateValue) &&
            (!filterPriorityValue || task.priority === filterPriorityValue) &&
            (!filterProgressValue || task.progress === filterProgressValue)
        );
    });

    displayTasks(filteredTasks);
}

// Initial Display
displayTasks();
