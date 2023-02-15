document.addEventListener('DOMContentLoaded', (event) => {
    /*
    let tml = `
    <div class="task">
        <input id="${}" type="checkbox" name="" checked>
        <label for="${}">Task 1</label>
        <input type="button" value="Delete">
    </div>
    `
    */
    let todo = document.querySelector('header input[type=text]')
    let todoSend = document.querySelector('#add')
    let main = document.querySelector('main')
    let tasks = []
    
    todoSend.addEventListener('click',function (e) {
        if( todo.value ){
            let newtask = createTask(tasks.push(todo.value),todo)
            main.appendChild(newtask)
        }
    })
    
    
    function createTask (id,todo) {
        let newTask = document.createElement("div");
            newTask.classList.add('task')
        let newCheckBox = document.createElement("input");
            newCheckBox.setAttribute("id", "task_" + id)
            newCheckBox.setAttribute("type","checkbox")
        let newLabel = document.createElement("label");
            newLabel.setAttribute("for", "task_" + id)
            newLabel.textContent = todo.value
        let newDelete = document.createElement("input");
            newDelete.classList.add('close')
            newDelete.setAttribute("type","button")
    
        let delIcon = document.createElement("i")
            delIcon.classList.add("fas", "fa-times")
    
            newDelete.appendChild(delIcon)
            newDelete.addEventListener('click',function(e){
                tasks.splice(id - 1 , 1);
                newTask.remove()
            })
    
            newTask.appendChild(newCheckBox)
            newTask.appendChild(newLabel)
            newTask.appendChild(newDelete)
    
            return newTask
    }
    });
    
    
    