"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsServer = void 0;
const websockets_1 = require("@marblejs/websockets");
const ws_listener_1 = require("./ws.listener");
const wsServer = websockets_1.createWebSocketServer({
    options: {
        port: 1338,
        host: '127.0.0.1',
    },
    listener: ws_listener_1.listener,
    dependencies: [
    // bindEagerlyTo(PropagateLoginStatusToken)(() => PropagateLoginStatus),
    ],
});
exports.wsServer = wsServer;
//# sourceMappingURL=ws.server.js.map