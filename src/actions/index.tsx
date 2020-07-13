import { ActionType } from 'typesafe-actions';
import { combineEpics } from 'redux-observable';
import { signIn, signInEpic } from './api';

export const rootEpic = combineEpics(signInEpic);

export type RootAction = ActionType<typeof signIn>;
