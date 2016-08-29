import { Store } from 'flux/utils';
import ListConstants from '../constants/list_constants';
import AppDispatcher from '../dispatcher/dispatcher';

const ListStore = new Store(AppDispatcher);

let _lists = [];

ListStore.replaceList = (list) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === list.id) {
      _lists[i] = list;
      return;
    }
  }

  _lists.push(list);
};

ListStore.removeList = (list) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === list.id) {
      _lists.splice(i, 1);
      return;
    }
  }
};

ListStore.removeTodo = (todo) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === todo.list_id) {
      for (let j = 0; j < _lists[i].todos.length; j++) {
        if (_lists[i].todos[j].id === todo.id) {
          _lists[i].todos.splice(j, 1);
          return;
        }
      }
    }
  }
};

ListStore.clearLists = () => {
  _lists = [];
};

ListStore.all = () => {
  return _lists;
};

ListStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ListConstants.LISTS_RECEIVED:
      _lists = payload.lists;
      ListStore.__emitChange();
      break;
    case ListConstants.LIST_RECEIVED:
      ListStore.replaceList(payload.list);
      ListStore.__emitChange();
      break;
    case ListConstants.LIST_DELETED:
      ListStore.removeList(payload.list);
      ListStore.__emitChange();
      break;
    case ListConstants.LISTS_CLEARED:
      ListStore.clearLists();
      ListStore.__emitChange();
      break;
    case ListConstants.TODO_RECEIVED:
      ListStore.replaceList(payload.todo.list);
      ListStore.__emitChange();
      break;
    case ListConstants.TODO_DELETED:
      ListStore.removeTodo(payload.todo);
      ListStore.__emitChange();
      break;
  }
};

export default ListStore;
