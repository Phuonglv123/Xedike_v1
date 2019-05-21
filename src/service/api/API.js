import BaseApi from "./BaseApi";
import type {Passenger} from "../type/user";

class API extends BaseApi {

    async registerPassenger(params: Passenger) {
        const res = await this.apiCall({
            url: 'passenger/register',
            method: 'POST',
            params: params
        });
        return res;
    }

}

export default new API();
