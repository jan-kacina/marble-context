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
exports.UserCommandType = exports.CreateUserCommand = void 0;
const core_1 = require("@marblejs/core");
const t = __importStar(require("io-ts"));
var UserCommandType;
(function (UserCommandType) {
    UserCommandType["CREATE_USER"] = "CREATE_USER";
})(UserCommandType || (UserCommandType = {}));
exports.UserCommandType = UserCommandType;
const CreateUserCommand = core_1.event(UserCommandType.CREATE_USER)(t.type({
    firstName: t.string,
    lastName: t.string,
}));
exports.CreateUserCommand = CreateUserCommand;
//# sourceMappingURL=user.commands.js.map