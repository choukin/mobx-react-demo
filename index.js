import { observable, autorun, computed } from 'mobx'

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false
}

class ObservableTodoStore {
    @observable todos = []
    @observable pendingRequests = 0

    constructor () {
        autorun(()=>console.log(this.report))
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length
    }

    @computed get report () {
        if(this.todos.length === 0) 
          return "<none>"
         return `Next todo: "${this.todos[0].task}". `+
         `Progress: ${this.completedTodosCount}/${this.todos.length}` 
    }

    addTodo(task) {
        this.todos.push({
            task:task,
            completed: false,
            assignee:null
        })
    }
}

const observableTodoStore = new ObservableTodoStore

observableTodoStore.addTodo("read Mobx tutorial")
observableTodoStore.addTodo('try mobx')
observableTodoStore.todos[0].completed = true
observableTodoStore.todos[1].task = 'try Mobx in own project'
observableTodoStore.todos[0].task = 'grok Mobx tutorial'