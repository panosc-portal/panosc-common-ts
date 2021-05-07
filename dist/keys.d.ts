import { BindingKey } from '@loopback/core';
import { PanoscCommonTsComponent } from './component';
import { GatewayClient } from './providers/GatewayClient';
import { LoggerProvider } from './providers/logger.provider';
/**
 * Binding keys used by this component.
 */
export declare namespace PanoscCommonTsComponentBindings {
    const COMPONENT: BindingKey<PanoscCommonTsComponent>;
    const GATEWAY_CLIENT: BindingKey<GatewayClient>;
    const LOGGER: BindingKey<LoggerProvider>;
}
