import { combineReducers } from 'redux';
import project_reducer from './project_reducer'

const rootReducer = combineReducers({
    projects: project_reducer
});

export default rootReducer;
