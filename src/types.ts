/**
* Interface defining the component's options object
*/
export interface PanoscCommonTsComponentOptions {
  // Add the definitions here
  defaultGatewayHost?: string;
  applicationName: string;
  consoleLoggerThreshold: string;
}

/**
* Default options for the component
*/
export const DEFAULT_PANOSC_COMMON_TS_OPTIONS: PanoscCommonTsComponentOptions = {
  // Specify the values here
  applicationName: '',
  consoleLoggerThreshold: ''
};


