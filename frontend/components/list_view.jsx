import React from 'react'
import ListUtil from '../utils/list_util'
import ListActions from '../actions/list_actions'
import ListName from './list_name'
import ListForm from './list_form'
import TodoList from './todo_list'
import TodoForm from './todo_form'
import TodoBlanks from './todo_blanks'

const ListView = React.createClass({
  getInitialState () {
    return {
      // parent passes initial state, then user can update
      editing: this.props.editing
    }
  },

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
    if (this.props.isDemo) {
      ListActions.deleteList(this.props.list)
    } else {
      ListUtil.deleteList(this.props.list)
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
          isDemo={ this.props.isDemo }
        />
      {
        this.props.list.todos.length < 10 ? (
          <div>
            <div className='todo-item'>
              <TodoForm
                ref='todoForm'
                todo={ _blankTodo }
                isDemo={ this.props.isDemo }
                id={ (this.props.isDemo) ? this.props.list.todos.length : null }
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
    return (
      <div className='list-view' style={ this.props.style }>
        <div className='list-wrapper'>
          {
            (this.state.editing || this.props.isForm) ? (
              <ListForm
                list={this.props.list}
                ref='listForm'
                isDemo={ this.props.isDemo }
                toggleEditing={this.toggleEditing}
                setEditing={this.setEditing}
                isForm={this.props.isForm}
              />
            ) : (
              <ListName
                list={this.props.list}
                toggleEditing={this.toggleEditing}
                deleteList={this.deleteList}
              />
            )
          }
          { this.newOrExistingListTodos() }
        </div>
      </div>
    )
  }
})

export default ListView
