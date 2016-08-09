import ListActions from '../actions/list_actions';
import SessionStore from '../stores/session_store';

const ListUtil = {
	fetchAll: () => {
		const userId = SessionStore.currentUser().id;

		$.ajax({
			type: 'GET',
			url: '/api/users/${userId}',
			dataType: 'json',
			success: (user) => {

			}
		});
	},

  createList: (name) => {
    $.ajax({
      type: 'POST',
      url: '/api/lists',
      dataType: 'json',
      data: { name: name, list_id: 1 }, //TODO make lists a thing
      success: (list) => {
        ListActions.listReceived(list);
      }
    });
  },

};

export default ListUtil;
