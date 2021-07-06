"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
const core_1 = require("@marblejs/core");
const middleware_logger_1 = require("@marblejs/middleware-logger");
const middleware_body_1 = require("@marblejs/middleware-body");
const auth_1 = require("./app/api/auth");
const middlewares = [
    middleware_logger_1.logger$(),
    middleware_body_1.bodyParser$(),
    // middleware3$
    // middleware4$
    // ...
];
const localEffects = [
    auth_1.auth$,
    // endpoint2$
    // endpoint3$
    // ...
];
const listener = (injectedEffects) => core_1.httpListener({
    middlewares,
    effects: [...localEffects, ...injectedEffects],
});
exports.listener = listener;
//# sourceMappingURL=http.listener.js.map