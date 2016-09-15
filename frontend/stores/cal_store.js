import { Store } from 'flux/utils'
import TodoConstants from '../constants/session_constants'
import AppDispatcher from '../dispatcher/dispatcher'

const CalStore = new Store(AppDispatcher)

let _dates = {}
// only include a Date if it has todos!

// DATEACTIONS
// datesReceived (dates)
// updateDate (date) (add a todo to it)
// if a Date is emptied of to-dos, remove it from CalStore
//  this can only happen on deleteTodo, so put a check there

// CALSTORE
// 1) populateDates
// 4) replaceDate (replaceTodo?)
// removeDate (date) – triggered by deleteTodo
// 3) clearDates
// 2) all
CalStore.replaceTodo = (todo) => {
  let replaced = false

  _dates = _dates.map((el) => {
    if (el.id === todo.id) {
      replaced = true
      return todo
    } else {
      return el
    }
  })

  if (!replaced) {
    _dates.push(todo)
  }
}

CalStore.all = () => {
  return _dates
}

CalStore.populateDates = (dates) => {
  for (let i = 0; i < dates.length; i++) {
    const dateKey = dates[i].id
    _dates[dateKey] = dates[i]
  }
  _dates[0] = { name: '', todos: [] }
  console.log(_dates)
}

CalStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case TodoConstants.TODO_CREATED:
      this.replaceTodo(payload.todo)
      CalStore.__emitChange()
      break
    case TodoConstants.TODOS_RECEIVED:
      _dates = payload.todos
      CalStore.__emitChange()
      break
  }
}

export default CalStore
