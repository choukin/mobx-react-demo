import React from 'react'
import {render} from 'react-dom'
import DevTools from 'mobx-react-devtools'

import TodoList from './components/TodoList'
import TodoListModel from './models/TodoListModel'
import TodoModel from './models/TodoModel'

const store = new TodoListModel();

render(
    <div>
        <DevTools/>
        <TodoList store={store}/>
    </div>,
    document.getElementById('root')
)