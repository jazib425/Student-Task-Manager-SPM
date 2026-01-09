var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var searchBox = document.getElementById("searchBox");
var taskCount = document.getElementById("taskCount");

addBtn.addEventListener("click", addTask);
searchBox.addEventListener("keyup", searchTask);

function addTask() {
    var text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task");
        return;
    }

    createTask(text);
    saveTask(text);
    taskInput.value = "";
    updateCounter();
}

function createTask(text) {
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="doneBtn" onclick="markDone(this)">✔</button>
            <button class="editBtn" onclick="editTask(this)">✏</button>
            <button class="deleteBtn" onclick="deleteTask(this)">✖</button>
        </div>
    `;
    taskList.appendChild(li);
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
    updateCounter();
}

function markDone(btn) {
    btn.parentElement.parentElement.classList.toggle("done");
}

function editTask(btn) {
    var li = btn.parentElement.parentElement;
    var span = li.querySelector("span");
    var newText = prompt("Edit task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}

function updateCounter() {
    taskCount.innerText = taskList.children.length;
}

function searchTask() {
    var filter = searchBox.value.toLowerCase();
    var items = taskList.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        var text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
    }
}

// Basic LocalStorage (Process Improvement)
function saveTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
