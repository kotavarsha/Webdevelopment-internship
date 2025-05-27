function saveTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }


  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));


  window.location.href = "tasks.html";
}
