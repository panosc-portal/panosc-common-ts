"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullLogger = void 0;
class NullLogger {
    async debug(message) { }
    async info(message) { }
    async warning(message) { }
    async error(message, exception) { }
}
exports.NullLogger = NullLogger;
//# sourceMappingURL=null-logger.model.js.map