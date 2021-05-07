"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanoscCommonTsComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const keys_1 = require("./keys");
const GatewayClient_1 = require("./providers/GatewayClient");
const logger_provider_1 = require("./providers/logger.provider");
const types_1 = require("./types");
// Configure the binding for PanoscCommonTsComponent
let PanoscCommonTsComponent = class PanoscCommonTsComponent {
    constructor(application, options = types_1.DEFAULT_PANOSC_COMMON_TS_OPTIONS) {
        this.application = application;
        this.options = options;
        this.providers = {
            [keys_1.PanoscCommonTsComponentBindings.GATEWAY_CLIENT.key]: GatewayClient_1.GatewayClient,
            [keys_1.PanoscCommonTsComponentBindings.LOGGER.key]: logger_provider_1.LoggerProvider
        };
    }
};
PanoscCommonTsComponent = tslib_1.__decorate([
    core_1.bind({ tags: { [core_1.ContextTags.KEY]: keys_1.PanoscCommonTsComponentBindings.COMPONENT } }),
    tslib_1.__param(0, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__param(1, core_1.config()),
    tslib_1.__metadata("design:paramtypes", [core_1.Application, Object])
], PanoscCommonTsComponent);
exports.PanoscCommonTsComponent = PanoscCommonTsComponent;
//# sourceMappingURL=component.js.map