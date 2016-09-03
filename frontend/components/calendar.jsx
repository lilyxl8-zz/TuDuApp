import React from 'react';
import TodoUtil from '../utils/todo_util';
import TodoStore from '../stores/todo_store';
import DatePanel from './date_panel';

const Calendar = React.createClass({
  // Not currently being rendered

  getInitialState() {
    return {
      todos: TodoStore.allByDate(),
      centerDate: Date.now()
    };
  },
  componentDidMount() {
    TodoUtil.fetchTodos(this.state.centerDate);
    this.TodoStoreToken = TodoStore.addEventListener(this._onChange);
  },

  componentWillUnmount() {
    this.TodoStoreToken.remove();
  },

  _onChange() {
    this.setState({ todos: TodoStore.allByDate() });
  }

  navigate(direction, distance) {
    // 86400000 milliseconds in a day
    const oneDay = 86400000;
    let newCenter;
    if (direction === 'right') {
      newCenter = this.state.centerDate + (oneDay * distance);
    } else {
      newCenter = this.state.centerDate - (oneDay * distance);
    }
    // TODO There must be a way to avoid a double rerender
    this.setState({ centerDate: newCenter });
    TodoUtil.fetchTodos(newCenter);
  },

  render () {
    const oneDay = 86400000;
    let dates = [];

    for (var i = 0; i < 5; i++) {
      dates.push(this.state.centerDate + ((i - 2) * oneDay));
    }

    const datePanels = (
      dates.map(date =>
        <DatePanel date={date} todos={this.state.todos['' + date]} />
      );
    );

    return (
      <div>
        <div onClick={this.navigate('left', 7)}>One Week Left</div>
        <div onClick={this.navigate('left', 1)}>Left</div>
        { datePanels }
        <div onClick={this.navigate('right', 1)}>Right</div>
        <div onClick={this.navigate('right', 7)}>One Week Right</div>
      </div>
    );
  }
})

export default Calendar
