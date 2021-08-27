//fetch('https://jsonplaceholder.typicode.com/posts')
//  .then(response => response.json())
//  .then(json => console.log(json))

/*axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response =>console.log(response))*/


/*axios.get("https://jsonplaceholder.typicode.com/users")
.then(resp =>{console.log(resp)})
.catch(err => console.error(err))
.then(() => console.log("Peticion terminada"))*/

/*const element= document.getElementById("elemento")

const hammerjs = new Hammer(element)
hammerjs.on('pan', ev => {
  console.log(ev)
  element.style.marginLeft=`${ev.distance}px`
})*/

const API_URL = "https://my-json-server.typicode.com/Melody-Pasten/Sitema-de-tareas/tareas"

axios.get(API_URL)
.then( resp => fillTasks(resp.data))
.catch(err => console.log(err))

function fillTasks(data) {
  data.map(d => createTask(d))
}

function createTask(d) {
    let newTask = document.createElement("article")
    newTask.classList.add("task")

    let taskTitle = document.createElement("h3")
    taskTitle.innerText = d.tittle

    let taskPErson = document.createElement("p")
    taskPErson.innerHTML = `<span>nombre apellido</span> ${d.persona}` 

    let taskDeadLine = document.createElement("p")
    taskDeadLine.innerHTML=`<span>fecha</span> ${unixToDate(d.deadline)}`

    newTask.appendChild(taskTitle)
    newTask.appendChild(taskPErson)
    newTask.appendChild(taskDeadLine)


    let columnToDo = document.getElementById("todoTasks")
    let columnInProgress = document.getElementById("inprogressTasks")
    let columnDone = document.getElementById("doneTasks")
    //column.appendChild(newTask)

    if (d.state === "pendiente"){
      columnToDo.appendChild(newTask)
    }
    if (d.state === "enProceso"){
      columnInProgress.appendChild(newTask)
    }
    if (d.state === "terminado"){
      columnDone.appendChild(newTask)
    }
  }


