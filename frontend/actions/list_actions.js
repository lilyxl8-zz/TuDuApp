import AppDispatcher from '../dispatcher/dispatcher'
import ListConstants from '../constants/list_constants'

const ListActions = {
  listsReceived (lists) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_RECEIVED,
      lists: lists
    })
  },

  createList (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_RECEIVED,
      list: list
    })
  },

  updateList (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_RECEIVED,
      list: list
    })
  },

  deleteList (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_DELETED,
      list: list
    })
  },

  toggleDone (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_RECEIVED,
      todo: todo
    })
  },

  createTodo (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_RECEIVED,
      todo: todo
    })
  },

  updateTodo (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_RECEIVED,
      todo: todo
    })
  },

  deleteTodo (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_DELETED,
      todo: todo
    })
  },

  setDemo () {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_CLEARED
    })
  }
}

export default ListActions
