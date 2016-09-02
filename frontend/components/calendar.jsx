import React from 'react';
import TodoUtil from '../utils/todo_util'
import TodoStore from '../stores/todo_store'
import DatePanels from './date_panels'

const Calendar = React.createClass({

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

  navigateRight() {
    // 86400000 milliseconds in a day
    let oneDay = 86400000;
    this.setState({ centerDate: this.state.centerDate + oneDay});
  },

  navigateRight() {
    let oneDay = 86400000;
    this.setState({ centerDate: this.state.centerDate - oneDay});
  },

  render () {
    let oneDay = 86400000;
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
        { datePanels }
      </div>
    );
  }
})

export default Calendar
