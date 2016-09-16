import AppDispatcher from '../dispatcher/dispatcher'
import ListConstants from '../constants/list_constants'
import DateConstants from '../constants/date_constants'

const TodoActions = {
  getActionType (todo) {
    return todo.list_id ?
      ListConstants.TODO_RECEIVED :
      DateConstants.TODO_RECEIVED
  },

  toggleDone (todo) {
    AppDispatcher.dispatch({
      actionType: this.getActionType(todo),
      todo: todo
    })
  },

  create (todo) {
    // TODO DateReceived
    AppDispatcher.dispatch({
      actionType: this.getActionType(todo),
      todo: todo
    })
  },

  update (todo) {
    AppDispatcher.dispatch({
      actionType: this.getActionType(todo),
      todo: todo
    })
  },

  delete (todo) {
    const actionType = todo.list_id ?
      ListConstants.TODO_DELETED :
      DateConstants.TODO_DELETED

    AppDispatcher.dispatch({
      actionType: actionType,
      todo: todo
    })
  }
}

export default TodoActions
