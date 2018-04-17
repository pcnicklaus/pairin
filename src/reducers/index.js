import { combineReducers } from 'redux';
import user_reducer from './user_reducer'
import auth_reducer from './auth_reducer';

const rootReducer = combineReducers({
    users: user_reducer,
    auth: auth_reducer
});

export default rootReducer;
