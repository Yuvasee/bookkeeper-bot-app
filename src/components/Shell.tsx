import React from 'react';
import TelegramLoginButton, { TelegramUser } from '@v9v/ts-react-telegram-login';

const handleTelegramResponse = (user: TelegramUser) => {
    console.log(user);
    // auth_date: 1594214025
    // first_name: "Yuri"
    // hash: "e785537c13e00cbb2071b409c14bedf2ea55d05e984465fca0bdc593ef86a29d"
    // id: 625010646
    // last_name: "v9v"
};

function Shell() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <b>Shalom!</b>
            <br />
            <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="lou_bookkeeper_dev_bot" />
        </div>
    );
}

export default Shell;
