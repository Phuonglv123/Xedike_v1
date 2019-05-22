import BaseApi from "./BaseApi";
import type {Passenger} from "../type/user";

class API extends BaseApi {

    async registerPassenger(params) {
        const res = await this.apiCall({
            url: 'passenger/register',
            method: 'POST',
            data: params
        });
        return res;
    }

}

export default new API();
