import { AxiosInstance } from 'axios';
import { ILogger } from './interfaces';
export declare class Logger implements ILogger {
    private _axios;
    private _applicationName;
    private _consoleLoggerThreshold;
    private _loggers;
    constructor(_axios: AxiosInstance, _applicationName: string, _consoleLoggerThreshold: string);
    debug(message: string): Promise<void>;
    info(message: string): Promise<void>;
    warning(message: string): Promise<void>;
    error(message: string, exception?: string): Promise<void>;
    private sendMessage;
}
