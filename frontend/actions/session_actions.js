import AppDispatcher from '../dispatcher/dispatcher'
import SessionConstants from '../constants/session_constants'

const SessionActions = {
  currentUserReceived: function(currentUser) {
		AppDispatcher.dispatch({
			actionType: SessionConstants.CURRENT_USER_RECEIVED,
			currentUser: currentUser
		});
	},

	logout: function() {
		AppDispatcher.dispatch({
			actionType: SessionConstants.LOGOUT
		});
	}
}

export default SessionActions
