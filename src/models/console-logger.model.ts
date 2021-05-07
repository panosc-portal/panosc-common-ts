import {createLogger, format, Logger, transports} from 'winston';
import {ILogger} from './interfaces';

export class ConsoleLogger implements ILogger {

  private _logger: Logger;

  constructor(private _consoleLoggerThreshold: string) {

    this._logger = createLogger({
      level: this._consoleLoggerThreshold,
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss'
            }),
            format.printf(info => {
              return `${info.timestamp} ${info.level}: ${info.message}`;
            })
          )
        })
      ]
    });
  }

  async debug(message: string) {
    this._logger.debug(message);
  }

  async info(message: string) {
    this._logger.info(message);
  }

  async warning(message: string) {
    this._logger.warn(message);
  }

  async error(message: string, exception?: string) {
    this._logger.error(message + (exception ? '\n' + exception : ''));
  }
}

