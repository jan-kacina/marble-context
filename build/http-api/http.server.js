"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const core_1 = require("@marblejs/core");
const propagate_login_status_1 = require("../actions/propagate-login-status");
const tokens_1 = require("../ws-api/tokens");
const ws_server_1 = require("../ws-api/ws.server");
const http_listener_1 = require("./http.listener");
const httpServer = core_1.createServer({
    port: 1337,
    hostname: '127.0.0.1',
    listener: http_listener_1.listener(),
    dependencies: [
        core_1.bindEagerlyTo(propagate_login_status_1.PropagateLoginStatusToken)(() => propagate_login_status_1.PropagateLoginStatus),
        // eslint-disable-next-line @typescript-eslint/return-await
        core_1.bindEagerlyTo(tokens_1.WebSocketServerToken)(async () => await (await ws_server_1.wsServer)()),
    ],
});
exports.httpServer = httpServer;
//# sourceMappingURL=http.server.js.map