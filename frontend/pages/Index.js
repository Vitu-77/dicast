import React, { useEffect, useState, useContext } from 'react';
import Api from '../services/Api';
import UserContext from '../global/contexts/UserContext';

const Index = () => {

    const { user, showUser } = useContext(UserContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = async () => await Api.isAuthenticated(setLoading, false);

        isAuthenticated();
    }, []);

    return (
        <React.Fragment>
            {
                loading
                    ? <h1>Loading...</h1>
                    : (
                        <div>
                            <h1>{ user.username }</h1>
                            <button onClick={showUser} type='button'>Show user</button>
                        </div>
                    )
            }
            <a href='/redirect'>link</a>
        </React.Fragment>
    );
}

export default Index;