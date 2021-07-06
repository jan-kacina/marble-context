"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSocketIoServer = void 0;
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const connected_sockets_1 = require("../state/connected-sockets/connected-sockets");
const startSocketIoServer = () => {
    const socketIoPort = 1339;
    const httpServer = http_1.createServer();
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: ['http://localhost:3000', 'https://amritb.github.io'],
        },
    });
    io.on('connection', (socket) => {
        connected_sockets_1.connectedSockets.connect(socket);
        console.log(`Socket ${socket.id} connected`);
        socket.on('dummy', () => { console.log('Dummy called'); });
        socket.on('disconnect', (reason) => {
            connected_sockets_1.connectedSockets.disconnect(socket);
            console.log(`Socket ${socket.id} disconnected with reason ${reason}`);
        });
    });
    httpServer.listen(socketIoPort);
    console.log(`Socket.io server running @ http://127.0.0.1:${socketIoPort}/ 🚀`);
};
exports.startSocketIoServer = startSocketIoServer;
//# sourceMappingURL=socket-io-server.js.map