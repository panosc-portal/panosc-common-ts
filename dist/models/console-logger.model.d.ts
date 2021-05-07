import { ILogger } from './interfaces';
export declare class ConsoleLogger implements ILogger {
    private _consoleLoggerThreshold;
    private _logger;
    constructor(_consoleLoggerThreshold: string);
    debug(message: string): Promise<void>;
    info(message: string): Promise<void>;
    warning(message: string): Promise<void>;
    error(message: string, exception?: string): Promise<void>;
}
