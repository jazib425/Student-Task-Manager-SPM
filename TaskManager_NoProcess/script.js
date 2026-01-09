function addTask() {
    var task = document.getElementById("taskInput").value;

    if(task == "") {
        alert("Enter task first");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = task + 
    " <button onclick='deleteTask(this)'>Delete</button>" +
    " <button onclick='doneTask(this)'>Done</button>";

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function doneTask(btn) {
    btn.parentElement.style.textDecoration = "line-through";
}
