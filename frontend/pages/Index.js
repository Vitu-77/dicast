import React, { useEffect, useState } from 'react';
import Api from '../services/Api';

const Index = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        Api.isAuthenticated(setAuthenticated);

        return () => setAuthenticated(false);
    }, []);

    return (
        <React.Fragment>
            {authenticated ? <h1>INDEX</h1> : 'LOADING...'}
        </React.Fragment>
    );
}

export default Index;