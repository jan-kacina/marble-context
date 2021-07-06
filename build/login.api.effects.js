"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelLogin$ = exports.initiateLogin$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const auth_action_1 = require("./auth-action");
const initiateLogin$ = core_1.r.pipe(core_1.r.matchPath('/login'), core_1.r.matchType('POST'), core_1.r.useEffect((req$) => req$.pipe(operators_1.tap(() => auth_action_1.authAction.newAction(auth_action_1.AuthActionType.LOGIN_INIT)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.initiateLogin$ = initiateLogin$;
const cancelLogin$ = core_1.r.pipe(core_1.r.matchPath('/login'), core_1.r.matchType('DELETE'), core_1.r.useEffect((req$) => req$.pipe(operators_1.tap(() => auth_action_1.authAction.newAction(auth_action_1.AuthActionType.LOGIN_CANCEL)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.cancelLogin$ = cancelLogin$;
//# sourceMappingURL=login.api.effects.js.map