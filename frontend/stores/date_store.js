import { Store } from 'flux/utils'
import DateConstants from '../constants/date_constants'
import AppDispatcher from '../dispatcher/dispatcher'

const DateStore = new Store(AppDispatcher)

let _dates = {}

// DATEACTIONS
// add or remove a todo to a Date
// if a Date is emptied of to-dos, remove it from DateStore
//  this can only happen on deleteTodo, so put a check there

// CALSTORE
// 1) deleteTodo
// removeDate (date) – triggered by deleteTodo

// DATEINDEX
//  write DateStore.increment

DateStore.increment = (start, move) => {
  // const today = new Date().toJSON().slice(0, 10)
  // let startDate = new Date(start)
  // todayIdx.setDate(todayIdx.getDate() - 2)
  // todayIdx = todayIdx.toJSON().slice(0, 10)
}

DateStore.replaceTodo = (todo) => {
  let replaced = false
  let _todos = _dates[todo.date].todos

  _dates[todo.date].todos = _todos.map((el) => {
    if (el.id === todo.id) {
      replaced = true
      return todo
    } else {
      return el
    }
  })

  if (!replaced) {
    _dates[todo.date].todos.push(todo)
  }
}

DateStore.clearDates = () => {
  _dates = {}
}

DateStore.all = () => {
  return _dates
}

DateStore.populateDates = (dates) => {
  let dateKey
  for (let i = 0; i < dates.length; i++) {
    dateKey = dates[i].full_date
    _dates[dateKey] = dates[i]
  }
}

DateStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case DateConstants.DATE_CREATED:
      this.replaceDate(payload.date)
      DateStore.__emitChange()
      break
    case DateConstants.DATES_RECEIVED:
      DateStore.populateDates(payload.dates)
      DateStore.__emitChange()
      break
    case DateConstants.TODO_RECEIVED:
      DateStore.replaceTodo(payload.todo)
      DateStore.__emitChange()
      break
  }
}

export default DateStore
