import axios from 'axios';

let jwt = null;

class Auth {
    constructor() {
        this.apiUrl = 'http://localhost:4000/api/';
        this.loadUser();
    }

    async signIn(params) {
        try {
            const res = await axios({
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                url: `${this.apiUrl}home/login`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });

            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    logout() {
        localStorage.removeItem('user');
        jwt = null;
    }

    getUser() {
        if (jwt) {
            return jwt.user;
        } else {
            return null;
        }
    }

    saveUser(user) {
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user.token));
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }

    loadUser() {
        try {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
            }
            if (user && user.token) {
                jwt = user;
                let token = user.token;
                this.token = token;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Auth()
