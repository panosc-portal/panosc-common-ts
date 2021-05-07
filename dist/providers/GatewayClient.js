"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayClient = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const axios_1 = tslib_1.__importDefault(require("axios"));
const keys_1 = require("../keys");
let GatewayClient = class GatewayClient {
    constructor(_context, _defaultGatewayHost) {
        this._context = _context;
        this._defaultGatewayHost = _defaultGatewayHost;
        let httpRequestBinding = this._context.getBinding(rest_1.RestBindings.Http.REQUEST, { optional: true });
        this._request = httpRequestBinding === null || httpRequestBinding === void 0 ? void 0 : httpRequestBinding.getValue(this._context);
    }
    value() {
        let axios;
        if (this._request) {
            axios = axios_1.default.create({
                baseURL: 'http://' + this._request.headers['gateway-host'] + '/',
            });
        }
        else {
            axios = axios_1.default.create({
                baseURL: 'http://' + this._defaultGatewayHost + '/',
            });
        }
        return axios;
    }
};
GatewayClient = tslib_1.__decorate([
    core_1.bind({ scope: core_1.BindingScope.CONTEXT }),
    tslib_1.__param(0, core_1.inject.context()),
    tslib_1.__param(1, core_1.config({
        fromBinding: keys_1.PanoscCommonTsComponentBindings.COMPONENT,
        propertyPath: 'defaultGatewayHost'
    })),
    tslib_1.__metadata("design:paramtypes", [core_1.Context, String])
], GatewayClient);
exports.GatewayClient = GatewayClient;
//# sourceMappingURL=GatewayClient.js.map