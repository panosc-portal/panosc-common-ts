"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const winston_1 = require("winston");
class ConsoleLogger {
    constructor(_consoleLoggerThreshold) {
        this._consoleLoggerThreshold = _consoleLoggerThreshold;
        this._logger = winston_1.createLogger({
            level: this._consoleLoggerThreshold,
            transports: [
                new winston_1.transports.Console({
                    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({
                        format: 'YYYY-MM-DD HH:mm:ss'
                    }), winston_1.format.printf(info => {
                        return `${info.timestamp} ${info.level}: ${info.message}`;
                    }))
                })
            ]
        });
    }
    async debug(message) {
        this._logger.debug(message);
    }
    async info(message) {
        this._logger.info(message);
    }
    async warning(message) {
        this._logger.warn(message);
    }
    async error(message, exception) {
        this._logger.error(message + (exception ? '\n' + exception : ''));
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=console-logger.model.js.map