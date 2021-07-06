"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth$ = void 0;
const core_1 = require("@marblejs/core");
const cancel_login_effect_1 = require("./cancel-login.effect");
const init_login_effect_1 = require("./init-login.effect");
const logout_effect_1 = require("./logout.effect");
const auth$ = core_1.combineRoutes('/auth', [
    init_login_effect_1.initLogin$, cancel_login_effect_1.cancelLogin$, logout_effect_1.logout$,
]);
exports.auth$ = auth$;
//# sourceMappingURL=index.js.map