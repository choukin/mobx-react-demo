import 'todomvc-common'
import TodoStore from './store/TodoStore'
import ViewStore from './stores/ViewStore'
import TodoApp from './views/todoApp.js'

import React from 'react'
import ReactDOM from 'react-dom'

const initialState = window.initialState && JSON.parse(window.initialState) ||{}

let todoStore = TodoStore.fromJS(initialState.todos||[])
let viewStore = new ViewStore()

todoStore.subscribeServerToStore()

ReactDOM.render(
    <TodoApp todoStore={todoStore} viewStore={viewStore}/>,
    documlent.getElementById('todoapp')
)

if (module.hot) {
    module.hot.accept('./views/todoApp', () => {
        let NewTodoApp = require('./views/todoApp').default
        ReactDOM.render(
            <NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
            document.getElementById('todoapp')
        )
    })
}