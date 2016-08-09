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

};

export default TodoUtil;
