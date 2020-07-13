import React, { useCallback } from 'react';
import styled from 'styled-components';

import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Shell() {
    const handleTelegramResponse = useCallback((user: TelegramUser) => {
        console.log(user);
        // auth_date: 1594214025
        // first_name: "Yuri"
        // hash: "e785537c13e00cbb2071b409c14bedf2ea55d05e984465fca0bdc593ef86a29d"
        // id: 625010646
        // last_name: "v9v"
    }, []);

    return (
        <Container>
            <b>Shalom!</b>
            <br />
            <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="lou_bookkeeper_dev_bot" />
        </Container>
    );
}

export default Shell;
