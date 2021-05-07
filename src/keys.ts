import {BindingKey, CoreBindings} from '@loopback/core';
import {PanoscCommonTsComponent} from './component';
import {GatewayClient} from './providers/GatewayClient';
import {LoggerProvider} from './providers/logger.provider';
/**
 * Binding keys used by this component.
 */
export namespace PanoscCommonTsComponentBindings {
  export const COMPONENT = BindingKey.create<PanoscCommonTsComponent>(
    `${CoreBindings.COMPONENTS}.PanoscCommonTsComponent`,
  );
  export const GATEWAY_CLIENT = BindingKey.create<GatewayClient>(
    `${CoreBindings.COMPONENTS}.GatewayClientProvider`,
  );
  export const LOGGER = BindingKey.create<LoggerProvider>(
    `${CoreBindings.COMPONENTS}.LoggerProvider`,
  );
}

