"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationCancelledEvent = exports.AuthenticationRequiredEvent = void 0;
const core_1 = require("@marblejs/core");
const t = __importStar(require("io-ts"));
var AuthenticationEventType;
(function (AuthenticationEventType) {
    AuthenticationEventType["AUTHENTICATION_REQUIRED"] = "AUTHENTICATION_REQUIRED";
    AuthenticationEventType["AUTHENTICATION_CANCELLED"] = "AUTHENTICATION_CANCELLED";
})(AuthenticationEventType || (AuthenticationEventType = {}));
const AuthenticationRequiredEvent = core_1.event(AuthenticationEventType.AUTHENTICATION_REQUIRED)(t.type({
    id: t.string,
}));
exports.AuthenticationRequiredEvent = AuthenticationRequiredEvent;
const AuthenticationCancelledEvent = core_1.event(AuthenticationEventType.AUTHENTICATION_CANCELLED)(t.type({
    id: t.string,
}));
exports.AuthenticationCancelledEvent = AuthenticationCancelledEvent;
//# sourceMappingURL=authentication.events.js.map