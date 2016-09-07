import React from 'react';
import TodoView from './todo_view';

const TodoList = ({ todos }) => (
  <div>
    { todos.map(todo =>
        <TodoView key={todo.id} todo={todo} />
      )
    }
  </div>
);

export default TodoList;
