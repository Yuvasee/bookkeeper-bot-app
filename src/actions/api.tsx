import { createAsyncAction, isActionOf, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { TelegramUser } from '@v9v/ts-react-telegram-login';
import { callApi } from '../graphql/callApi';
import { createSignInQuery } from '../graphql/queries';

export const signIn = createAsyncAction('SIGNIN', 'SIGNIN_SUCCESS', 'SIGNIN_FAILURE')<TelegramUser, string, Error>();

export const signInFlow: Epic<ApiAction, ApiAction> = (action$) =>
    action$.pipe(
        filter(isActionOf(signIn.request)),
        switchMap(({ payload }) =>
            from(callApi(createSignInQuery(payload))).pipe(
                map(signIn.success),
                catchError((message: string) => of(signIn.failure(new Error(message))))
            )
        )
    );

export type ApiAction = ActionType<typeof signIn>;
