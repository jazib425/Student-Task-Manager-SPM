document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    var input = document.getElementById("taskInput");
    var text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    createTask(text);
    saveTask(text);

    input.value = "";
}

function createTask(text) {
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button onclick="markDone(this)">✔</button>
            <button onclick="deleteTask(this)">✖</button>
        </div>
    `;
    document.getElementById("taskList").appendChild(li);
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function markDone(btn) {
    btn.parentElement.parentElement.classList.toggle("done");
}

function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
