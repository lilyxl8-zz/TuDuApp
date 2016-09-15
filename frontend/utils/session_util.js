import SessionActions from '../actions/session_actions'
import ListActions from '../actions/list_actions'
import DateActions from '../actions/date_actions'

const SessionUtil = {
  login: (credentials, callback) => {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: { user: credentials },
      success: (currentUser) => {
        SessionActions.currentUserReceived(currentUser)
        callback && callback()
      }
    })
  },

  logout: () => {
    $.ajax({
      type: 'DELETE',
      url: '/api/session',
      dataType: 'json',
      success: () => {
        SessionActions.logout()
      },
      complete: () => {
        ListActions.setDemo()
        // DateActions.clearDates() TODO
      }
    })
  },

  fetchCurrentUser: (completion) => {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success: (currentUser) => {
        SessionActions.currentUserReceived(currentUser)
      },
      complete: () => {
        completion && completion()
      }
    })
  }
}

export default SessionUtil
