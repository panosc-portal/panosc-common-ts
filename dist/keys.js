"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanoscCommonTsComponentBindings = void 0;
const core_1 = require("@loopback/core");
/**
 * Binding keys used by this component.
 */
var PanoscCommonTsComponentBindings;
(function (PanoscCommonTsComponentBindings) {
    PanoscCommonTsComponentBindings.COMPONENT = core_1.BindingKey.create(`${core_1.CoreBindings.COMPONENTS}.PanoscCommonTsComponent`);
    PanoscCommonTsComponentBindings.GATEWAY_CLIENT = core_1.BindingKey.create(`${core_1.CoreBindings.COMPONENTS}.GatewayClientProvider`);
    PanoscCommonTsComponentBindings.LOGGER = core_1.BindingKey.create(`${core_1.CoreBindings.COMPONENTS}.LoggerProvider`);
})(PanoscCommonTsComponentBindings = exports.PanoscCommonTsComponentBindings || (exports.PanoscCommonTsComponentBindings = {}));
//# sourceMappingURL=keys.js.map