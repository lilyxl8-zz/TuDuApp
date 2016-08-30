import React from 'react';
import ListStore from '../stores/list_store';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import ListForm from './list_form';

const ListView = React.createClass({
  getInitialState () {
    return {
      style: this.props.listStyle
    };
  },

  componentDidMount () {
    this.listStoreToken = ListStore.addListener(this._updateList);
  },

  _updateList () {
    this.setState({ list: this.props.list });
  },

  focusTodoForm (e) {
    e.preventDefault();
    document.getElementById(this.props.list.id).firstChild.firstChild.focus();
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  render () {
    let newTodo;
    let blankTodos = [];

    // TODO put this logic in ListStore
    if (this.props.list.todos.length < 10) {
      for (let i = 0; i < 9 - this.props.list.todos.length; i++) {
        blankTodos.push(
          <div className='todo-item' key={i} onClick={this.focusTodoForm}></div>
        );
      }

      const blankTodo = {name: '', list_id: this.props.list.id };
      newTodo = (
        <div id={this.props.list.id}>
          <TodoForm todo={blankTodo} />
        </div>
      );
    }

    return (
      <div className='list-view' style={ this.props.style }>
        <ListForm list={this.props.list}/>
        <div className='list-todos'>
          <TodoList todos={ this.props.list.todos } />
          { newTodo }
          { blankTodos }
        </div>
      </div>
    );
  }
});

export default ListView;
