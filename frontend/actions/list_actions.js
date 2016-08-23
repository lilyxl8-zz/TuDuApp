import AppDispatcher from '../dispatcher/dispatcher';
import ListConstants from '../constants/list_constants';

const ListActions = {
  listsReceived (lists) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_RECEIVED,
      lists: lists
    });
  },

  listReceived (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_RECEIVED,
      list: list
    });
  },

  listDeleted (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_DELETED,
      list: list
    });
  },

  todoReceived (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_RECEIVED,
      todo: todo
    });
  },

  todoDeleted (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_DELETED,
      todo: todo
    });
  },

  clearLists () {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_CLEARED
    });
  }
};

export default ListActions;
