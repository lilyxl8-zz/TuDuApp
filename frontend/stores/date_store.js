import { Store } from 'flux/utils'
import DateConstants from '../constants/date_constants'
import AppDispatcher from '../dispatcher/dispatcher'

const DateStore = new Store(AppDispatcher)

let _dates = {}

DateStore.replaceDate = (todo) => {
  _dates[todo.date] = todo.cal_date
}

DateStore.removeTodo = (todo) => {
  let _date = _dates[todo.date]

  for (let i = 0; i < _date.todos.length; i++) {
    if (_date.todos[i].id === todo.id) {
      _date.todos.splice(i, 1)
      break
    }
  }

  if (_date.todos.length > 0) {
    _dates[todo.date] = _date
  } else {
    delete _dates[todo.date]
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
    case DateConstants.DATE_RECEIVED:
      this.replaceDate(payload.date)
      DateStore.__emitChange()
      break
    case DateConstants.DATES_RECEIVED:
      DateStore.populateDates(payload.dates)
      DateStore.__emitChange()
      break
    case DateConstants.TODO_RECEIVED:
      DateStore.replaceDate(payload.todo)
      DateStore.__emitChange()
      break
    case DateConstants.TODO_DELETED:
      DateStore.removeTodo(payload.todo)
      DateStore.__emitChange()
      break
  }
}

export default DateStore
