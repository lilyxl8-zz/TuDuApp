import React from 'react';
import TodoItem from './todo_item';

const TodoList = ({ todos }) => (
  <div>
    { todos.map(todo =>
      <TodoItem key={todo.id} todo={todo} />
    ) }
  </div>
);

export default TodoList;
