import React from 'react';
import ListUtil from '../utils/list_util';

const TodoItem = React.createClass({
  getInitialState () {
		console.log(this.props.todo);
    return {
      todo: this.props.todo,
			editable: false
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
    ListUtil.updateTodo(this.state.todo);
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
						onBlur={this.toggleEditable}
						autoFocus />
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

export default TodoItem;
