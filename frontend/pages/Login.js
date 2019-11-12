import React, { useState, useContext, useEffect } from 'react';
import Api from '../services/Api';
import UserContext from '../global/contexts/UserContext';
import Head from 'next/head';

const Header = () => (
    <Head>
        <title>CCCCC</title>
        <meta name="description" content="CCCCCCCCC" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="SSSSSS" />
        <meta name="og:description" property="og:description" content="SSSSS" />
        <meta property="og:site_name" content="SSS" />
        <meta property="og:url" content="SSSS" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="asxasxasx" />
        <meta name="twitter:site" content="asxasx" />
        <meta name="twitter:creator" content="xasxasx" />
        <meta property="og:image" content="xasxasx" />
        <meta name="twitter:image" content="xasxasxasx" />
    </Head>
);

const Login = () => {

    const { _setUser, showUser } = useContext(UserContext);

    const [username, setUsername] = useState('Vitu_77sC');
    const [password, setPassword] = useState('12345');
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, _setLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = async () => {
            const isAuthenticated = await Api.isAuthenticated();

            await isAuthenticated === true ? setAuthenticated(true) : setAuthenticated(false);

            setTimeout(() => _setLoading(false), 700);
        }

        isAuthenticated();
    }, []);

    const handleChange = (event) => {
        const type = event.target.type;

        switch (type) {
            case 'text': setUsername(event.target.value);
                break;
            case 'password': setPassword(event.target.value);
                break;
            default: console.log(event.target);
                break;
        }
    }

    const submit = () => Api.authenticate(username, password, _setUser);

    return (
        <React.Fragment>
            <Header />
            {
                loading
                    ? <h1>Loading...</h1>
                    :
                    <React.Fragment>
                        <form>
                            <input
                                type='text'
                                placeholder='username'
                                onChange={handleChange}
                                value={username}
                            />
                            <input
                                type='password'
                                placeholder='password'
                                onChange={handleChange}
                                value={password}
                            />
                            <button onClick={submit} type='button'>Submit</button>
                            <button onClick={showUser} type='button'>Show user</button>
                            {
                                authenticated
                                    ? <button onClick={showUser} type='button'>SAIR</button>
                                    : <button onClick={showUser} type='button'>ENTRAR</button>
                            }
                        </form>
                    </React.Fragment>
            }
        </React.Fragment>

    )
}

export default Login;
