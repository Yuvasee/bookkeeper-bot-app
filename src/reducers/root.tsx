import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer,
});
export default rootReducer;

export type State = StateType<typeof rootReducer>;
