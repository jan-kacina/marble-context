"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser$ = void 0;
const core_1 = require("@marblejs/core");
const messaging_1 = require("@marblejs/messaging");
const middleware_io_1 = require("@marblejs/middleware-io");
const operators_1 = require("rxjs/operators");
const function_1 = require("fp-ts/function");
const user_model_1 = require("./user.model");
const user_commands_1 = require("./user.commands");
const user_event_1 = require("./user.event");
const createUser$ = (event$, ctx) => event$.pipe(core_1.matchEvent(user_commands_1.CreateUserCommand), core_1.act(middleware_io_1.eventValidator$(user_commands_1.CreateUserCommand)), core_1.act((event) => function_1.pipe(event.payload, user_model_1.createUser, operators_1.mergeMap((user) => [
    user_event_1.UserCreatedEvent.create({ id: user.id }),
    messaging_1.reply(event)(user_event_1.UserCreatedEvent.create({ id: user.id })),
]))));
exports.createUser$ = createUser$;
//# sourceMappingURL=createUser.effect.js.map