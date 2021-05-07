"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const os_1 = require("os");
const models_1 = require("../models");
const enumerations_1 = require("../models/enumerations");
class Logger {
    constructor(_axios, _applicationName) {
        this._axios = _axios;
        this._applicationName = _applicationName;
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
        let messageDto = new models_1.MessageDto();
        messageDto.level = logLevel;
        messageDto.message = message;
        messageDto.exception = exception;
        messageDto.application = this._applicationName;
        messageDto.hostname = os_1.hostname();
        messageDto.createdAt = new Date();
        await this._axios.post('/messages', messageDto);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map