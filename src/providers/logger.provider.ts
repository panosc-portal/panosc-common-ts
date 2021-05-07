import {bind, BindingScope, config, inject, Provider} from '@loopback/core';
import {AxiosInstance} from 'axios';
import {PanoscCommonTsComponentBindings} from '../keys';
import {Logger} from '../models';
import {ILogger} from '../models/interfaces';

@bind({scope: BindingScope.CONTEXT})
export class LoggerProvider implements Provider<ILogger> {

  constructor(
    @inject(PanoscCommonTsComponentBindings.GATEWAY_CLIENT) private _axios: AxiosInstance,
    @config({
      fromBinding: PanoscCommonTsComponentBindings.COMPONENT,
      propertyPath: 'applicationName'
    })
    private _applicationName: string,
    @config({
      fromBinding: PanoscCommonTsComponentBindings.COMPONENT,
      propertyPath: 'consoleLoggerThreshold'
    })
    private _consoleLoggerThreshold: string
  ) {

    this._axios.defaults.baseURL += 'logging-service/api/v1';
  }

  value(): ILogger {
    return new Logger(this._axios, this._applicationName, this._consoleLoggerThreshold);
  }
}

