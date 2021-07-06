"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const login_status_1 = require("../../streams/login-status");
const login$ = core_1.r.pipe(core_1.r.matchPath('/login'), core_1.r.matchType('GET'), core_1.r.useEffect((req$) => req$.pipe(operators_1.tap(() => login_status_1.loginUser()), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.login$ = login$;
//# sourceMappingURL=login.effect.js.map