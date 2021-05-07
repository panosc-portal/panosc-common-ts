"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLogger = void 0;
const os_1 = require("os");
const dto_1 = require("./dto");
const enumerations_1 = require("./enumerations");
class RemoteLogger {
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
        let messageDto = new dto_1.MessageDto();
        messageDto.level = logLevel;
        messageDto.message = message;
        messageDto.exception = exception;
        messageDto.application = this._applicationName;
        messageDto.hostname = os_1.hostname();
        messageDto.createdAt = new Date();
        await this._axios.post('/messages', messageDto);
    }
}
exports.RemoteLogger = RemoteLogger;
//# sourceMappingURL=remote-logger.model.js.map