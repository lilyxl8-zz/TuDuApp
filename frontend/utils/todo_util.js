import TodoActions from '../actions/todo_actions';

const TodoUtil = {
  createTodo: (name) => {
    $.ajax({
      type: 'POST',
      url: '/api/todos',
      dataType: 'json',
      data: { name: name, list_id: 1 }, //TODO make lists a thing
      success: (todo) => {
        TodoActions.todoReceived(todo);
      }
    });
  },

  fetchTodosByListId: (listId) => {
    $.ajax({
      type: 'GET',
      url: '/api/lists/{$listId}',
      dataType: 'json',
      success: (list) => {
        TodoActions.todosReceived(list.todos);
      }
    });
  },

  fetchTodos: (day) => {
    $.ajax({
      type: 'GET',
      url: 'api/todos',
      dataType: 'json',
      data: {date: day},
      success: (todos) => {
        TodoActions.todosReceivedCalendar(todos, day);
      }
    });
  }
};

export default TodoUtil;
