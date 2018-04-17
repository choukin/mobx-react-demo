import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

const ENTER_KEY = 13

@observer
export default class TodoEntry extends React.Component {
    render() {
        return (
            <input type="text"
                   ref="newField"
                   className="new-todo"
                   placeholder="你需要做什么？"
                   onKeyDown={this.handleNewTodoKeyDown}
                   autoFocus={true}
            />
        )
    }

    handleNewTodoKeyDown = (event) => {
        if(event.keyCode !== ENTER_KEY) {
            return ;
        }
        event.preventDefault()

        var val = ReactDOM.findDOMNode(this.refs.newField).value.trim()
        if(val){
            this.props.todoStore.addTodo(val)
            ReactDOM.findDOMNode(this.refs.newField).value = ''
        }
    }
}

TodoEntry.protoTypes = {
    todoStore:PropTypes.object.isRequired
}