import React from 'react';
import TodoUtil from '../util/todo_util';

const TodoForm = React.createClass({
  getInitialState () {
    return {
      name: ''
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
            placeholder="mach es jetzt!"
            value={this.state.name}
            onChange={this.updateName} />
        </form>
      </div>
    );
  }
});

export default TodoForm;
