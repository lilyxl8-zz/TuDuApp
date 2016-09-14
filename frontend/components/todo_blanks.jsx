import React from 'react'

const TodoBlanks = ({ numBlanks, onClick }) => {
  let blankTodos = []

  for (let i = 0; i < numBlanks; i++) {
    blankTodos.push(
      <div className='todo-item' key={i}></div>
    )
  }
  return (
    <div onClick={ onClick }>
      { blankTodos }
    </div>
  )
}

export default TodoBlanks
