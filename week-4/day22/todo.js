document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    var newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
});