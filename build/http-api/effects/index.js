"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root$ = void 0;
const core_1 = require("@marblejs/core");
const login_effect_1 = require("./login.effect");
const logout_effect_1 = require("./logout.effect");
const test_effect_1 = require("./test.effect");
const root$ = core_1.combineRoutes('/', [
    login_effect_1.login$, logout_effect_1.logout$, test_effect_1.test$,
]);
exports.root$ = root$;
//# sourceMappingURL=index.js.map