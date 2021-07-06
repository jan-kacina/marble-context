"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const messaging_1 = require("@marblejs/messaging");
const middleware_io_1 = require("@marblejs/middleware-io");
const function_1 = require("fp-ts/function");
const user_commands_1 = require("./user.commands");
const validateRequest = middleware_io_1.requestValidator$({
    body: middleware_io_1.t.type({
        firstName: middleware_io_1.t.string,
        lastName: middleware_io_1.t.string,
    }),
});
exports.postUser$ = core_1.r.pipe(core_1.r.matchPath('/user'), core_1.r.matchType('POST'), core_1.r.useEffect((req$, ctx) => {
    const eventBusClient = core_1.useContext(messaging_1.EventBusClientToken)(ctx.ask);
    return req$.pipe(validateRequest, operators_1.mergeMap((req) => {
        const { firstName, lastName } = req.body;
        return function_1.pipe(user_commands_1.CreateUserCommand.create({ firstName, lastName }), eventBusClient.send);
    }), operators_1.mapTo({ status: core_1.HttpStatus.CREATED }));
}));
//# sourceMappingURL=postUser.effect.js.map