"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = require("net");
const readline_1 = __importDefault(require("readline"));
const host = '192.168.92.200';
const port = 9004;
const client = new net_1.Socket();
client.connect(port, host, () => {
    console.log('Connected to server');
});
client.on('data', (data) => {
    console.log(data.toString('utf-8'));
});
const rl = readline_1.default.createInterface({ input: process.stdin });
rl.on('line', (line) => {
    client.write(`${line}\r\n`);
});
rl.on('close', () => {
    client.end();
});
//# sourceMappingURL=tcp-client.js.map