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
exports.CodeScannerDisconnectedEvent = exports.CodeScannerConnectedEvent = exports.CodeScannerCodeReadEvent = void 0;
const core_1 = require("@marblejs/core");
const t = __importStar(require("io-ts"));
var CodeScannerEventType;
(function (CodeScannerEventType) {
    CodeScannerEventType["CODE_SCANNER_CODE_READ"] = "CODE_SCANNER_CODE_READ";
    CodeScannerEventType["CODE_SCANNER_CONNECTED"] = "CODE_SCANNER_CONNECTED";
    CodeScannerEventType["CODE_SCANNER_DISCONNECTED"] = "CODE_SCANNER_DISCONNECTED";
})(CodeScannerEventType || (CodeScannerEventType = {}));
const CodeScannerCodeReadEvent = core_1.event(CodeScannerEventType.CODE_SCANNER_CODE_READ)(t.type({
    id: t.string,
}));
exports.CodeScannerCodeReadEvent = CodeScannerCodeReadEvent;
const CodeScannerConnectedEvent = core_1.event(CodeScannerEventType.CODE_SCANNER_CONNECTED)(t.type({
    id: t.string,
}));
exports.CodeScannerConnectedEvent = CodeScannerConnectedEvent;
const CodeScannerDisconnectedEvent = core_1.event(CodeScannerEventType.CODE_SCANNER_DISCONNECTED)(t.type({
    id: t.string,
}));
exports.CodeScannerDisconnectedEvent = CodeScannerDisconnectedEvent;
//# sourceMappingURL=code-scanner.events.js.map