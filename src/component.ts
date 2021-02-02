import {
  Application,
  bind,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
  ProviderMap,
} from '@loopback/core';
import {PanoscCommonTsComponentBindings} from './keys'
import { GatewayClient } from './providers/GatewayClient';
import {DEFAULT_PANOSC_COMMON_TS_OPTIONS, PanoscCommonTsComponentOptions} from './types';

// Configure the binding for PanoscCommonTsComponent
@bind({tags: {[ContextTags.KEY]: PanoscCommonTsComponentBindings.COMPONENT}})
export class PanoscCommonTsComponent implements Component {
  providers?: ProviderMap = {[PanoscCommonTsComponentBindings.GATEWAY_CLIENT.key]: GatewayClient};

  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: PanoscCommonTsComponentOptions = DEFAULT_PANOSC_COMMON_TS_OPTIONS,
  ) {
  }
}
