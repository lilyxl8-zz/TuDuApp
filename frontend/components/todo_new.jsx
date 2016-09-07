import React from 'react';
import TodoForm from './todo_form';

const TodoNew = ({ listId }) => (
  <div className='todo-item'>
    <TodoForm todo={ {name: '', list_id: listId } } />
  </div>
);

export default TodoNew;
