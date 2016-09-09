import React from 'react';
import ListForm from './list_form';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import TodoBlanks from './todo_blanks';

const ListView = React.createClass({
  getInitialState () {
    return {
      style: this.props.listStyle
    };
  },

  focusListForm (e) {
    e.preventDefault();
    this.refs.listForm.focus(e);
  },

  focusTodoForm (e) {
    e.preventDefault();
    this.refs.todoForm.focus(e);
  },

  render () {
    const newOrExistingListTodos = (this.props.list.name === '') ? (
      <div className='list-todos'>
        <div onClick={this.focusListForm}>
          <TodoBlanks numBlanks='10' />
        </div>
      </div>
    ) : (
      <div className='list-todos'>
        <TodoList
          todos={ this.props.list.todos }
        />
        <div className='todo-item'>
          <TodoForm
            ref='todoForm'
            todo={ {name: '', list_id: this.props.list.id } }
          />
        </div>
        <div onClick={ this.focusTodoForm }>
          <TodoBlanks
            numBlanks={ 9 - this.props.list.todos.length }
          />
        </div>
      </div>
    );

    return (
      <div className='list-view' style={ this.props.style }>
        <div className='list-wrapper'>
          <ListForm list={this.props.list} ref='listForm' />
          { newOrExistingListTodos }
        </div>
      </div>
    );
  }
});

export default ListView;
