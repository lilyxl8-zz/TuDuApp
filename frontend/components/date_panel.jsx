import React from 'react';
import TodoItem from './todo_item';

const DatePanel = React.createClas({
  
  render() {

    let todos = (
      this.props.todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} />
      );
    );

    return (
      <div className='calendarDay'>
        {new Date(this.props.date)}
        <div className='dayContents'>
          {todos}
        </div>
      </div>
    );
  }
})


export default DatePanel;
