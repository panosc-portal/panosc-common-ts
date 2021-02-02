"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayClient = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const axios_1 = tslib_1.__importDefault(require("axios"));
let GatewayClient = class GatewayClient {
    constructor(request) {
        this.request = request;
    }
    value() {
        let res = axios_1.default.create({
            baseURL: 'http://' + this.request.headers["gateway-host"] + '/',
            headers: {
                'access_token': this.request.headers.access_token
            }
        });
        return res;
    }
};
GatewayClient = tslib_1.__decorate([
    core_1.bind({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], GatewayClient);
exports.GatewayClient = GatewayClient;
//# sourceMappingURL=GatewayClient.js.map