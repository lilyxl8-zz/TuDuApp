import React from 'react'
import DateUtil from '../utils/list_util'
import DateActions from '../actions/list_actions'
import ListName from './list_name'
import TodoList from './todo_list'
import TodoForm from './todo_form'
import TodoBlanks from './todo_blanks'

const DateView = React.createClass({
  focusListForm (e) {
    e.preventDefault()
    this.refs.listForm.focus(e)
  },

  focusTodoForm (e) {
    e.preventDefault()
    this.refs.todoForm.focus(e)
  },

  toggleEditing (e) {
    e.preventDefault()
    if (this.props.list.name === '') { return }
    this.setState({ editing: !this.state.editing })
  },

  setEditing () {
    this.setState({ editing: true })
  },

  deleteList (e) {
    e.preventDefault()
    if (this.props.viewType === 0) {
      DateActions.deleteList(this.props.list)
    } else {
      DateUtil.deleteList(this.props.list)
    }
  },

  newOrExistingListTodos () {
    const _blankTodo = { name: '', list_id: this.props.list.id }

    return (this.props.list.name === '') ? (
      <div className='list-todos'>
        <div onClick={this.focusListForm}>
          <TodoBlanks numBlanks='10' />
        </div>
      </div>
    ) : (
      <div className='list-todos'>
        <TodoList
          todos={ this.props.list.todos }
          viewType={ this.props.viewType }
        />
      {
        this.props.list.todos.length < 10 ? (
          <div>
            <div className='todo-item'>
              <TodoForm
                ref='todoForm'
                todo={ _blankTodo }
                viewType={ this.props.viewType }
                id={ (this.props.viewType === 0) ? this.props.list.todos.length : null }
              />
            </div>
            <TodoBlanks
              numBlanks={ 9 - this.props.list.todos.length }
              onClick={ this.focusTodoForm }
            />
          </div>
        ) : null
      }
      </div>
    )
  },

  render () {
    // <ListName
    //   list={ this.props.list }
    // />
    // { this.newOrExistingListTodos() }
    return (
      <div className='list-view' style={ this.props.style }>
        <div className='list-wrapper'>
          { this.props.date.full_date }

        </div>
      </div>
    )
  }
})

export default DateView
