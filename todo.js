const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("Input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌"
  span.innerText = text;
  li.appendChild(span);     //li안에 span추가
  li.appendChild(delBtn);   //li안에 dlebtn추가
  li.id = newId;
  toDoList.appendChild(li); //toDoList(ul)안에 li(위에 추가된 내용까지)추가
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj)
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";



}

function loadToDo() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
          console.log(toDo.text);
        });
    }
}


function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);

}

init();
