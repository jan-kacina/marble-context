"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelLogin$ = void 0;
const core_1 = require("@marblejs/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const auth_action_1 = require("../../state/auth-action");
const tokens_1 = require("../../ws-api/tokens");
const cancelLogin$ = core_1.r.pipe(core_1.r.matchPath('/login/cancel'), core_1.r.matchType('POST'), core_1.r.useEffect((req$, ctx) => req$.pipe(operators_1.tap(() => auth_action_1.authAction.newAction(auth_action_1.AuthActionType.LOGIN_CANCEL)), operators_1.switchMap(() => rxjs_1.of(core_1.useContext(tokens_1.WebSocketServerToken)(ctx.ask))), operators_1.tap((wsServer) => wsServer.sendBroadcastResponse({ type: 'JKJK', payload: { a: 1 } })), operators_1.tap((wsServer) => console.log(`JK: ${wsServer.clients.size}`)), operators_1.mapTo({ status: core_1.HttpStatus.ACCEPTED }))));
exports.cancelLogin$ = cancelLogin$;
//# sourceMappingURL=cancel-login.effect.js.map