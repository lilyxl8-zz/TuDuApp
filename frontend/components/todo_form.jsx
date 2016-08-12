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

	toggleEditable (e) {
		e.preventDefault();
		this.setState({ editable: !this.state.editable });
	},

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.createTodo(this.state.todo);
		let newTodo = this.state.todo;
		newTodo.name = '';
    this.setState({todo: newTodo, editable: false });
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
            onChange={this.updateName}
						onBlur={this.toggleEditable} />
        </form>
				);
			};
		} else {
			todoEl = () => {
				return (
					<div>{this.state.todo.name} <a onClick={this.toggleEditable}>x</a></div>
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
