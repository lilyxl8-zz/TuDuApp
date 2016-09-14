import React from 'react'
import TodoView from './todo_view'

const TodoList = ({ todos, isDemo }) => (
  <div>
    { todos.map( todo =>
      <TodoView key={todo.id} todo={todo} isDemo={ isDemo } />
    ) }
  </div>
)

export default TodoList
