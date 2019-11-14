const addNewTaskBtn = document.getElementById('submit');
const todoList = document.getElementById('todo');
const doneList = document.getElementById('done');

let numberOfEl = 0;

addNewTask = () => {
  const newListItem = document.createElement('tr');

  const inputValue = document.getElementById('input').value;

  numberOfEl++;
  newListItem.innerText = inputValue;
  newListItem.id = numberOfEl;

  todoList.appendChild(newListItem);
};

document.addEventListener(
  'click',
  (moveTask = element => {
    if (element.target.localName === 'tr') {
      const clickedItem = document.getElementById(
        element.target && element.target.id
      );

      if (element.target && element.target.id === clickedItem.id) {
        todoList.removeChild(clickedItem);
        doneList.appendChild(clickedItem);
      }
    }
  })
);

addNewTaskBtn.addEventListener('click', addNewTask);
