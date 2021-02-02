import {BindingKey, CoreBindings} from '@loopback/core';
import {PanoscCommonTsComponent} from './component';
import { GatewayClient } from './providers/GatewayClient';

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
}
