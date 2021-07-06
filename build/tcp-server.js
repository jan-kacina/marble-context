"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
const server = net_1.createServer((socket) => {
    console.log('Connection from', socket.remoteAddress, 'port', socket.remotePort);
    socket.on('data', (buffer) => {
        console.log('Request from', socket.remoteAddress, 'port', socket.remotePort);
        console.log(`${buffer.toString()}`);
        //socket.write(`${buffer.toString('utf-8').toUpperCase()}\n`)
    });
    socket.on('end', () => {
        console.log('Closed', socket.remoteAddress, 'port', socket.remotePort);
    });
});
server.maxConnections = 20;
server.listen(9004);
//# sourceMappingURL=tcp-server.js.map