import AppDispatcher from '../dispatcher/dispatcher'
import DateConstants from '../constants/date_constants'

const DateActions = {
  dateCreated (date) {
    AppDispatcher.dispatch({
      actionType: DateConstants.DATE_CREATED,
      date: date
    })
  },

  datesReceived (dates) {
    AppDispatcher.dispatch({
      actionType: DateConstants.DATES_RECEIVED,
      dates: dates
    })
  },

  dateUpdated (date) {
    AppDispatcher.dispatch({
      actionType: DateConstants.DATE_UPDATED,
      date: date
    })
  },

  clearDates () {
    AppDispatcher.dispatch({
      actionType: DateConstants.DATES_CLEARED
    })
  }
}

export default DateActions
