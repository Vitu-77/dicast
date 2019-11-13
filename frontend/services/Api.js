import Cookies from 'js-cookie';
import Axios from 'axios';
import Router from 'next/router'
import jwt from 'jwt-simple';

const Fetch = Axios.create({ baseURL: 'http://localhost:3333' });

export default {
    async isAuthenticated(setLoading, isLoginPage) {

        const token = Cookies.get('DICAST_AUTH_TOKEN');

        if (token === undefined || token === null || token === '') {
            isLoginPage ? setLoading(false) : Router.push('/login');
        }
        else {
            try {             
                const response = await Axios.get('http://localhost:3333/is_authenticated', {
                    headers: { token }
                });

                const { isAuthenticated } = response.data;

                if (!isAuthenticated) {
                    if (!isLoginPage) {
                        Router.push('/login');
                    }
                    else {
                        setLoading(false);
                    }
                }
                else {
                    if (isLoginPage) {
                        Router.push('/');
                    }
                    else {
                        setLoading(false);
                    }
                }
            } catch (error) {
                Router.push('/login');
            }
        }
    },

    async authenticate(username, password, _setUser, setLoginError, persistLogged) {
        const { data } = await Fetch.post('/authenticate', { username, password });

        const { user, auth, error } = data;

        if (!error) {
            await _setUser(user);

            if (persistLogged) {
                Cookies.set('DICAST_AUTH_TOKEN', auth, { expires: 50000 });
                Cookies.set('USERNAME', user.username, { expires: 50000 });
                //TODO colocar o resto das infos nos cookies
            }
            else {
                Cookies.set('DICAST_AUTH_TOKEN', auth);
                Cookies.set('USERNAME', user.username);
                //TODO colocar o resto das infos nos cookies
            }

            Router.push('/');
        }
        else {
            switch (error) {
                case 'user not found': setLoginError(1);
                    break;
                case 'invalid password': setLoginError(2);
                    break;
                default: setLoginError(1);
                    break;
            }
        }
    },

    async getUser(userId, setUser) {
        const { data } = await Fetch.get(`/users?user_id=${userId}`);

        const { user } = data;

        setUser(user);
    }
}
