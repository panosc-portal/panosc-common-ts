import { bind, BindingScope, inject, Context, Provider } from '@loopback/core';
import { RestBindings, Request } from '@loopback/rest';
import Axios, { AxiosInstance } from 'axios';


@bind({ scope: BindingScope.TRANSIENT })
export class GatewayClient implements Provider<AxiosInstance> {

    constructor(
        @inject(RestBindings.Http.REQUEST) private request: Request
    ) {
    }

    value() {
        let res = Axios.create({
            baseURL: 'http://' + this.request.headers["gateway-host"] as string + '/',
            headers: {
                'access_token': this.request.headers.access_token
            }
        });
        return res;
    }


}