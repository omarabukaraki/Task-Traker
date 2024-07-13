
const apiUrl = 'https://dummyjson.com/todos';

const displayTasks = document.querySelector('.displayTasks');
displayTasks.innerHTML = '';
const inputField = document.querySelector('input');
const addBtn = document.querySelector('.addTaskSection button');

//Start create task function
function createTask(todo) {
    const taskComponent = document.createElement('div');
    taskComponent.setAttribute('class', 'taskComponent');

    const title = document.createElement('h3');
    title.setAttribute('class', 'title');
    title.textContent = todo.todo;

    const btns = document.createElement('div');
    btns.setAttribute('class', 'btns');

    const buttonE = document.createElement('button');
    buttonE.textContent = 'Edit';
    buttonE.setAttribute('class', 'editBtn');

    const buttonD = document.createElement('button');
    buttonD.textContent = 'Delete';
    buttonD.setAttribute('class', 'deleteBtn');
    buttonD.setAttribute('data-id', todo.id);

    btns.append(buttonE);
    btns.append(buttonD);
    taskComponent.append(title);
    taskComponent.append(btns);
    displayTasks.prepend(taskComponent);

    //Start display alert function
    function displayAlert() {
        let newData = '';
        Swal.fire({
            title: "Update Your Task",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Update",
            showLoaderOnConfirm: true,
            preConfirm: (value) => {
                newData = value;
                if (newData !== '') {
                    title.textContent = newData;
                    updateTask(todo.id, newData);
                }
            },
        }).then((result) => {
            if (result.isConfirmed && newData !== '') {
                Swal.fire({
                    title: `Your Task is Updated`,
                    icon: "success"
                });
            } else if (result.isConfirmed && newData === '') {
                Swal.fire({
                    title: `Please Enter Your New Task Name`,
                    icon: "error"
                });
            }
        });
    }
    //End display alert function


    buttonE.addEventListener('click', () => {
        displayAlert();
    });

    buttonD.addEventListener('click', () => {
        deleteTask(todo.id);
        taskComponent.remove();
    });
}
//End create task function

//Start fetch the tasks and create a task component 
fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        data.todos.forEach(todo => {
            createTask(todo);
        });
    });
//End fetch the tasks and create a task component 



//Start Add Task 
addBtn.addEventListener('click', function () {
    if (inputField.value !== '') {
        fetch(`${apiUrl}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: inputField.value,
                completed: false,
                userId: 1,
            })
        })
            .then(res => res.json())
            .then(todo => {
                createTask(todo);
                inputField.value = '';
                inputField.style.cssText = 'none';
            });
    } else {
        inputField.style.cssText = 'border: 1px solid red';
    }
});
//End Add Task 

//Start Update function
function updateTask(id, newData) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: false,
            todo: newData,
            userId: 1,
        })
    })
        .then(res => res.json())
        .then(console.log);
}
//End Update function


//Start Delete function
function deleteTask(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(console.log);
}
//End Delete function




