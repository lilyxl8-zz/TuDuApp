import SessionActions from '../actions/session_actions';

const SessionUtil = {
  login: (credentials, callback) => {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: { user: credentials },
      success: (currentUser) => {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  logout: function() {
		$.ajax({
			type: 'DELETE',
			url: '/api/session',
			dataType: 'json',
			success: function() {
				SessionActions.logout();
			}
		});
	},

  fetchCurrentUser: function(completion) {
		$.ajax({
			type: 'GET',
			url: '/api/session',
			dataType: 'json',
			success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
			},
			complete: function() {
				completion && completion();
			}
		});
	}
};

export default SessionUtil;
