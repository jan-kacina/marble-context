"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsServer = void 0;
const core_1 = require("@marblejs/core");
const websockets_1 = require("@marblejs/websockets");
const propagate_user_status_action_1 = require("../actions/propagate-user-status.action");
const ws_listener_1 = require("./ws.listener");
const wsServer = websockets_1.createWebSocketServer({
    options: {
        port: 1338,
        host: '127.0.0.1',
    },
    listener: ws_listener_1.listener,
    dependencies: [
        core_1.bindEagerlyTo(propagate_user_status_action_1.PropagateUserStatusToken)(() => propagate_user_status_action_1.propagateUserStatus),
    ],
});
exports.wsServer = wsServer;
//# sourceMappingURL=ws.server.js.map