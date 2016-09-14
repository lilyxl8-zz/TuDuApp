import React from 'react'
import ListActions from '../actions/list_actions'
import ListUtil from '../utils/list_util'
import TodoForm from './todo_form'

const TodoView = React.createClass({
  getInitialState () {
    return {
      name: this.props.todo.name,
      editing: false,
      handler: this.props.isDemo ? ListActions : ListUtil
    }
  },

  toggleDone (e) {
    e.preventDefault()
    let newTodo = this.props.todo
    newTodo.done = !newTodo.done
    this.state.handler.toggleDone(newTodo)
  },

  toggleEditing () {
    this.setState({ editing: !this.state.editing })
  },

  deleteTodo (e) {
    e.preventDefault()
    this.state.handler.deleteTodo(this.props.todo)
  },

  render () {
    const todoDoneClass = this.props.todo.done ? 'todo-item done' : 'todo-item'

    return (
      (this.state.editing) ?
        <div className={todoDoneClass}>
          <TodoForm
            todo={ this.props.todo }
            toggleEditing={ this.toggleEditing }
            isDemo={ this.props.isDemo }
          />
        </div>
       :
        <div className={todoDoneClass}>
          <div className='text-wrapper' onClick={this.toggleDone}>
            <a>{ this.props.todo.name }</a>
          </div>
          <a onClick={ this.deleteTodo } className='delete-todo'></a>
          <a onClick={ this.toggleEditing } className='edit-todo'></a>
        </div>
    )
  }
})

export default TodoView
