"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const auth_action_1 = require("../../state/auth-action");
const logout$ = core_1.r.pipe(core_1.r.matchPath('/logout'), core_1.r.matchType('POST'), core_1.r.useEffect((req$) => req$.pipe(operators_1.tap(() => auth_action_1.authAction.newAction(auth_action_1.AuthActionType.LOGOUT)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.logout$ = logout$;
//# sourceMappingURL=logout.effect.js.map