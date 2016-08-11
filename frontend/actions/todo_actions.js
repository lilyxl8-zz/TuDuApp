import AppDispatcher from '../dispatcher/dispatcher';
import TodoConstants from '../constants/todo_constants';

const TodoActions = {
  todoReceived (todo) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_RECEIVED,
			todo: todo
		});
	},

	todosReceived (todos) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODOS_RECEIVED,
			todos: todos
		});
	},

	clearTodos () {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODOS_CLEARED
		});
	}
};

export default TodoActions;
