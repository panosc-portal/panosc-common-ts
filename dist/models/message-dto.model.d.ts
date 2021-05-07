import { LogLevel } from './enumerations';
export declare class MessageDto {
    createdAt: Date;
    message: string;
    level: LogLevel;
    application: string;
    hostname: string;
    exception?: string;
    metadata?: Object;
    constructor(data?: Partial<MessageDto>);
}
