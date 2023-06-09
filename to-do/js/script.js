const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    todoInput.value = '';
    todoInput.focus();
  }
});


function createTask(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    li.remove(); 
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}