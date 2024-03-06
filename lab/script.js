// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("inputtext");
    var taskList = document.getElementById("tasklist");

    // Check if input field is empty
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    var deleteButton = document.getElementById("deleteButton")
    deleteButton.onclick= function(){
        taskList.innerHTML="";
    }
    // Create a delete button for the task
    // var deleteButton = document.createElement("span");
    // deleteButton.textContent = "Delete";
    // deleteButton.className = "delete";
    // deleteButton.onclick = function() {
    //     taskList.removeChild(li);
    // };

    // // Append the delete button to the list item
    // li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}
