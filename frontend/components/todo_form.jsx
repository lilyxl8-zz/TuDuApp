import React from 'react';
import ListUtil from '../utils/list_util';

const TodoForm = React.createClass({
  getInitialState () {
		let name = '';
		if (this.props.todo.name) {
			name = this.props.todo.name;
		}
    return {
      todo: this.props.todo
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
  },

  render () {
    return (
      <div>
        <form className='todo-form' onSubmit={this.handleSubmit}>
          <input
            placeholder="+"
            value={this.state.todo.name}
            onChange={this.updateName} />
        </form>
      </div>
    );
  }
});

export default TodoForm;
