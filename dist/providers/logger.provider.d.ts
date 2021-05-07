import { Provider } from '@loopback/core';
import { AxiosInstance } from 'axios';
import { ILogger } from '../models/interfaces';
export declare class LoggerProvider implements Provider<ILogger> {
    private _axios;
    private _applicationName;
    private _consoleLoggerThreshold;
    constructor(_axios: AxiosInstance, _applicationName: string, _consoleLoggerThreshold: string);
    value(): ILogger;
}
