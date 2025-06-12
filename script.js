function addTask() {
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();
  const datetime = document.getElementById("task-datetime").value;

  if (title === "" || datetime === "") {
    alert("Please enter at least a title and date/time.");
    return;
  }

  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="task-header">${title}</div>
    ${desc ? `<div class="task-desc">${desc}</div>` : ""}
    <div class="task-datetime">${formatDateTime(datetime)}</div>
    <div class="task-buttons">
      <button onclick="deleteTask(this)">Delete</button>
      <button onclick="completeTask(this)">Complete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Clear inputs
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-datetime").value = "";
}

function deleteTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}

function completeTask(button) {
  const taskItem = button.closest("li");
  taskItem.classList.toggle("completed");
}

function formatDateTime(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}