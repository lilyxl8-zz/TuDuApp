import React from 'react';
import ListUtil from '../utils/list_util';
import ListStore from '../stores/list_store';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import NameForm from './name_form';

const ListView = React.createClass({
  getInitialState () {
    return {
      list: this.props.list,
      style: this.props.listStyle,
      editing: false
    };
  },

  componentDidMount () {
    this.listStoreToken = ListStore.addListener(this._updateList);
  },

  _updateList () {
    this.setState({ list: this.props.list });
  },

  updateName (e) {
    let newList = this.state.list;
    newList.name = e.currentTarget.value;
    this.setState({ list: newList });
  },

  toggleEditing (e) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  },

  focusTodoForm (e) {
    e.preventDefault();
    document.getElementById(this.props.list.id).firstChild.firstChild.focus();
  },

  componentWillUnmount () {
    this.listStoreToken.remove();
  },

  handleSubmit (e) {
    e.preventDefault();
    ListUtil.updateList(this.state.list);
    this.toggleEditing(e);
  },

  deleteList (e) {
    e.preventDefault();
    ListUtil.deleteList(this.state.list);
  },

  render () {
    let newTodo;
    let blankTodos = [];

    if (this.state.list.todos.length < 10) {
      for (let i = 0; i < 9 - this.state.list.todos.length; i++) {
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
        <NameForm editing={ this.state.editing }
          name={ this.props.list.name } />
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
