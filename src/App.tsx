import React from 'react';
import TelegramLoginButton from './components/TelegramLoginButton';

const handleTelegramResponse = (user: any) => {
    console.log(user);
};

function App() {
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

export default App;
