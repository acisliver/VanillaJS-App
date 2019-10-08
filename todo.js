const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("Input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "x"
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);     //li안에 span추가
  li.appendChild(delBtn);   //li안에 dlebtn추가
  toDoList.appendChild(li); //toDoList(ul)안에 li(위에 추가된 내용까지)추가
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";

function handleClick(event) {

}

}

function loadToDo() {
  const toDos = localStorage.getItem(TODOS_LS);
    if(toDos == null){

    }
}


function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);

}

init();
