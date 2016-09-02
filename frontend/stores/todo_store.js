// handles only Calendar todos TODO write scope
// List todos are handled under ListStore

import { Store } from 'flux/utils';
import TodoConstants from '../constants/session_constants';
import AppDispatcher from '../dispatcher/dispatcher';

const TodoStore = new Store(AppDispatcher);

let _todos = [];
let _sortedTodos = {};

TodoStore.replaceTodo = (todo) => {
  let replaced = false;

  _todos = _todos.map( (el) => {
    if (el.id === todo.id) {
      replaced = true;
      return todo;
    } else {
      return el;
    }
  });

  if (!replaced) {
    _todos.push(todo);
  }
};

TodoStore.all = () => {
  return _todos;
};

TodoStore.organizeTodos = (todos, day) => {
  let oneDay = 86400000;
  for (let i = 0; i < 5; i++) {
    let newDay = day.getTime() * (i - 2));
    _sortedTodos['' + newDay] = [];
  }
  for (let i = 0; i < todos.length; i++) {
    _sortedTodos['' + todos[i].date] += todos[i];
  }
};

TodoStore.allByDate = () => {
  return _sortedTodos;
}


TodoStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case TodoConstants.TODO_RECEIVED:
      this.replaceTodo(payload.todo);
      TodoStore.__emitChange();
      break;
    case TodoConstants.TODOS_RECEIVED:
      _todos = payload.todos;
      TodoStore.__emitChange();
      break;
    case TodoConstants.TODOS_RECEIVED_CALENDAR:
      this.organizeTodos(payload.todos, payload.day);
      TodoStore.__emitChange();
      break;
  }
};

export default TodoStore;
