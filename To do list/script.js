const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const totalTodosEl = document.getElementById("totalTodos");
const completedTodosEl = document.getElementById("completedTodos");
const clearAllBtn = document.getElementById("clearAllBtn");
const emptyMessage = document.getElementById("emptyMessage");

let totalTodos = 0;
let completedTodos = 0;

// Enable/Disable Add button
todoInput.addEventListener("input", () => {
  addTodoBtn.disabled = todoInput.value.trim() === "";
});

// Add Todo
addTodoBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todoText;

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "todo-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Complete Todo
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      completedTodos++;
    } else {
      completedTodos--;
    }
    updateCounts();
  });

  // Delete Todo
  deleteBtn.addEventListener("click", () => {
    if (li.classList.contains("completed")) {
      completedTodos--;
    }
    todoList.removeChild(li);
    totalTodos--;
    updateCounts();
  });

  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonDiv);
  todoList.appendChild(li);

  totalTodos++;
  updateCounts();

  todoInput.value = "";
  addTodoBtn.disabled = true;
});

// Clear All
clearAllBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
  totalTodos = 0;
  completedTodos = 0;
  updateCounts();
});

// Update Counts & Empty Message
function updateCounts() {
  totalTodosEl.textContent = totalTodos;
  completedTodosEl.textContent = completedTodos;
  emptyMessage.style.display = totalTodos === 0 ? "block" : "none";
}
