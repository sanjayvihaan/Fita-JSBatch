document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.getElementById('taskInput');
    let addTaskBtn = document.getElementById('addTaskBtn');
    let taskList = document.getElementById('taskList');

    console.log(taskInput, addTaskBtn, taskList);

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTask() {
        taskList.innerHTML = '';

      
        

        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            li.innerHTML = `
                <span class="task-title">${task.title}</span>
                <div class="task-btns">
                    <button class="complete">${task.completed ? 'Undo' : 'Complete'}</button>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;

            if (task.completed) {
                li.classList.add('done')
            }
            taskList.appendChild(li);

            li.querySelector('.complete').addEventListener('click', () => toggleComplete(index));
            li.querySelector('.edit').addEventListener('click', () => editTask(index));
            li.querySelector('.delete').addEventListener('click', () => deleteTask(index));
        })
    }


    // Add Task

    function addTask() {
        const title = taskInput.value.trim();

        if(title) {
            tasks.push({
                title, completed: false
            });
            taskInput.value = '';
            saveTasks();
            renderTask();
        }
    }

    // toggleComplete

    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTask();
    }

    // Edit Task

    function editTask(index) {
        const newTitle = prompt("Edit Task", tasks[index].title);
        if (newTitle !== null) {
            tasks[index].title = newTitle.trim();
            saveTasks();
            renderTask();
        }
    }

    // Delete Task

    function deleteTask(index) {
        tasks.splice(index, 1)
        saveTasks();
        renderTask();
    }


    // save task
    function saveTasks() {

        localStorage.setItem('tasks', JSON.stringify(tasks));

        console.log(tasks);
    }


    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    })

    renderTask();
})