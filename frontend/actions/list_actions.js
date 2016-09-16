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

  setDemo () {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_CLEARED
    })
  }
}

export default ListActions
