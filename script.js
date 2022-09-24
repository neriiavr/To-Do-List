var state = {
    toDoList: [],
    doneList: [],
}
function render() {
  var tasks = document.getElementById("tasks")
  var done = document.getElementById("done")
  var taskList = state.toDoList.map(function (task){
    return `<li>
      <input type="checkbox" id="${task}">
      ${task}
      </li>`
  }).join("") 
  tasks.innerHTML = taskList

  var doneList = state.doneList.map(function (done) {
    return `<li>
    <input type="checkbox" checked id="${done}">
    ${done}
    </li>`
  }).join("")
  done.innerHTML = doneList
} 
render()
document.getElementById("button").addEventListener("click", addToDo);

function addToDo() {
  state.toDoList.push(document.getElementById("input").value)
  
  render()
}



function addDone(event) {
  var task = event.target.id 
  if(event.target.checked) {
    state.toDoList.push (task)
    state.doneList = state.doneList.filter(function(item) {
      return task != item 
    })
  } else {
    state.doneList.push (task)
    state.toDoList = state.toDoList.filter(function(item) {
      return task != item 
    })
  }

  
  render()
}
document.querySelectorAll("input").forEach(function(element){
  element.addEventListener("change", addDone);
})


// array.forEach(function (ulHTML) {
//   console.log(ulHTML, state.toDoList);
// });




// `<li>${item}</li`

// <li>buri</li>
// <li>neri</li>

// state.todoList = [buri, neri]

// var ulHTML = `<li>eleman</li>`