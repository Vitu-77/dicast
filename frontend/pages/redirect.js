import React, { useContext } from 'react';
import UserContext from '../global/contexts/UserContext';
import Head from 'next/head';

const Index = () => {

    const { user } = useContext(UserContext);

    return (
        <React.Fragment>
            <Head>
                <title>{user.name}</title>
            </Head>
            <h1>{user.name}</h1>
            <h1>{user.password}</h1>
            <h1>{user.username}</h1>
            <img src={user.avatar_src} alt='img' />
        </React.Fragment>
    );
}

export default Index;