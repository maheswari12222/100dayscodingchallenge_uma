// Define an array to store tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    console.log(`Task "${taskName}" added successfully.`);
}

// Function to complete a task
function completeTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log(`Task "${tasks[taskIndex].name}" marked as completed.`);
    } else {
        console.log("Invalid task index.");
    }
}

function displayTasks() {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.name} - ${task.completed ? 'Completed' : 'Incomplete'}`);
    });
}


addTask("Create project proposal");
addTask("Gather project requirements");

completeTask(0);


displayTasks();
