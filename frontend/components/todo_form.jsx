import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
		let editState = false;
		if (!this.props.todo.name) { editState = true; }
    return {
      todo: this.props.todo,
			editable: editState
    };
  },

  updateName (e) {
		let newTodo = this.state.todo;
		newTodo.name = e.currentTarget.value;
    this.setState({todo: newTodo});
  },

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createTodo(this.state.todo);
		let newTodo = this.state.todo;
		newTodo.name = '';
    this.setState({todo: newTodo});
  },

  render () {
		let todoEl;

		if (this.state.editable) {
			todoEl = () => {
				return (
				<form className='todo-form' onSubmit={this.handleSubmit}>
          <input
            placeholder="+"
            value={this.state.todo.name}
            onChange={this.updateName} />
        </form>
				);
			};
		} else {
			todoEl = () => {
				return (
					<div>{this.state.todo.name}</div>
				);
			};
		}

    return (
      <div>
        { todoEl() }
      </div>
    );
  }
});

export default TodoForm;
