import React from 'react';
import App from 'next/app';

import UserProvider from '../global/providers/UserProvider';

class MainApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        );
    }
}

export default MainApp;