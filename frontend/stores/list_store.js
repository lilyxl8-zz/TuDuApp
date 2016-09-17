import { Store } from 'flux/utils'
import ListConstants from '../constants/list_constants'
import AppDispatcher from '../dispatcher/dispatcher'
import demoData from './list_demo.json'

const ListStore = new Store(AppDispatcher)

let _lists = []
let _isDemo

ListStore.replaceList = (list) => {
  // TODO Go back to map method for readability
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === list.id) {
      _lists[i] = list
      if (_isDemo && i === _lists.length - 1) {
        _lists.push({
          name: '',
          id: _lists.length,
          todos: []
        })
      }
      return
    }
  }
  _lists.splice(_lists.length - 1, 0, list)
  _lists[_lists.length - 1].name = ''
}

ListStore.removeList = (list) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === list.id) {
      _lists.splice(i, 1)
      return
    }
  }
}

ListStore.removeTodo = (todo) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === todo.list_id) {
      for (let j = 0; j < _lists[i].todos.length; j++) {
        if (_lists[i].todos[j].id === todo.id) {
          _lists[i].todos.splice(j, 1)
          return
        }
      }
    }
  }
}

ListStore.replaceTodo = (todo) => {
  for (let i = 0; i < _lists.length; i++) {
    if (_lists[i].id === todo.list_id) {
      for (let j = 0; j < _lists[i].todos.length; j++) {
        if (_lists[i].todos[j].id === todo.id) {
          _lists[i].todos[j] = todo
          return
        }
      }
      _lists[i].todos.push(todo)
      return
    }
  }
}

ListStore.clearLists = () => {
  _lists = []
}

ListStore.populateLists = (lists) => {
  _lists = lists.concat({
    name: '',
    todos: []
  })
  _isDemo = false
}

ListStore.all = () => {
  return _lists
}

ListStore.setDemo = () => {
  _lists = demoData
  _lists[demoData.length] = { name: '', id: demoData.length, todos: [] }
  _isDemo = true
}

ListStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ListConstants.LISTS_RECEIVED:
      ListStore.populateLists(payload.lists)
      ListStore.__emitChange()
      break
    case ListConstants.LIST_RECEIVED:
      ListStore.replaceList(payload.list)
      ListStore.__emitChange()
      break
    case ListConstants.LIST_DELETED:
      ListStore.removeList(payload.list)
      ListStore.__emitChange()
      break
    case ListConstants.LISTS_SET:
      ListStore.setDemo()
      ListStore.__emitChange()
      break
    case ListConstants.TODO_RECEIVED:
      ListStore.replaceTodo(payload.todo)
      ListStore.__emitChange()
      break
    case ListConstants.TODO_DELETED:
      ListStore.removeTodo(payload.todo)
      ListStore.__emitChange()
      break
  }
}

export default ListStore
