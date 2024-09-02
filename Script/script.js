function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTable = document.getElementById('taskBody');

    if (taskInput.value.trim() !== '') {
        const newRow = taskTable.insertRow();

        const taskCell = newRow.insertCell(0);
        taskCell.innerText = taskInput.value;

        const actionsCell = newRow.insertCell(1);
        actionsCell.className = 'actions';

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.innerText = 'Edit';
        editButton.onclick = () => editTask(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTask(deleteButton);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        taskInput.value = '';

        // SweetAlert notification for adding a task
        Swal.fire({
            icon: 'success',
            title: 'Task added successfully!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    } else {
        // SweetAlert notification for empty task input
        Swal.fire({
            icon: 'warning',
            title: 'Please enter a task.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
}

function editTask(button) {
    const row = button.parentElement.parentElement;
    const taskCell = row.cells[0];
    const newTask = prompt('Edit Task:', taskCell.innerText);

    if (newTask !== null && newTask.trim() !== '') {
        taskCell.innerText = newTask;
        
        // SweetAlert notification for editing a task
        Swal.fire({
            icon: 'info',
            title: 'Task edited successfully!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    } else if (newTask !== null) {
        // SweetAlert notification for empty task input during edit
        Swal.fire({
            icon: 'warning',
            title: 'Task name cannot be empty.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();

    // SweetAlert notification for deleting a task
    Swal.fire({
        icon: 'error',
        title: 'Task deleted successfully!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}
