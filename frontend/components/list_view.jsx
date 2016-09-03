import React from 'react';
import ListUtil from '../utils/list_util';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import NameForm from './name_form';

const ListView = React.createClass({
  getInitialState () {
    return {
      style: this.props.listStyle
    };
  },

  focusTodoForm (e) {
    e.preventDefault();
    // TODO fix
    // this.refs.todoForm.findDOMNode().focus();
  },

  render () {
    let newTodo;
    let blankTodos = [];

    // TODO put this logic in ListStore
    // TODO componentize these elements
    if (this.props.list.todos.length < 10) {
      for (let i = 0; i < 9 - this.props.list.todos.length; i++) {
        blankTodos.push(
          <div className='todo-item' key={i}></div>
        );
      }

      const blankTodo = {name: '', list_id: this.props.list.id };
      newTodo = (
        <div className='todo-item'>
          <TodoForm todo={blankTodo} ref='todoForm' />
        </div>
      );
    }

    return (
      <div className='list-view' style={ this.props.style }>
        <NameForm list={this.props.list}/>
        <div className='list-todos'>
          <TodoList todos={ this.props.list.todos } />
          { newTodo }
          <div onClick={this.focusTodoForm}>
            { blankTodos }
          </div>
        </div>
      </div>
    );
  }
});

export default ListView;
