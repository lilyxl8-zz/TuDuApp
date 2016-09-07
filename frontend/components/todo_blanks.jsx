import React from 'react';

const TodoBlanks = ({ numBlanks }) => {
  let blankTodos = [];

  for (let i = 0; i < numBlanks; i++) {
    blankTodos.push(
      <div className='todo-item' key={i}></div>
    );
  }
  return (
    <div>
      { blankTodos }
    </div>
  );
};

export default TodoBlanks;
