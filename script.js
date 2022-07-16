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
  const idOfCheckbox = `checkbox ${state.toDoList[state.toDoList.length-1]}`;

  document.querySelector("ul").innerHTML += (
    `<li>
      <input type="checkbox" id="${idOfCheckbox}">
      ${state.toDoList[state.toDoList.length-1]}
    </li>`
  )

  document.getElementById(idOfCheckbox).addEventListener("click", addDone)
}

function addDone(event) {
  console.log(event)
}


// array.forEach(function (ulHTML) {
//   console.log(ulHTML, state.toDoList);
// });




// `<li>${item}</li`

// <li>buri</li>
// <li>neri</li>

// state.todoList = [buri, neri]

// var ulHTML = `<li>eleman</li>`