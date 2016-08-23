import { Store } from 'flux/utils';
import SessionConstants from '../constants/session_constants';
import AppDispatcher from '../dispatcher/dispatcher';

const SessionStore = new Store(AppDispatcher);

let _currentUser;
let _currentUserHasBeenFetched = false;

SessionStore.currentUser = () => {
  return _currentUser;
};

SessionStore.isLoggedIn = () => {
  return !!_currentUser;
};

SessionStore.currentUserHasBeenFetched = () => {
  return _currentUserHasBeenFetched;
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserHasBeenFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      SessionStore.__emitChange();
      break;
  }
};

export default SessionStore;
