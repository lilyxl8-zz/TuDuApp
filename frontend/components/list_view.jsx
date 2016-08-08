import React from 'react'

import TodoForm from '../components/todo_form'

const ListView = React.createClass({
  render () {
    return (
      <div className="list-view">
        <TodoForm />
      </div>
    )
  }
})

export default ListView
