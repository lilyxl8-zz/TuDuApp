import React from 'react';
import ListUtil from '../utils/list_util';
import ListStore from '../stores/list_store';
import TodoList from './todo_list';
import TodoForm from './todo_form';

const ListView = React.createClass({
  getInitialState () {
    return {
      list: this.props.list,
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
    let nameForm;

    nameForm = () => {
      if (this.state.editing) {
        return (
          <div className='list-name'>
            <form className='name-form' onSubmit={this.handleSubmit}>
              <input
                value={this.state.list.name}
                onChange={this.updateName}
                onBlur={this.toggleEditing}
                autoFocus />
            </form>
          </div>
        );
      } else {
        return (
          <div className='list-name'>
            <h1 onClick={this.toggleEditing}>
              {this.state.list.name}
            </h1>
            <a onClick={this.deleteList} className='delete-list'></a>
          </div>
        );
      }
    };

    let blankTodos = () => {
      if (this.state.list.todos.length > 9) {  return; }

      let _blankTodos = [];
      for (let i = 0; i < 9 - this.state.list.todos.length; i++) {
        _blankTodos.push(
          <div className='todo-item' key={i} onClick={this.focusTodoForm}></div>
        );
      }
      return _blankTodos;
    };

    let newTodo = () => {
      if (this.state.list.todos.length < 10) {
        const blankTodo = {name: '', list_id: this.props.list.id };
        return (
          <div id={this.props.list.id}>
            <TodoForm todo={blankTodo} />
          </div>
        );
      }
    };

    return (
      <div className='list-view'>
        { nameForm() }
        <div className='list-todos'>
          <TodoList todos={this.state.list.todos} />
          { newTodo() }
          { blankTodos() }
        </div>
      </div>
    );
  }
});

export default ListView;
