"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const enumerations_1 = require("../enumerations");
let MessageDto = class MessageDto {
    constructor(data) {
        Object.assign(this, data);
    }
};
tslib_1.__decorate([
    repository_1.property({ type: 'Date', required: true }),
    tslib_1.__metadata("design:type", Date)
], MessageDto.prototype, "createdAt", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string', required: true }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "message", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(enumerations_1.LogLevel)
        }
    }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "level", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string', required: true }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "application", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string', required: true }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "hostname", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'string' }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "exception", void 0);
tslib_1.__decorate([
    repository_1.property({ type: 'Object' }),
    tslib_1.__metadata("design:type", Object)
], MessageDto.prototype, "metadata", void 0);
MessageDto = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], MessageDto);
exports.MessageDto = MessageDto;
//# sourceMappingURL=message.dto.js.map