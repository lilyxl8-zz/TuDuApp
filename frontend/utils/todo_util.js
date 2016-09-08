import TodoActions from '../actions/todo_actions';

 //TODO rewrite as CalUtil
const TodoUtil = {
  createTodo: (name) => {
    $.ajax({
      type: 'POST',
      url: '/api/todos',
      dataType: 'json',
      data: { name: name, list_id: 1 },
      success: (todo) => {
        TodoActions.todoReceived(todo);
      }
    });
  },

  fetchTodosByListId: (listId) => {
    $.ajax({
      type: 'GET',
      url: '/api/lists/' + listId,
      dataType: 'json',
      success: (list) => {
        TodoActions.todosReceived(list.todos);
      }
    });
  }
};

export default TodoUtil;
