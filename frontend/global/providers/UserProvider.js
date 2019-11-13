import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';
import Cookies from 'js-cookie';

const UserProvider = ({ children }) => {


    const [user, _setUser] = useState({
        username: Cookies.get('USERNAME')
    });

    const showUser = () => console.log(user);

    return (
        <UserContext.Provider value={{ user, showUser, _setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;