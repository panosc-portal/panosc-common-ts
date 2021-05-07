import {bind, BindingScope, config, Context, inject, Provider} from '@loopback/core';
import {Request, RestBindings} from '@loopback/rest';
import Axios, {AxiosInstance} from 'axios';
import {PanoscCommonTsComponentBindings} from '../keys';


@bind({scope: BindingScope.CONTEXT})
export class GatewayClient implements Provider<AxiosInstance> {

    private _request: Request;

    constructor(
        @inject.context() private _context: Context,
        @config({
            fromBinding: PanoscCommonTsComponentBindings.COMPONENT,
            propertyPath: 'defaultGatewayHost'
        })
        private _defaultGatewayHost: string
    ) {

        let httpRequestBinding = this._context.getBinding(RestBindings.Http.REQUEST, {optional: true});
        this._request = httpRequestBinding?.getValue(this._context) as Request;
    }

    value() {

        let axios: AxiosInstance;

        if (this._request) {

            axios = Axios.create({
                baseURL: 'http://' + this._request.headers['gateway-host'] as string + '/',

            });

        } else {

            axios = Axios.create({
                baseURL: 'http://' + this._defaultGatewayHost + '/',
            });

        }

        return axios;
    }
}

