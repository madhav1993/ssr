import { combineReducers } from 'redux';
import userReducer from './userReducer'
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer
});
