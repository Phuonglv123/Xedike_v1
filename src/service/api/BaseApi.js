import axios from 'axios';
import {Modal} from "antd";
import AppUrl from "../../components/routes/AppURL";

export default class BaseApi {
    constructor() {
        this.apiUrl = 'http://localhost:4000/api/';
    }

    setToken(token) {
        this.token = token;
    }

    async apiCall(option: Option) {
        option.method = option.hasOwnProperty('method') ? option.method : 'GET';
        option.params = option.hasOwnProperty('params') ? option.params : null;
        if (option.params) {
            for (let key in option.params) {
                if (option.params[key] === null) {
                    delete option.params[key]
                }
            }
        }
        try {
            const res = await axios({
                method: option.method,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                url: `${this.apiUrl}${option.url}`,
                data: option.params,
                validateStatus: status => {
                    return true;
                },
            });
            if (res.status >= 300) {
                // Modal.error({
                //     title: 'Error',
                //     content: 'Something wrong happen, please contact support',
                // });
            }
            if (res.status === 401) {
                // AppUrl.history.push(AppUrl.login());
                // return res.data;
                // window.location = AppURL.login();
            }

            return res.data;
        } catch (e) {
            Modal.error({
                title: 'Error',
                content: 'Something wrong happen, please contact support',
            });
            return {
                data: null,
                error: {}
            }
        }
    }
}


export type Option = {
    url: string,
    method: string,
    returnRaw: boolean,
    params: Object
}
