"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test$ = void 0;
const core_1 = require("@marblejs/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const tokens_1 = require("../../ws-api/tokens");
const test$ = core_1.r.pipe(core_1.r.matchPath('/test'), core_1.r.matchType('GET'), core_1.r.useEffect((req$, ctx) => req$.pipe(operators_1.switchMap(() => rxjs_1.of(core_1.useContext(tokens_1.WebSocketServerToken)(ctx.ask))), operators_1.tap((wsServer) => wsServer.sendBroadcastResponse({ type: 'test', payload: { a: 1 } })), operators_1.tap((wsServer) => console.log(`Number of clients: ${wsServer.clients.size}`)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.test$ = test$;
//# sourceMappingURL=test.effect.js.map