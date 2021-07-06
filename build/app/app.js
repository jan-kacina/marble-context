"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const code_scanner_1 = require("./datasources/code-scanner");
const http_server_1 = require("./http-api/http.server");
const user_status_1 = require("./state/user-status");
const actions_1 = require("./actions");
const socket_io_server_1 = require("./socket-io-api/socket-io-server");
const main = async () => {
    await code_scanner_1.initCodeScanner();
    code_scanner_1.scannedCodes$.subscribe((code) => console.log(`Scanned code: ${code}`));
    user_status_1.userStatus.state$.subscribe((v) => console.log(`Auth status: ${JSON.stringify(v.value)}, Timestamp: ${v.timestamp}`));
    await (await http_server_1.httpServer)();
    socket_io_server_1.startSocketIoServer();
    actions_1.loginUser.register();
    actions_1.logoutUser.register();
    actions_1.propagateUserStatus.register();
};
exports.main = main;
//# sourceMappingURL=app.js.map