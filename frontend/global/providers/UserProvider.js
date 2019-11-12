import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';

const UserProvider = ({ children }) => {

    const [user, _setUser] = useState({});

    const showUser = () => console.log(user);

    return (
        <UserContext.Provider value={{ user, _setUser, showUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;