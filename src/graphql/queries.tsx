import { mutation, params, types } from 'typed-graphqlify';
import { TelegramUser } from '@v9v/ts-react-telegram-login';

export const createSignInQuery = (user: TelegramUser) =>
    mutation({
        signIn: params({ ...user }, types.string),
    });
