import { Context, Provider } from '@loopback/core';
import { AxiosInstance } from 'axios';
export declare class GatewayClient implements Provider<AxiosInstance> {
    private _context;
    private _defaultGatewayHost;
    private _request;
    constructor(_context: Context, _defaultGatewayHost: string);
    value(): AxiosInstance;
}
