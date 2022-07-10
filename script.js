var state = {
    toDoList: [],
    doneList: [],
}

document.getElementById("button").addEventListener("click", addToDo);

function addToDo() {
  state.toDoList.push(document.getElementById("input").value)
  
  updateScreen()
}

// updating DOM section 
function updateScreen() {
    document.querySelector("ul").innerHTML = state.toDoList.join();
}
