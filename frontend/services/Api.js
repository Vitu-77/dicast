import Cookies from 'js-cookie';
import Axios from 'axios';
import Router from 'next/router'

const Fetch = Axios.create({ baseURL: 'http://localhost:3333' });

export default {
    async isAuthenticated(setLoading) {

        console.log();

        const token = Cookies.get('DICAST_AUTH_TOKEN');

        if (token === undefined || token === null || token === '') {
            Router.push('/login');
            return false;
        }
        else {
            try {
                const response = await Axios.get('http://localhost:3333/is_authenticated', {
                    headers: { token }
                });

                const { isAuthenticated } = response.data;

                if (!isAuthenticated) {
                    Router.push('/login');
                    return false;
                }
                else {
                    return true;
                }
            } catch (error) {
                Router.push('/login');
                return false;
            }
        }
    },

    async authenticate(username, password, _setUser) {
        const { data } = await Fetch.post('/authenticate', { username, password });

        const { user, auth } = data;

        _setUser(user);
        Cookies.set('DICAST_AUTH_TOKEN', auth);
        Cookies.set('USERNAME', user.username);
        //TODO Cookies.set('ACESS_LEVEL', user.acess_level);
    },

    async getUser(userId, setUser) {
        const { data } = await Fetch.get(`/users?user_id=${userId}`);

        const { user } = data;

        setUser(user);
    }
}
