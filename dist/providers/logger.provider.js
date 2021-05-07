"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
const models_1 = require("../models");
let LoggerProvider = class LoggerProvider {
    constructor(_axios, _applicationName, _consoleLoggerThreshold) {
        this._axios = _axios;
        this._applicationName = _applicationName;
        this._consoleLoggerThreshold = _consoleLoggerThreshold;
        this._axios.defaults.baseURL += 'logging-service/api/v1';
    }
    value() {
        return new models_1.Logger(this._axios, this._applicationName, this._consoleLoggerThreshold);
    }
};
LoggerProvider = tslib_1.__decorate([
    core_1.bind({ scope: core_1.BindingScope.CONTEXT }),
    tslib_1.__param(0, core_1.inject(keys_1.PanoscCommonTsComponentBindings.GATEWAY_CLIENT)),
    tslib_1.__param(1, core_1.config({
        fromBinding: keys_1.PanoscCommonTsComponentBindings.COMPONENT,
        propertyPath: 'applicationName'
    })),
    tslib_1.__param(2, core_1.config({
        fromBinding: keys_1.PanoscCommonTsComponentBindings.COMPONENT,
        propertyPath: 'consoleLoggerThreshold'
    })),
    tslib_1.__metadata("design:paramtypes", [Function, String, String])
], LoggerProvider);
exports.LoggerProvider = LoggerProvider;
//# sourceMappingURL=logger.provider.js.map