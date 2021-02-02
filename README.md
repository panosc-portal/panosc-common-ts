# panosc-common-ts

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install PanoscCommonTsComponent using `npm`;

```sh
$ [npm install | yarn add] panosc-common-ts
```

## Basic Use

Configure and load PanoscCommonTsComponent in the application constructor
as shown below.

```ts
import {PanoscCommonTsComponent, PanoscCommonTsComponentOptions, DEFAULT_PANOSC_COMMON_TS_OPTIONS} from 'panosc-common-ts';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: PanoscCommonTsComponentOptions = DEFAULT_PANOSC_COMMON_TS_OPTIONS;
    this.configure(PanoscCommonTsComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(PanoscCommonTsComponent);
    // ...
  }
  // ...
}
```
