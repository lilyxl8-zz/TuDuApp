import React from 'react';
import TodoUtil from '../util/todo_util';

const TodoForm = React.createClass({
  getInitialState () {
		let name = '';
		if (this.props.name) {
			name = this.props.name;
		}
    return {
      name: name
    };
  },


  updateName (e) {
    this.setState({name: e.currentTarget.value});
  },

  executeSubmit (e) {
    e.preventDefault();
    TodoUtil.createTodo(this.state.name);
  },

  render () {
    return (
      <div>
        <form className='todo-form' onSubmit={this.executeSubmit}>
          <input
            placeholder="+"
            value={this.state.name}
            onChange={this.updateName} />
        </form>
      </div>
    );
  }
});

export default TodoForm;
