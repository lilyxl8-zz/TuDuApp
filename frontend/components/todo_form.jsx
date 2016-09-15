import React from 'react'
import ListUtil from '../utils/list_util'
import ListActions from '../actions/list_actions'

const TodoForm = React.createClass({
  propTypes: {
    isDemo: React.PropTypes.bool
  },

  getInitialState () {
    return {
      name: this.props.todo.name,
      handler: this.props.isDemo ? ListActions : ListUtil
    }
  },

  updateName (e) {
    e.preventDefault()
    this.setState({ name: e.currentTarget.value })
  },

  focus (e) {
    e.preventDefault()
    this.refs.todoInput.focus()
  },

  handleSubmit () {
    let newTodo = this.props.todo
    newTodo.name = this.state.name
    if (this.props.todo.id) {
      this.state.handler.updateTodo(newTodo)
      this.props.toggleEditing && this.props.toggleEditing()
    } else {
      if (this.props.isDemo) {
        newTodo.id = this.props.id
      }
      this.state.handler.createTodo(newTodo)
      this.setState({name: ''})
    }
  },

  deleteOnEmptySubmit (e) {
    e.preventDefault()
    if (this.state.name === '') {
      this.state.handler.deleteTodo(this.props.todo)
    } else {
      this.handleSubmit()
    }
  },

  breakOnEmptySubmit (e) {
    e.preventDefault()
    if (this.state.name !== '') { this.handleSubmit() }
    this.props.toggleEditing && this.props.toggleEditing()
  },

  // return when empty deletes the todo, blur when empty does nothing
  render () {
    return (
      <form className='todo-form' onSubmit={this.deleteOnEmptySubmit}>
        <input
          value={ this.state.name }
          ref='todoInput'
          onChange={ this.updateName }
          onBlur={ this.breakOnEmptySubmit } />
      </form>
    )
  }
})

export default TodoForm
