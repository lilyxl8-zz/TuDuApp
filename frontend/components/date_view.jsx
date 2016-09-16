import React from 'react'
import DateUtil from '../utils/list_util'
import DateActions from '../actions/list_actions'
import ListName from './list_name'
import TodoList from './todo_list'
import TodoForm from './todo_form'
import TodoBlanks from './todo_blanks'

const DateView = React.createClass({
  focusTodoForm (e) {
    e.preventDefault()
    this.refs.todoForm.focus(e)
  },

  newOrExistingListTodos () {
    const _blankTodo = { name: '', date: this.props.date.full_date }

    return (
      <div className='list-todos'>
        <TodoList
          todos={ this.props.date.todos }
          viewType={ this.props.viewType }
        />
      {
        this.props.date.todos.length < 10 ? (
          <div>
            <div className='todo-item'>
              <TodoForm
                ref='todoForm'
                todo={ _blankTodo }
                viewType={ this.props.viewType }
                id={ (this.props.viewType === 0) ? this.props.date.todos.length : null }
              />
            </div>
            <TodoBlanks
              numBlanks={ 9 - this.props.date.todos.length }
              onClick={ this.focusTodoForm }
            />
          </div>
        ) : null
      }
      </div>
    )
  },

  render () {
    return (
      <div className='list-view' style={ this.props.style }>
        <div className='list-wrapper'>
          <div className='list-name'>
            <h1>{ this.props.date.full_date }</h1>
          </div>
          { this.newOrExistingListTodos() }
        </div>
      </div>
    )
  }
})

export default DateView
