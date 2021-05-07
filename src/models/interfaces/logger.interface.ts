export interface ILogger {

  debug(message: string): Promise<void>;

  info(message: string): Promise<void>;

  warning(message: string): Promise<void>;

  error(message: string, exception?: string): Promise<void>;
}
