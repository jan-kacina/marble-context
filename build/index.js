"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propagate_login_status_1 = require("./actions/propagate-login-status");
const http_server_1 = require("./http-api/http.server");
const main = async () => {
    await (await http_server_1.httpServer)();
    const propagateLoginStatus = new propagate_login_status_1.PropagateLoginStatus();
    propagateLoginStatus.run();
};
main();
//# sourceMappingURL=index.js.map