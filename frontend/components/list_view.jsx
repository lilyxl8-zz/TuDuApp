import React from 'react';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import ListForm from './list_form';

const ListView = React.createClass({
  getInitialState () {
    return {
      style: this.props.listStyle
    };
  },

  focusTodoForm (e) {
    e.preventDefault();
    // TODO clean
    document.getElementById(this.props.list.id).firstChild.firstChild.focus();
  },

  allTodos () {
    let _allTodos = [];

    // TODO put this logic in ListStore
    // TODO componentize these elements
    if (this.props.list.todos) {
      _allTodos.push(<TodoList todos={ this.props.list.todos } />);

      const blankTodo = {name: '', list_id: this.props.list.id };
      _allTodos.push(
        <div id={this.props.list.id}>
          <TodoForm todo={blankTodo} />
        </div>
      );

      if (this.props.list.todos.length < 10) {
        for (let i = 0; i < 9 - this.props.list.todos.length; i++) {
          _allTodos.push(
            <div className='todo-item' key={i} onClick={this.focusTodoForm}></div>
          );
        }
      }
    }
  },

  render () {
    return (
      <div className='list-view' style={ this.props.style }>
        <ListForm list={this.props.list}/>
        <div className='list-todos'>
          { this.allTodos() }
        </div>
      </div>
    );
  }
});

export default ListView;
