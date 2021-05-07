import {AxiosInstance} from 'axios';
import {ConsoleLogger} from './console-logger.model';
import {LogLevel} from './enumerations';
import {ILogger} from './interfaces';
import {RemoteLogger} from './remote-logger.model';

export class Logger implements ILogger {

  private _loggers: Array<ILogger> = new Array<ILogger>();

  constructor(private _axios: AxiosInstance, private _applicationName: string, private _consoleLoggerThreshold: string) {

    this._loggers.push(new ConsoleLogger(this._consoleLoggerThreshold));
    this._loggers.push(new RemoteLogger(this._axios, this._applicationName));
  }

  async debug(message: string) {
    this.sendMessage(LogLevel.DEBUG, message);
  }

  async info(message: string) {
    this.sendMessage(LogLevel.INFO, message);
  }

  async warning(message: string) {
    this.sendMessage(LogLevel.WARN, message);
  }

  async error(message: string, exception?: string) {
    this.sendMessage(LogLevel.ERROR, message, exception);
  }

  private async sendMessage(logLevel: LogLevel, message: string, exception?: string) {

    this._loggers.forEach(function (logger) {

      switch (logLevel) {
        case LogLevel.DEBUG: {
          logger.debug(message);
          break;
        }
        case LogLevel.INFO: {
          logger.info(message);
          break;
        }
        case LogLevel.WARN: {
          logger.warning(message);
          break;
        }
        case LogLevel.ERROR: {
          logger.error(message, exception);
          break;
        }
      }
    });

  }
}
