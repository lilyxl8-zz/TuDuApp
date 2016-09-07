import React from 'react';
import ListForm from './list_form';
import TodoList from './todo_list';
import TodoNew from './todo_new';
import TodoBlanks from './todo_blanks';

const ListView = React.createClass({
  getInitialState () {
    return {
      style: this.props.listStyle
    };
  },

  focusTodoForm (e) {
    e.preventDefault();
    // TODO fix this.refs.todoForm.findDOMNode().focus();
  },

  focusListForm (e) {
    e.preventDefault();
    // TODO
  },

  render () {
    const newOrExistingListTodos = (this.props.list.name != '') ? (
      <div className='list-todos'>
        <TodoList todos={ this.props.list.todos } />
        <TodoNew listId={ this.props.list.id } />
        <div onClick={ this.focusTodoForm }>
          <TodoBlanks numBlanks={ 9 - this.props.list.todos.length } />
        </div>
      </div>
    ) : (
      <div className='list-todos'>
        <div onClick={this.focusListForm}>
          <TodoBlanks numBlanks='10' />
        </div>
      </div>
    );

    return (
      <div className='list-view' style={ this.props.style }>
        <ListForm list={this.props.list} />
        { newOrExistingListTodos }
      </div>
    );
  }
});

export default ListView;
