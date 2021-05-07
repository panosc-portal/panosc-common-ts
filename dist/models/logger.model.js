"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const console_logger_model_1 = require("./console-logger.model");
const enumerations_1 = require("./enumerations");
const remote_logger_model_1 = require("./remote-logger.model");
class Logger {
    constructor(_axios, _applicationName, _consoleLoggerThreshold) {
        this._axios = _axios;
        this._applicationName = _applicationName;
        this._consoleLoggerThreshold = _consoleLoggerThreshold;
        this._loggers = new Array();
        this._loggers.push(new console_logger_model_1.ConsoleLogger(this._consoleLoggerThreshold));
        this._loggers.push(new remote_logger_model_1.RemoteLogger(this._axios, this._applicationName));
    }
    async debug(message) {
        this.sendMessage(enumerations_1.LogLevel.DEBUG, message);
    }
    async info(message) {
        this.sendMessage(enumerations_1.LogLevel.INFO, message);
    }
    async warning(message) {
        this.sendMessage(enumerations_1.LogLevel.WARN, message);
    }
    async error(message, exception) {
        this.sendMessage(enumerations_1.LogLevel.ERROR, message, exception);
    }
    async sendMessage(logLevel, message, exception) {
        this._loggers.forEach(function (logger) {
            switch (logLevel) {
                case enumerations_1.LogLevel.DEBUG: {
                    logger.debug(message);
                    break;
                }
                case enumerations_1.LogLevel.INFO: {
                    logger.info(message);
                    break;
                }
                case enumerations_1.LogLevel.WARN: {
                    logger.warning(message);
                    break;
                }
                case enumerations_1.LogLevel.ERROR: {
                    logger.error(message, exception);
                    break;
                }
            }
        });
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.model.js.map