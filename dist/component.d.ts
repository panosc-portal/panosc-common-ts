import { Application, Component, ProviderMap } from '@loopback/core';
import { PanoscCommonTsComponentOptions } from './types';
export declare class PanoscCommonTsComponent implements Component {
    private application;
    private options;
    providers?: ProviderMap;
    constructor(application: Application, options?: PanoscCommonTsComponentOptions);
}
