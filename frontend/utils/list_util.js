import ListActions from '../actions/list_actions'
import TodoActions from '../actions/todo_actions'

const ListUtil = {
  fetchUserLists: () => {
    $.ajax({
      type: 'GET',
      url: '/api/lists',
      dataType: 'json',
      success: (lists) => {
        ListActions.listsReceived(lists)
      }
    })
  },

  createList: (list) => {
    $.ajax({
      type: 'POST',
      url: '/api/lists',
      dataType: 'json',
      data: { list: list },
      success: (newList) => {
        ListActions.createList(newList)
      }
    })
  },

  updateList: (list) => {
    $.ajax({
      type: 'PATCH',
      url: '/api/lists/' + list.id,
      dataType: 'json',
      data: { list: list },
      success: (updatedList) => {
        ListActions.updateList(updatedList)
      }
    })
  },

  deleteList: (list) => {
    $.ajax({
      type: 'DELETE',
      url: 'api/lists/' + list.id,
      dataType: 'json',
      data: { list: list },
      success: () => {
        ListActions.deleteList(list)
      }
    })
  },

  createTodo: (todo) => {
    $.ajax({
      type: 'POST',
      url: '/api/todos',
      dataType: 'json',
      data: { todo: todo },
      success: (todo) => {
        TodoActions.create(todo)
      }
    })
  },

  updateTodo: (todo) => {
    $.ajax({
      type: 'PATCH',
      url: '/api/todos/' + todo.id,
      dataType: 'json',
      data: { todo: todo },
      success: (todo) => {
        ListActions.updateTodo(todo)
      }
    })
  },

  toggleDone: (todo) => {
    $.ajax({
      type: 'PUT',
      url: '/api/todos/' + todo.id + '/toggle_done',
      dataType: 'json',
      success: (todo) => {
        ListActions.updateTodo(todo)
      }
    })
  },

  deleteTodo: (todo) => {
    $.ajax({
      type: 'DELETE',
      url: '/api/todos/' + todo.id,
      dataType: 'json',
      success: () => {
        ListActions.deleteTodo(todo)
      }
    })
  }
}

export default ListUtil
