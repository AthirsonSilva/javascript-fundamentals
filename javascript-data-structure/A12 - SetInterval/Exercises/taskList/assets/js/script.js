const inputTask = document.querySelector('.input-task')
const btnAdd = document.querySelector('.btn-add-task')
const taskList = document.querySelector('.task-list')

function createLi(){
    const li = document.createElement('li')
    return li
}

inputTask.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!inputTask.value) return
        createTask(inputTask.value)
    }
})

function clearInput(){
    inputTask.value = ''
    inputTask.focus()
}

function deleteBtn(li){
    li.innerText += ' '
    const clearBtn = document.createElement('button')
    clearBtn.innerText = 'Remove'
    clearBtn.setAttribute('class', 'delete')
    li.appendChild(clearBtn)
}

function createTask(input){
    const li = createLi()
    li.innerText = input
    taskList.appendChild(li)
    clearInput()
    deleteBtn(li)
    saveTask()
}

btnAdd.addEventListener('click', function(event){
    if(!inputTask.value) return
    createTask(inputTask.value)
})

document.addEventListener('click', function(event){
    const element = event.target
    
    if(element.classList.contains('delete')){
        element.parentElement.remove()
        saveTask()
    }
})

function saveTask(){
    const liTask = taskList.querySelectorAll('li')
    const listOfTasks = []
    for(let task of liTask){
        let txtTask = task.innerText
        txtTask = txtTask.replace('Remove', '').trim()
        listOfTasks.push(txtTask)
    }

    const tasksJSON = JSON.stringify(listOfTasks)
    localStorage.setItem('tasks', tasksJSON)
}

function addSavedTasks(){
    const tasks = localStorage.getItem('tasks')
    const taskArray = JSON.parse(tasks)
    
    for(let task of taskArray){
        createTask(task)
    }
}

addSavedTasks()