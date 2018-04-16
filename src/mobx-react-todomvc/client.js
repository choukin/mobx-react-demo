import 'todomvc-common'
import TodoStore from './store/TodoStore'
import ViewStore from './stores/ViewStore'
import TodoApp from './components/todoApp.js'

import React from 'react'
import ReactDOM from 'react-dom'
import Todo from '../simple-todo/components/Todo';

const initialState = window.initialState && JSON.parse(window.initialState) ||{}

let todoStore = TodoStore.fromJS(initialState.todos||[])
let viewStore = new ViewStore()

todoStore.subscribeServerToStore()

ReactDOM.render(
    <TodoApp todoStore={todoStore} viewStore={viewStore}/>,
    documlent.getElementById('todoapp')
)

if (module.hot) {
    module.hot.accept('./components/todoApp', () => {
        let NewTodoApp = require('./components/todoApp').default
        ReactDOM.render(
            <NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
            document.getElementById('todoapp')
        )
    })
}