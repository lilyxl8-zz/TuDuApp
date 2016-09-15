import DateActions from '../actions/date_actions'

// create, update, deleteDate all taken care of by DB on todos
const DateUtil = {
  fetchUserDates: () => {
    $.ajax({
      type: 'GET',
      url: '/api/cal_dates/',
      dataType: 'json',
      success: (dates) => {
        DateActions.datesReceived(dates)
      }
    })
  }

  // createDate: (name) => {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/api/dates',
  //     dataType: 'json',
  //     data: { name: name, list_id: 1 },
  //     success: (date) => {
  //       DateActions.dateCreated(date)
  //     }
  //   })
  // }
}

export default DateUtil
