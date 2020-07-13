import { createAsyncAction } from 'typesafe-actions';
import { Epic } from 'redux-observable';

const signIn = createAsyncAction('SIGNIN', 'SIGNIN_SUCCESS', '_FAILURE')<string, Todo[], Error, string>();

const fetchTodosFlow: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { todosApi }) =>
    action$.pipe(
        filter(isActionOf(signIn.request)),
        switchMap((action) =>
            from(todosApi.getAll(action.payload)).pipe(
                map(signIn.success),
                catchError((message: string) => of(signIn.failure(message))),
                takeUntil(action$.pipe(filter(isActionOf(signIn.cancel))))
            )
        )
    );
