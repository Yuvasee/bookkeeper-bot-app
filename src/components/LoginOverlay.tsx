import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';
import { signIn } from '../actions/api';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1000;
`;

function LoginOverlay() {
    const dispatch = useDispatch();

    const handleTelegramResponse = useCallback(
        (user: TelegramUser) => {
            // auth_date: 1594214025
            // first_name: "Yuri"
            // hash: "e785537c13e00cbb2071b409c14bedf2ea55d05e984465fca0bdc593ef86a29d"
            // id: 625010646
            // last_name: "v9v"
            console.log(user);
            dispatch(signIn.request(user));
        },
        [dispatch]
    );

    return (
        <Container>
            <b>Shalom!</b>
            <br />
            <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="lou_bookkeeper_dev_bot" />
        </Container>
    );
}

export default LoginOverlay;
