import React from 'react'
import TodoList from './todo_list'
import TodoForm from './todo_form'
import TodoBlanks from './todo_blanks'
import DateConstants from '../constants/date_constants'

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
    let date = this.props.date.full_date.split('-')
    let d = date[2]
    let m = parseInt(date[1])
    let y = date[0]
    let curDate = new Date(y, m, d)

    return (
      <div className='list-view' style={ this.props.style }>
        <div className='list-wrapper'>
          <div className='list-name'>
            <h3>{ DateConstants.weekDays[curDate.getDay()] }</h3>
            <h2>{ d } { DateConstants.monthsNames[m - 1] } { y }</h2>
          </div>
          { this.newOrExistingListTodos() }
        </div>
      </div>
    )
  }
})

export default DateView
