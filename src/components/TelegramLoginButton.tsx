import React, { useRef, useEffect } from 'react';

interface TelegramLoginButtonProps {
    botName: string;
    dataOnAuth?: (user: any) => void;
    dataAuthUrl?: string;
    buttonSize?: 'large' | 'medium' | 'small';
    cornerRadius?: number;
    requestAccess?: string;
    usePic?: boolean;
    lang?: string;
}

function TelegramLoginButton(props: TelegramLoginButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const {
            botName,
            buttonSize = 'large',
            cornerRadius,
            requestAccess = 'write',
            usePic = true,
            dataOnAuth,
            dataAuthUrl,
            lang = 'en',
        } = props;

        (window as any).telegramLoginWidgetCb = dataOnAuth;

        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?9';
        script.setAttribute('data-telegram-login', botName);
        script.setAttribute('data-size', buttonSize);
        typeof cornerRadius === 'number' && script.setAttribute('data-radius', `${cornerRadius}`);
        script.setAttribute('data-request-access', requestAccess);
        script.setAttribute('data-userpic', `${usePic}`);
        script.setAttribute('data-lang', lang);
        dataAuthUrl
            ? script.setAttribute('data-auth-url', dataAuthUrl)
            : script.setAttribute('data-onauth', 'telegramLoginWidgetCb(user)');
        script.async = true;

        containerRef.current!.appendChild(script);
    });

    return <div ref={containerRef}></div>;
}

export default TelegramLoginButton;
