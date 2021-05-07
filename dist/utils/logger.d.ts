import { AxiosInstance } from 'axios';
export declare class Logger {
    private _axios;
    private _applicationName;
    constructor(_axios: AxiosInstance, _applicationName: string);
    debug(message: string): Promise<void>;
    info(message: string): Promise<void>;
    warning(message: string): Promise<void>;
    error(message: string, exception?: string): Promise<void>;
    private sendMessage;
}
