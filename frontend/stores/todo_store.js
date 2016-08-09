import { Store } from 'flux/utils';
import TodoConstants from '../constants/session_constants';
import AppDispatcher from '../dispatcher/dispatcher';

const TodoStore = new Store(AppDispatcher);

let _todos = [];

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

TodoStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case TodoConstants.TODO_RECEIVED:
      this.replaceTodo(payload.todo);
			TodoStore.__emitChange();
			break;
  }
};

TodoStore.all = () => {
  return _todos;
};

export default TodoStore;
