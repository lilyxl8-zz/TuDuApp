// import UserActions from '../actions/user_actions'

const UserUtil = {
  createAccount: (credentials, callback) => {
    $.ajax({
      type: 'POST',
      url: '/api/users',
      dataType: 'json',
      data: { user: credentials },
      success: () => {
        callback && callback({
          username: credentials.username,
          password: credentials.password
        });
      }
    })
  }
}

export default UserUtil
