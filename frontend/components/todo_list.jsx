import React from 'react'
import TodoView from './todo_view'

const TodoList = ({ todos, viewType }) => (
  <div>
    { todos.map( todo =>
      <TodoView key={ todo.id } todo={ todo } viewType={ viewType } />
    ) }
  </div>
)

export default TodoList
