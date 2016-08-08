import AppDispatcher from '../dispatcher/dispatcher'
import TodoConstants from '../constants/todo_constants'

const TodoActions = {
  todoReceived (todo) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_RECEIVED,
			todo: todo
		});
	}
}

export default TodoActions
