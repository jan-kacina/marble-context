"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectedSockets = void 0;
const base_state_object_1 = require("../common/base-state-object");
class ConnectedSockets extends base_state_object_1.BaseStateObject {
    constructor() {
        super({ sockets: new Map() });
    }
    connect(socket) {
        this.state.sockets.set(socket.id, socket);
    }
    disconnect(socket) {
        this.state.sockets.delete(socket.id);
    }
    send(message) {
        this.state.sockets.forEach((socket) => {
            console.log(`Sending message type ${message.type} to socket ${socket.id}...`);
            socket.send(message);
            console.log(`Message type ${message.type} sent to socket ${socket.id}.`);
        });
    }
}
const connectedSockets = new ConnectedSockets();
exports.connectedSockets = connectedSockets;
//# sourceMappingURL=connected-sockets.js.map