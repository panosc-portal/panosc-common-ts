import {AxiosInstance} from 'axios';
import {hostname} from 'os';
import {MessageDto} from './dto';
import {LogLevel} from './enumerations';
import {ILogger} from './interfaces';

export class RemoteLogger implements ILogger {

  constructor(private _axios: AxiosInstance, private _applicationName: string) {}

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

    let messageDto: MessageDto = new MessageDto();
    messageDto.level = logLevel;
    messageDto.message = message;
    messageDto.exception = exception;
    messageDto.application = this._applicationName;
    messageDto.hostname = hostname();
    messageDto.createdAt = new Date();

    await this._axios.post('/messages', messageDto);
  }
}
