import { createAsyncAction, isActionOf } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { TelegramUser } from '@v9v/ts-react-telegram-login';
import { callApi } from '../graphql/callApi';
import { createSignInQuery } from '../graphql/queries';
import { RootAction } from '.';

// prettier-ignore
export const signIn = createAsyncAction('SIGNIN_REQUEST', 'SIGNIN_SUCCESS', 'SIGNIN_FAILURE')<TelegramUser, string, Error>();

export const signInEpic: Epic<RootAction, RootAction> = (action$) =>
    action$.pipe(
        filter(isActionOf(signIn.request)),
        switchMap(({ payload }) =>
            from(callApi(createSignInQuery(payload))).pipe(
                map(signIn.success),
                catchError((message: string) => of(signIn.failure(new Error(message))))
            )
        )
    );
