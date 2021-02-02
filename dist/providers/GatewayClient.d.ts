/// <reference types="express" />
import { Provider } from '@loopback/core';
import { Request } from '@loopback/rest';
import { AxiosInstance } from 'axios';
export declare class GatewayClient implements Provider<AxiosInstance> {
    private request;
    constructor(request: Request);
    value(): AxiosInstance;
}
