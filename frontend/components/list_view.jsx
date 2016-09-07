import React from 'react';
import TodoList from './todo_list';
import TodoNew from './todo_new';
import TodoBlanks from './todo_blanks';
import NameForm from './name_form';

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

  render () {
    // TODO refactor NameForm
    let blob;

    (this.props.list.name != '') ? blob = (
      <div className='list-todos'>
        <TodoList todos={ this.props.list.todos } />
        <TodoNew listId={ this.props.list.id } />
        <div onClick={this.focusTodoForm}>
          <TodoBlanks numBlanks={ 9 - this.props.list.todos.length } />
        </div>
      </div>
    ) :
    blob = (
      <div className='list-todos'>
        <div onClick={this.focusTodoForm}>
          <TodoBlanks numBlanks='10' />
        </div>
      </div>
    );

    return (
      <div className='list-view' style={ this.props.style }>
        <NameForm list={this.props.list} />
        { blob }
      </div>
    );
  }
});

export default ListView;
