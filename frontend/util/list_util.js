import ListActions from '../actions/list_actions';

const ListUtil = {
	fetchAll: () => {
		$.ajax({
			type: 'GET',
			url: '/api/lists',
			dataType: 'json',
			success: (lists) => {
				ListActions.listsReceived(lists);
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
