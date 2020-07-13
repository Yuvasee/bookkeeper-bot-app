import { createReducer } from 'typesafe-actions';
import { RootAction } from '../actions';
import { signIn } from '../actions/api';

export interface AuthState {
    token: string;
    expires?: Date;
}

const authReducer = createReducer<AuthState, RootAction>({ token: '' }).handleAction(
    signIn.success,
    (state, action) => ({ token: action.payload })
);

export default authReducer;
