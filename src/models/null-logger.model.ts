import {ILogger} from './interfaces';

export class NullLogger implements ILogger {

  async debug(message: string) {}

  async info(message: string) {}

  async warning(message: string) {}

  async error(message: string, exception?: string) {}
}
