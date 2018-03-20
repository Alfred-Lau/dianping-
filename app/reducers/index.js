import { combineReducers } from 'redux';
import userinfo from './userinfo';
import user from './user';

export default combineReducers({
    userinfo,
    user
});
