"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelLogin$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const auth_action_1 = require("../../state/auth-action");
const cancelLogin$ = core_1.r.pipe(core_1.r.matchPath('/login/cancel'), core_1.r.matchType('POST'), core_1.r.useEffect((req$) => req$.pipe(operators_1.tap(() => auth_action_1.authAction.newAction(auth_action_1.AuthActionType.LOGIN_CANCEL)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.cancelLogin$ = cancelLogin$;
//# sourceMappingURL=cancel-login.effect.js.map