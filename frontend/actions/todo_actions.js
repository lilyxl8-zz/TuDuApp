import AppDispatcher from '../dispatcher/dispatcher'
import ListConstants from '../constants/list_constants'
import DateConstants from '../constants/date_constants'

const TodoActions = {
// TODO separate to TodoActions and DateConstants import @ top
  toggleDone (todo) {
    const actionType = todo.list_id ?
      ListConstants.TODO_RECEIVED :
      DateConstants.TODO_RECEIVED

    AppDispatcher.dispatch({
      actionType: actionType,
      todo: todo
    })
  },

  // TODO let it add to a Date
  create (todo) {
    const actionType = todo.list_id ?
      ListConstants.TODO_RECEIVED :
      DateConstants.TODO_RECEIVED

    console.log(actionType)
    AppDispatcher.dispatch({
      actionType: actionType,
      todo: todo
    })
  },

  // TODO let it add to a Date
  updateTodo (todo) {
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_RECEIVED,
      todo: todo
    })
  },

  deleteTodo (todo) {
    // TODO check if it's the last to-do deleted from a Date, then delete that Date
    AppDispatcher.dispatch({
      actionType: ListConstants.TODO_DELETED,
      todo: todo
    })
  }
}

export default TodoActions
